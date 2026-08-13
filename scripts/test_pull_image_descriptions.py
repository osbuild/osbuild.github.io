#!/usr/bin/env python3
import os
import pathlib
import textwrap
import unittest
from unittest import mock

import pull_image_descriptions as mod


class TestParallelJobs(unittest.TestCase):
    def test_defaults_to_one(self):
        with mock.patch.dict(os.environ, {}, clear=True):
            os.environ.pop("PULL_IMAGE_DESCRIPTIONS_JOBS", None)
            self.assertEqual(mod.parallel_jobs(), 1)

    def test_reads_env(self):
        with mock.patch.dict(os.environ, {"PULL_IMAGE_DESCRIPTIONS_JOBS": "4"}):
            self.assertEqual(mod.parallel_jobs(), 4)

    def test_rejects_invalid(self):
        with mock.patch.dict(os.environ, {"PULL_IMAGE_DESCRIPTIONS_JOBS": "0"}):
            with self.assertRaises(SystemExit):
                mod.parallel_jobs()
        with mock.patch.dict(os.environ, {"PULL_IMAGE_DESCRIPTIONS_JOBS": "nope"}):
            with self.assertRaises(SystemExit):
                mod.parallel_jobs()


class TestBlueprintOptions(unittest.TestCase):
    def test_collect_unions_arches_and_drops_meta(self):
        arch_descriptions = {
            "x86_64": textwrap.dedent(
                """\
                distro: rhel-10.1
                type: qcow2
                arch: x86_64
                blueprint:
                    supported_options:
                        - name
                        - packages
                        - customizations.user
                """
            ),
            "aarch64": textwrap.dedent(
                """\
                distro: rhel-10.1
                type: qcow2
                arch: aarch64
                blueprint:
                    supported_options:
                        - description
                        - packages
                        - customizations.disk
                    required_options:
                        - customizations.user
                """
            ),
        }
        supported, required = mod.collect_blueprint_options(arch_descriptions)
        self.assertEqual(supported, ["customizations.disk", "customizations.user", "packages"])
        self.assertEqual(required, ["customizations.user"])

    def test_render_section_includes_links(self):
        section = mod.render_supported_customizations_section(
            ["packages", "customizations.cacerts"],
            ["customizations.installation_device"],
        )
        self.assertIn("## Supported blueprint customizations", section)
        self.assertIn(
            "[`image-builder describe`]"
            "(../../../developer-guide/02-projects/image-builder/01-usage.md#image-builder-describe)",
            section,
        )
        self.assertIn("[`packages`](../../01-blueprint-reference.md#packages)", section)
        self.assertIn(
            "[`customizations.cacerts`](../../01-blueprint-reference.md#cacerts)",
            section,
        )
        self.assertIn("**Required options:**", section)
        self.assertIn("installation_device", section)


class TestBootcImagetypes(unittest.TestCase):
    _FIXTURE = (
        pathlib.Path(__file__).resolve().parent
        / "testdata"
        / "bootc-imagetypes-fixture.yaml"
    )

    def test_parse_disk_vs_iso_allowlists(self):
        parsed = mod.parse_bootc_imagetypes(self._FIXTURE)
        self.assertIn("customizations.files", parsed["qcow2"])
        self.assertIn("customizations.directories", parsed["qcow2"])
        self.assertIn("customizations.sshd", parsed["qcow2"])
        self.assertIn("customizations.installer", parsed["anaconda-iso"])
        self.assertNotIn("customizations.files", parsed["anaconda-iso"])
        self.assertIn("customizations.installer", parsed["bootc-generic-iso"])

    def test_generate_bootc_family_pages(self):
        import tempfile

        with tempfile.TemporaryDirectory() as tmp:
            out = pathlib.Path(tmp)
            index, opts = mod.generate_bootc_family(
                self._FIXTURE, out, footer="*footer*"
            )
            self.assertTrue(index.is_file())
            qcow2 = out / "00-bootc" / "qcow2.md"
            self.assertTrue(qcow2.is_file())
            text = qcow2.read_text(encoding="utf-8")
            self.assertIn("customizations.files", text)
            self.assertIn("Container input, not package sets", text)
            iso = (out / "00-bootc" / "anaconda-iso.md").read_text(encoding="utf-8")
            self.assertIn("customizations.installer", iso)
            self.assertIn("Compatibility image type", iso)
            self.assertIn("qcow2", opts)


class TestSupportMatrix(unittest.TestCase):
    def test_extract_and_invert(self):
        import tempfile

        with tempfile.TemporaryDirectory() as tmp:
            root = pathlib.Path(tmp)
            bootc = root / "00-bootc"
            bootc.mkdir()
            (bootc / "qcow2.md").write_text(
                textwrap.dedent(
                    """\
                    # qcow2
                    ## Supported blueprint customizations

                    **Supported options:**

                    - [`customizations.files`](../../01-blueprint-reference.md#files-and-directories)
                    - `customizations.user`

                    :::note[x]
                    :::
                    """
                ),
                encoding="utf-8",
            )
            rhel = root / "00-rhel-10.2"
            rhel.mkdir()
            (rhel / "qcow2.md").write_text(
                textwrap.dedent(
                    """\
                    # qcow2
                    ## Supported blueprint customizations

                    **Supported options:**

                    - [`customizations.files`](../../01-blueprint-reference.md#files-and-directories)
                    - [`packages`](../../01-blueprint-reference.md#packages)

                    ## x86_64
                    """
                ),
                encoding="utf-8",
            )
            matrix = mod.build_option_support_matrix(root)
            self.assertEqual(matrix["options"]["customizations.files"]["bootc"], ["qcow2"])
            self.assertEqual(
                matrix["options"]["customizations.files"]["classic_image_types"], ["qcow2"]
            )
            self.assertEqual(matrix["options"]["packages"]["bootc"], [])
            self.assertEqual(matrix["options"]["packages"]["classic_image_types"], ["qcow2"])


if __name__ == "__main__":
    unittest.main()

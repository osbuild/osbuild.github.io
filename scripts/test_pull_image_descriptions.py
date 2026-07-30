#!/usr/bin/env python3
import textwrap
import unittest

import pull_image_descriptions as mod


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
        self.assertIn("`customizations.cacerts`", section)
        self.assertIn("**Required options:**", section)
        self.assertIn("installation_device", section)


if __name__ == "__main__":
    unittest.main()

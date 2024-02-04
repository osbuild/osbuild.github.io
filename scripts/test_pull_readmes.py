import unittest
from pull_readmes import resolve_dirs

class TestResolveDirs(unittest.TestCase):
    def setUp(self):
        self.baseurl = "https://github.com/osbuild/main/docs/README.md"

    def test_resolve_dirs_no_change(self):
        relative_link = "file.md"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual(absolute_link, "https://github.com/osbuild/tree/main/docs/file.md")

    def test_resolve_dirs_starting_with_dot_slash(self):
        relative_link = "./path/to/file.md"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual(absolute_link, "https://github.com/osbuild/tree/main/docs/path/to/file.md")

    def test_resolve_dirs_starting_with_dot_dot_slash(self):
        relative_link = "../path/to/file.md"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual(absolute_link, "https://github.com/osbuild/tree/main/path/to/file.md")

    def test_resolve_dirs_with_anchor(self):
        relative_link = "path/to/file.md#section"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual(absolute_link, "https://github.com/osbuild/tree/main/docs/path/to/file.md#section")

if __name__ == '__main__':
    unittest.main()

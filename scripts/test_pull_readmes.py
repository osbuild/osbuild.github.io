import re
import unittest
from utils import resolve_dirs, replace_relative_links, RELATIVE_LINK_PATTERN


class TestResolveDirs(unittest.TestCase):
    def setUp(self):
        self.baseurl = "https://github.com/osbuild/main/docs/README.md"

    def test_resolve_dirs_no_change(self):
        relative_link = "file.md"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual( "https://github.com/osbuild/tree/main/docs/file.md", absolute_link)

    def test_resolve_dirs_starting_with_dot_slash(self):
        relative_link = "./path/to/file.md"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual( "https://github.com/osbuild/tree/main/docs/path/to/file.md", absolute_link)

    def test_resolve_dirs_starting_with_dot_dot_slash(self):
        relative_link = "../path/to/file.md"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual( "https://github.com/osbuild/tree/main/path/to/file.md", absolute_link)

    def test_resolve_dirs_with_anchor(self):
        relative_link = "path/to/file.md#section"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual( "https://github.com/osbuild/tree/main/docs/path/to/file.md#section", absolute_link)

    def test_resolve_dirs_local_anchor(self):
        relative_link = "#section"
        absolute_link = resolve_dirs(self.baseurl, relative_link)
        self.assertEqual( "#section", absolute_link)

    def test_replace_relative_links(self):

        test_cases = [
            {
                'description': "Test Markdown relative link replacement",
                'content': "[my link](../path/to/file.md)",
                'expected': "[my link](../path/to/file.md)"
            },
            {
                'description': "Test HTTP absolute link remains unchanged",
                'content': "[my link](http://example.com/path/to/)",
                'expected': "[my link](http://example.com/path/to/)"
            },
            {
                'description': "Test folder relative link replacement",
                'content': "[my link](./some/path/to/)",
                'expected': "[my link](https://github.com/osbuild/tree/main/docs/some/path/to/)"
            }
        ]

        for case in test_cases:
            with self.subTest(case['description']):
                absolute_link = re.sub(
                    RELATIVE_LINK_PATTERN,
                    lambda match: replace_relative_links(match, self.baseurl),
                    case['content'],
                    flags=re.DOTALL
                )

                self.assertEqual(case['expected'], absolute_link)


if __name__ == '__main__':
    unittest.main()

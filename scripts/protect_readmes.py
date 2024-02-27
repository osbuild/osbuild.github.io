#!/usr/bin/env python3

# Small script to verify the READMEs that get pulled in automatically don't get changed in a pull request

import argparse
import subprocess
import os


def file_has_changed(filename):
    """
    Verify that the file has not been changed.
    """
    if not os.path.isfile(filename):
        print(f"Error: File not found: {filename}")
        exit(1)

    try:
        output = subprocess.check_output(['git', 'diff', '--exit-code', 'HEAD..origin/main', '--', filename])
        # If the output is empty, it means the file has not been changed
        return bool(output.strip())
    except subprocess.CalledProcessError:
        # If git diff returns a non-zero exit code, it means the file has been changed
        return True


def main():
    """
    Main function to parse command-line arguments and execute the script.
    """
    parser = argparse.ArgumentParser(description='Parse a Markdown file and replace relative links with absolute links.')
    parser.add_argument('input_file', help='Path to the input file containing source and target paths')

    args = parser.parse_args()

    if not os.path.isfile(args.input_file):
        print(f"Error: File not found: {args.input_file}")
        exit(1)

    file_changed = ""

    with open(args.input_file, 'r') as input_file:
        for line in input_file:
            # Skip comments
            if line.strip().startswith("#"):
                continue

            source, targetpath = line.strip().split(':')

            if source and targetpath:
                if file_has_changed(targetpath):
                    url = source.replace('/main','/blob/main')
                    file_changed += f"\n * {targetpath} (synced from 'http://github.com/osbuild/{url}')"

    if file_changed != "":
        print(f"⛔ Error: These files cannot be modified manually:{file_changed}")
        exit(1)
    else:
        print("✅ No automatically pulled-in files have been changed.")


if __name__ == "__main__":
    main()

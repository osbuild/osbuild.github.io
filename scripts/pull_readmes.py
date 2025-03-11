#!/usr/bin/env python3

import argparse
import re
import os
import requests

from utils import patch_md


def download_file(url, output_path):
    """
    Download a file from a given URL and save it to the specified path.
    """
    # Create directories if they don't exist
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    response = requests.get(url)
    with open(output_path, 'wb') as output_file:
        output_file.write(response.content)


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

    github_rawurl = "https://raw.githubusercontent.com/osbuild"
    github_baseurl = "https://github.com/osbuild"

    with open(args.input_file, 'r') as input_file:
        for line in input_file:
            # Skip comments
            if line.strip().startswith("#"):
                continue

            source, targetpath = line.strip().split(':')

            if source and targetpath:
                originating_url = f"{github_baseurl}/{source}"
                print(f"Downloading {github_rawurl}/{source} to {targetpath}...")
                download_file(f'{github_rawurl}/{source}', targetpath)
                print("Download completed.")

                patch_md(targetpath, originating_url)

                print(f"Parsing and link replacement completed. Output saved to '{targetpath}'")

            else:
                print(f"Error: Invalid tuple format - skipping: {source}:{targetpath}")



if __name__ == "__main__":
    main()

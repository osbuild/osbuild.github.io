#!/usr/bin/env python3

import argparse
import re
import os
import requests


def resolve_dirs(baseurl, relative_link):
    """
    Resolve relative links to absolute links.
    """
    baseurl = baseurl.replace("/main/", "/tree/main/")

    if relative_link.startswith("./"):
        relative_link = relative_link[2:]
    elif relative_link.startswith("../"):
        relative_link = relative_link[3:]
        baseurl = "/".join(baseurl.split("/")[0:-1])

    if relative_link.startswith("#"):
        # Don't modify anchors
        return relative_link

    baseurl = re.sub(r'/[^/]+$', '', baseurl) + "/"
    absolute_link = f'{baseurl}{relative_link}'
    return absolute_link


def replace_relative_links(match, baseurl):
    """
    Replace relative links in Markdown content with absolute links.
    """
    link_text = match.group(1)
    relative_link = match.group(2)

    if relative_link.endswith('.md') or relative_link.startswith('http'):
        return match.group(0)

    absolute_link = resolve_dirs(baseurl, relative_link)
    
    return f'[{link_text}]({absolute_link})'


def parse_markdown_and_replace_links(file_path, baseurl):
    """
    Parse a Markdown file and replace relative links with absolute links.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        markdown_content = file.read()

    relative_link_pattern = r'\[(.*?)\]\((.*?)\)'
    parsed_content = re.sub(relative_link_pattern,
                            lambda match: replace_relative_links(match, baseurl),
                            markdown_content, flags=re.DOTALL)

    # Drop angel brackets around hyperlinks because DocuSaurus doesn't like them
    angel_bracket_pattern = r'<(http.*?)>'
    parsed_content = re.sub(angel_bracket_pattern,
                            lambda match: match.group(1),
                            parsed_content, flags=re.DOTALL)

    return parsed_content


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
            source, targetpath = line.strip().split(':')

            if source and targetpath:
                print(f"Downloading {github_rawurl}/{source} to {targetpath}...")
                download_file(f'{github_rawurl}/{source}', targetpath)
                print("Download completed.")
                
                parsed_md = parse_markdown_and_replace_links(targetpath, f'{github_baseurl}/{source}')

                with open(targetpath, 'w', encoding='utf-8') as output_file:
                    output_file.write(parsed_md)

                print(f"Parsing and link replacement completed. Output saved to '{targetpath}'")

            else:
                print(f"Error: Invalid tuple format - skipping: {source}:{targetpath}")

if __name__ == "__main__":
    main()

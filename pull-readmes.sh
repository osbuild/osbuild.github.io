#!/bin/bash
set -euo pipefail

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

input_file="$1"

# Check if the input file exists
if [ ! -f "$input_file" ]; then
    echo "Error: File not found: $input_file"
    exit 1
fi

github_baseurl="https://raw.githubusercontent.com/osbuild"
# Read the file line by line and process each tuple
while IFS=: read -r source targetpath; do
    # Check if both source and targetpath are provided
    if [ -n "$source" ] && [ -n "$targetpath" ]; then
        echo "Downloading $github_baseurl/$source to $targetpath..."
        curl --create-dirs --location --output "$targetpath" "$github_baseurl/$source"
        echo "Download completed."
    else
        echo "Error: Invalid tuple format - skipping: $source:$targetpath"
    fi
done < "$input_file"


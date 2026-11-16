#!/usr/bin/env bash
# Usage: ./new-client.sh <slug> "<Client Name>"
set -e
[ -z "$1" ] && { echo "usage: $0 <slug> \"<Client Name>\""; exit 1; }
mkdir -p "$1" && cp _template/index.html "$1/index.html" && cp _template/config.js "$1/config.js"
sed -i "s/CLIENT NAME/${2:-$1}/" "$1/config.js"
echo "Created $1/. Edit $1/config.js, commit, push. URL: /$1/"

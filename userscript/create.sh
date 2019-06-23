#!/usr/bin/env sh

set -exo pipefail

if [ $# -ne 1 ]; then
    echo "USAGE: $0 DIRNAME"
    exit 1
fi

if [ -d "$1" ]; then
    echo "$1 already exists"
    exit 1
fi

# shellcheck disable=SC1091,SC1090
. "$(dirname "$0")"/../common.sh

mkdir -p "$1"

copy_files "$1"

cd "$1"

git init

yarn init -y --private

yarn add --dev rollup

jq '.' package.json \
    | jq '.license = "MIT"' \
    | jq ".author = \"$(author)\"" \
    | jq ".userscript.name = $(jq ".name" package.json)"\
    | jq ".userscript.author = \"$(author)\"" \
    | sponge package.json

download_license mit

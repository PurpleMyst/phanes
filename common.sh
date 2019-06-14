#!/usr/bin/env sh

copy_files() {
    if [ $# -lt 1 ]; then
        echo "USAGE: copy_files TARGET [ FILE ... ]"
        return 1
    fi

    target="$1"
    shift

    while [ $# -ne 0 ]; do
        cp "$(dirname "$0")/files/$1" "$target"
        shift
    done
}

author() {
    git config user.name
}

download_license() {
    wget -O- "https://choosealicense.com/licenses/$1/" \
        | pup '#license-text text{}' \
        | sed "s/\\[year\\]/$(date +%Y)/" \
        | sed "s/\\[fullname\\]/$(author)/" \
        | sponge LICENSE
}

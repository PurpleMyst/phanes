#!/usr/bin/env sh

copy_files() {
    if [ $# -lt 1 ]; then
        echo "USAGE: copy_files TARGET [ FILE ... ]"
        return 1
    fi

    find "$(dirname "$0")/files/" -mindepth 1 -prune -exec cp -vr {} "$1" \;
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

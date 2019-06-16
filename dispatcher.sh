#!/usr/bin/env sh

if [ $# -lt 1 ]; then
    exit 1
fi

template="$1"
shift

exec "$(dirname "$(realpath "$0")")/$template/create.sh" "$@"

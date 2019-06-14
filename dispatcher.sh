#!/usr/bin/env sh

if [ $# -lt 1 ]; then
    echo "USAGE: $0 TEMPLATE [ ARGS ... ]"
    exit 1
fi

template="$1"
shift

exec "$(dirname "$0")/$template/create.sh" "$@"

phanes
======

`phanes` is a stupid simple project template creator. It's all just POSIX
shell and simple dependencies.

Dependencies
------------

- jq
- pup
- wget
- moreutils

Installation
------------

    $ ln -s $(realpath dispatcher.sh) ~/bin/phanes && chmod +x ~/bin/phanes

Usage
-----

    $ phanes TEMPLATENAME [ ARGS ... ]

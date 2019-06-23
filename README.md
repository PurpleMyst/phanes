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

    $ wget -O /tmp/phanes.zip https://github.com/PurpleMyst/phanes/archive/master.zip
    $ unzip /tmp/phanes.zip -d "$HOME/.phanes"
    $ ln -s "$HOME/.phanes/dispatcher.sh" "$HOME/.local/bin/phanes"
    $ chmod +x "$HOME/.local/bin/phanes"

Usage
-----

    $ phanes TEMPLATENAME [ ARGS ... ]

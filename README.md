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

    $ wget -O phanes.zip https://github.com/PurpleMyst/phanes/archive/master.zip
    $ unzip phanes && cd phanes-master
    $ ln -s $(realpath dispatcher.sh) ~/bin/phanes && chmod +x ~/bin/phanes

Usage
-----

    $ phanes TEMPLATENAME [ ARGS ... ]

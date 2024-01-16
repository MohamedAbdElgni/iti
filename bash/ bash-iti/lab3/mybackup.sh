#!/bin/bash

mkdir ~/backupfromscript/



for x in ~/.* ~/*; do
    if [[ -f $x ]]; then
        cp $x ~/backupfromscript/
    fi
done

echo "backup finished! in ~/backupfromscript/"



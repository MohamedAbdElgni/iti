#!/bin/bash

if [[ "$#" -gt 1 ]]; then
    lastArg="${@: -1}"
    lenOfIn="$#"
    allExceptLast="${@:1:lenOfIn-1}"
    lenOfRg=$(( $# - 1 ))
    echo "hello from outer"

    if (( lenOfIn > 2 )); then
        if [ -d "$lastArg" ]; then
            echo "hello from cp1"
            echo "$allExceptLast"
            cp -r $allExceptLast "$lastArg"
        fi
    elif (( lenOfIn == 2 )); then
        if [ -f "$1" ]; then
            echo "hi from inner one"
            cat "$1" > "$2"
        elif [ -d "$1" ]; then
            echo "hi from inner cptwo"
            cp -r "$1" "$lastArg"
        fi
    fi
fi

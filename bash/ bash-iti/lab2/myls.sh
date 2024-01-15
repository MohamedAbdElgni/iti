#!/bin/bash

if (( $# == 0 )); then
    ls
elif (( $# == 1 )); then

    if [ "$1" = "-l" ]; then
        ls -1 
    elif [ "$1" = "-a" ]; then
        echo "hello from -a"
        ls -a 
    elif [ "$1" = "-d" ]; then
        ls -d 
    elif [ "$1" = "-i" ]; then
        ls -i 
    elif [ "$1" = "-R" ]; then
        ls -R 
    else
        ls "$1"
    fi
elif (( $# == 2 )); then

    if [ "$1" = "-l" ]; then
        ls -1 "$2"
    elif [ "$1" = "-a" ]; then
        ls -a "$2"
    elif [ "$1" = "-d" ]; then
        ls -d "$2"
    elif [ "$1" = "-i" ]; then
        ls -i "$2"
    elif [ "$1" = "-R" ]; then
        ls -R "$2"
    fi

fi

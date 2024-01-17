#!/bin/bash

while true; do
    echo "please select a option"
    echo "a. Press 1 to ls"
    echo "b. Press 2 to ls -a"
    echo "c. Press 3 to exit"

    read -p ernter a option: " choice

    case $choice in
        1)
            ls
            ;;
        2)
            ls -a
            ;;
        3)
            echo "exit"
            break
            ;;
        *)
            echo "InvAlid chice"
            ;;
    esac
done


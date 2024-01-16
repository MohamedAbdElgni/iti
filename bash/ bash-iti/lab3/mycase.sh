#!/bin/bash

read -p "Enter a cahr: " char


if [[ ${#char} -eq 1 ]]; then
    case $char in
        [A-Z])
            echo "UPper Case"
            ;;
        [a-z])
            echo "Lower Case"
            ;;
        [0-9])
            echo "Number"
            ;;
        "")
            echo "Nothing"
            ;;
        *)
            echo "Default"
            ;;
    esac
else
    echo "enter only one character. your entered \"$char\""
    echo "closing the script.."
    sleep 2
fi

#!/bin/bash

read -p "Enter a char or strng: " input


if [[ ${#input} -eq 1 ]]; then
    case $input in
        [A-Z])
            echo "Upper Case"
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
    
    case $input in
        [0-9]*[a-zA-Z]*)
            echo "Mix"
            ;;
        [0-9]*)
            echo "Numbers"
            ;;
        [A-Z]*)
            echo "Upper Case"
            ;;
        [a-z]*)
            echo "Lower Case"
            ;;
        "")
            echo "Nothing"
            ;;
        *)
            echo "Mix"
            ;;
    esac
fi

echo "Closing the script in 2 seconds..."


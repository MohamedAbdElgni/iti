#!/bin/bash

select choice in "a. Press 1 to ls" "b. Press 2 to ls -a" "c. Press 3 to exit" 
do
    case $REPLY in
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

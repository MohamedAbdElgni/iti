#!/bin/bash
mysq() {
    num=$1

    if ! [[ "$num" =~ ^[1-9][0-9]*$ ]]; then
        read -p "write number to get its sqr: " num
    fi

    if [[ "$num" =~ ^[1-9][0-9]*$ ]]; then
        local square=$((num * num))
        echo "=-==-=-==-=-==-=-==-=-->the sqr of '$num' is <<-- $square -->> <--=-==-=-==-=-==-=-==-==-="
    else
        echo "plss enter a number this---> '$num' ins not a num"
        mysq
    fi
}


mysq "$1"
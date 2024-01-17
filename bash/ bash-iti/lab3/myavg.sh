#!/bin/bash

flag=0
while [[ $flag < 1 ]] ; do
read -p "Enter array as  spacse sparated numbers to calculate the avf: " -a array
    if [ ${#array[@]} -gt 0 ]; then
        sum=0
        cause=0
        for num in "${array[@]}"; do

            if [[ "$num" =~ ^[1-9][0-9]*$ ]]; then
                sum=$((sum + num))
            elif ! [[ "$num" =~ ^[1-9][0-9]*$ ]]; then
            flag=$((flag + 1))
            cause=$num
            else
                echo "$num is not a valid number"
                
                break
            fi

        done

        if [[ $flag < 1 ]];then
        average=$(echo "$sum / ${#array[@]}" | bc)
        echo "=-==-=-==-=-==-=-==-=-->This is the avg $average <--=-==-=-==-=-==-=-==-==-="
        break
        else
            echo "plss enter a number this---> '$cause' ins not a num"
        fi

    else
        echo "Array is empty"
    fi
done

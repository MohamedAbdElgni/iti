#!/bin/bash

while true; do
    echo "Enter the number of elements for the array: "
    read num_elements

    if [[ "$num_elements" =~ ^[1-9][0-9]*$ ]]; then
        while true; do
            read -p "enter array as spacse sparated elements with only $num_elements or less : " -a array

            if [ ${#array[@]} -eq $num_elements ] || [ ${#array[@]} -lt $num_elements ]; then
                echo "Array elements: ${array[@]}"
            echo "=-==-=-=-==-==-=--> ${#array[@]} Elements entered $((${#array[@]}-$num_elements))
            places are empty<--=-==-=-=-==-=-==-="
                break
            else
                echo "You entered ${#array[@]} enter $num_elements nums as agreaed before."
            fi
        done
        break  
    else
        echo "$num_elements is Invalid num Please enter a num >0 or not dicimal"
    fi
done
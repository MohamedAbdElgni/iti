#!/bin/bash

declare -i n1
declare -i n2
n1=1
n2=1
while test $n1 -eq $n2
do
    n2=$(( $n2+1 ))
    echo $n1
    if [ $n1 -gt $n2 ]
    then
        break
    else
        continue
    fi
    n1=$(( $n1+1 ))
    echo $n2
done

<<com
will brint the n1 value only one time and then 
it will continue to the next iter but it will find the n1 != n2
because we now have n2+1 so the loob will stop
com

#! the code provided in the lab didnot work on my machine i had to edite it like above
#!/bin/bash

for item in `ls ~`
    do 
        if [[ -f  $item  ]];then 
           chmod u+x $item  
        fi  
    done 


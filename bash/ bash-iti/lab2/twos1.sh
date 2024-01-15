#!/bin/bash

#x=5 from the terminal asd arg
if [[ $#>0 ]];then

echo "vvalue of x with '\$1' method >>> $1"
 echo "vvalue of x with'\$x' method >>> $x"
else
    echo "vvalue of x with'\$x' method >>> $x"

fi

#!/usr/bin/bash 
LC_COLLATE=C # Terminal Case Senstive 
shopt -s extglob #Enable Sub Patterns

#Control Flow 
#=============
# if Condition 
# Case 
<<COMMENT
read -p "Enter your OS : " dist

case $dist in 
[lL][iI][nN][uU][xX] | mac )
    echo " You are good Person "
;;
windows)
    echo " You are Not good Person "
;;
*) # Default 
    echo "Default"
;;
esac
COMMENT
<<COMMENT
read -p "Enter Number : " num

case $num in 
[0-9]|[1-9]0)
echo "0 -10"
;;
*)
echo "Default" 
esac 
COMMENT
<<COMMENT
read -p "Enter Input : " input 

case $input in 
[a-z])
echo "Small Case"
;;
[A-Z])
echo "Upper Case"
;;
[0-9])
echo "Number "
;;
*) 
echo "Default "
esac 
COMMENT


<<COMMENT

read -p "Enter Input : " input 

case $input in 
+([a-z]))
echo "Small Case"
;;
+([A-Z]))
echo "Upper Case"
;;
+([0-9]))
echo "Number "
;;
+([a-zA-Z]))
echo "Mixed Character"
;;
+([a-zA-Z0-9]))
echo "Mixed Character with Number "
;;
*) 
echo "Default "
esac 
COMMENT

# variable=Ouptcommand
# var_name=$(command) 
# var_name=`command` 
read -p "Enter DB name : " name
name=`echo $name | tr ' ' '_'`
if [[ $name = [0-9]* ]];then 
    echo "Can't Name Start Number  ..."
else 
    case $name in
        +([a-zA-Z0-9_]) )
            echo "valid DB Name :: $name"
        ;;
        *)
            echo "Error DB Name"
        ;;
    esac
fi

# notstart number , Special Character
# if [[ ]]
# WildCard * ? [] 
# =~  Check Regex ^ $  































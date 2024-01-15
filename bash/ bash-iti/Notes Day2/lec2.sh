#!/usr/bin/bash
# echo "Process ID Runing File" $$ 
# #echo z=$z
# cd ~/Documents
# pwd 
# echo Current process iD : $$ 
# echo All Arguments : $* 
# echo All Arguments : $@ 
# echo Number of Arguments : $# 
# echo "File Name & Path : " $0 
# echo  first Argument : $1
# echo Second Argument : $2
# echo third Argument : $3 
# echo Four Argument : $4
# echo "Last Argument : ${@: -1}"
<<COMMENT
# read command
# echo -n "Enter your name : "
# read 
# echo $REPLY
#---------------------------
# echo -n "Enter your name : "
# read name
# echo $name
GREEN='\033[0;32m'
RED='\033[0;31m'   #'0;31' is Red's ANSI color code
YELLOW='\033[1;32m'   #'1;32' is Yellow's ANSI color code
BULE='\033[0;34m'   #'0;34' is Blue's ANSI color cod
read -r -p "${BLUE}Enter your name :  " -t 3 -N 5  name
echo $name
read -p "Enter your password :  " -s  pass
echo -e "\n ${GREEN} $pass"
COMMENT
#Task 
# =======
# IFS (Internal Field Seperator)
# read -->Cut Variable 


<<COMMENT
read -p "Enter name : " name 
# if [ $name = "mina" ];then 
#     echo "Big Boss"
# fi 
# if [[ $name = [mM][iI][nN][aA] ]];then 
#     echo "Big Boss"
# else 
#     echo "Normal user"
# fi 

if [ $name = mina ];then 
    echo "Big Boss"
elif [ $name = ahmed  ] ;then 
  echo "Big Boss2"
else 
    echo "Normal user"
fi 
COMMENT
<<COMMENT
if (( $# == 2 ));then
    # if [[ $# -qe 2 ]];then  
    if [[ -f $1 ]];then 
        cat $1 > $2
    else 
      echo "Sorry can't find source file"
    fi 
else 
    echo "Error Argument "
fi 
COMMENT
<<COMMENT
if (( $# > 1 ));then
     # echo "${@: -1}"
    if [[ -d ${@: -1} ]];then 
        cp -r $* #cp /etc/passwd ~/Music/filex ~/Music/test
    else 
      echo "Sorry can't find Target Directory"
    fi 
else 
    echo "Error Argument "
fi 
COMMENT

<<COMMENT
if (($# == 1));then 
    if [[ -d $1 ]];then 
        cd $1 #$1
        pwd
    else 
      echo "Not Directory "
    fi  
elif (( $# > 1 ));then 
    echo "Error in Arguments"
else 
    cd 
    pwd 
fi 
COMMENT

if (( $# == 1 ));then 
    if [[ $1 = -l ]];then 
     ls -l 
    elif [[ $1 = -F ]];then 
     ls -F 
     else 
      echo "Not Support Opition"
      #ls $1
    fi
else 
    ls 
fi











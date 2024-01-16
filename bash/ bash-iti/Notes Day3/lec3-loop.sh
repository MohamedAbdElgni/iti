#!/usr/bin/bash 


            #Statement1
            #Statement2
            #condition 
#Statement4             #Statement3
#Label x  
# condition
# Statement5
# go to x 
#Statement6

# Control Flow 
    #Branching 
    #LOOPing 
    # Entery Loop Condition  ==> while(cond){} , for(){}  
    # Exit Loop Condition  ==> do {} while(cond);
    # Bash ==> while , for c style , for each style, until
: '

#for C Style 
for ((i=0; i<10; i++))
do #{
    echo $i
done #}

'
#------------------------------------------
#multi Line Comment 
#----------------------
: '              <<COMMENT
'                COMMENT
#------------------------------------------
<<COMMENT
#for each Style 
for count in {1..9}
do #{
    echo $count
done #}


for count in {1..9..2}
do #{
    echo $count
done #}
COMMENT
<<COMMENT
list_number=$(seq 1 10)
for count in $list_number
# for count in $(seq 1 10)
#for count in `seq 1 10`
do #{
    echo $count
done #}
COMMENT
<<COMMENT
echo "=====================Before Script============================"
ls -l $1 
echo "==========================="

if (( $# == 1 )) && [[ -d $1 ]] ;then 
    for item in `ls $1` # $(ls $1)
    do 
        echo $1/$item
        if [[ -f  $1/$item  ]];then 
           chmod u-x $1/$item  
        else
           chmod u+x $1/$item 
        fi  
    done 
else 
    echo "Error Inputs"
fi 

echo "=====================After Script============================"
ls -l $1 
echo "======================================================="
COMMENT


<<COMMENT
i=0
while [[ i -lt 10 ]] 
do 
    echo $i 
    ((i++))
done 
COMMENT

<<COMMENT
while true 
do 
    read -p "Enter Value : " input 
    if [[ $input = exit ]];then 
       break; 
    fi 

done 
COMMENT

<<COMMENT

read -p "Enter Value : " input 
while [[ $input != exit ]] 
do 
    read -p "Enter Value : " input 
done 
COMMENT



# Jump Keyword 
# break , continue 
<<COMMENT
for (( i=0; i<10 && i !=5 ; i++))
do 

    # if (( i == 5 ));then 
    #     break;
    # fi
    echo $i 
done 

for (( i=0; i<10; i++))
do 
    # if (( i==4 ));then 
    #     continue
    # fi 
    # echo $i 
    if (( i!= 4 ));then 
        echo $i    
    fi 
done 
COMMENT
# echo "body" | mail -s "subject" user
# tail -f /var/spool/mail/ayman 

users=`awk -F : '{if($3>=1000){print $1 }}' /etc/passwd`
<<COMMENT

for user in $users
do 
   echo "I will Send Email for : $user "
   echo "Hello msa msa" | mail -s "subject1" $user 
   echo "I will wait 5 Sec "
   sleep 5
done 

echo "Finish Send Emails"


for user in $users
do 
   echo "==============================="
   sudo cat /var/spool/mail/$user
   echo "==============================="
   sleep 5
done 
COMMENT































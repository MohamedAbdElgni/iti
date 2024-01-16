#!/bin/bash

#sudo apt install mailutils

users=`awk -F : '{if($3>=1000){print $1 }}' /etc/passwd`

body=$(cat ./mtemplate)
echo "$body"

for user in $users
do 
    echo "$user"
    echo "I will Send Email for : $user "
    echo "$body" | mail -s "subject1" $user 
    echo "I will wait 5 Sec "
    sleep 2
done 

echo "Finish Send Emails"



# #check if emails sent 
# for user in $users
# do 
#    echo "==============================="
#    sudo cat /var/spool/mail/$user
#    echo "==============================="
#    sleep 5
# done 

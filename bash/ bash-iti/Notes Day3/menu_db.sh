#!/usr/bin/bash
#alias hidden="ls -A | grep \"^\.\""
PS3=">"
if [[ -d $HOME/.db ]] ;then 
    echo "Already Exit : "
else 
    echo "Create Folder .db : "
    mkdir ~/.db
fi

select var in "Create DB" "List DB" "Connect DB" "Remove DB" "Exit"
do 
  case $REPLY in 
        1 ) # "Create DB"
            read -p "Enter Name of DB : " name 
            name=`echo $name | tr ' ' '_'` #Replace Space _ 
            # check of Name DB Can't Start Number , no contain Special Character 
            if [[ -d ~/.db/$name ]];then 
                echo "Sorry This is name of DB  Already Exist"
            else 
                mkdir ~/.db/$name
            fi 
        ;;
        2 ) #List DB
            if [[ -d ~/.db ]];then 
              ls -F ~/.db | grep / | tr '/' ' '
            fi 
        ;;
        3) #Connect DB
            read -p "Enter Name of DB : " name 
            name=`echo $name | tr ' ' '_'` #Replace Space _ 
            # check of Name DB Can't Start Number , no contain Special Character 
            if [[ -d ~/.db/$name ]];then
              #call File  mina 
               source menu_table.sh $name
            else 
                echo "Sorry This is name of DB  Not Exist"
            fi 
        ;; 
        4) #Remove DB
            read -p "Enter Name of DB : " name 
            name=`echo $name | tr ' ' '_'` #Replace Space _ 
            # check of Name DB Can't Start Number , no contain Special Character 
            if [[ -d ~/.db/$name ]];then 
                echo "will delete $name"
                rm -r ~/.db/$name
                echo "Done"
            else 
                echo "Sorry This is name of DB  Not Exist"
            fi 
        ;; 
        5) #Exit
            echo "Good Bye"
            break
        ;;
        *)
            echo "Invalid input Menu number 1 - 5 "
        ;;
    esac 
done 
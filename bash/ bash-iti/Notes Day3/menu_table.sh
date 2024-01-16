#!/usr/bin/bash
current_DB=$1
# cd ~/.db/$current_DB
PS3=" $current_DB >> "
select var in "Create TB" "Insert TB" "List TB" "SELECT TB" "Delete From TB" "Remove TB" "Exit"
do
echo $var
done 
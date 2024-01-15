#!/bin/bash

read -p "Enter usernerame: " username


if grep -q "^$username:" /etc/passwd; then
    
    user_info=$(grep "^$username:" /etc/passwd)

    
    home_directory=$(echo "$user_info" | cut -d: -f6)
    user_id=$(echo "$user_info" | cut -d: -f3)

    
    echo "User Information:"
    echo "Username: $username"
    echo "User ID: $user_id"
    echo "Home Directory: $home_directory"

    
    read -p "Do you want to copy files from the home directory? (y/n): " response
    if [ "$response" == "y" ]; then
        cp -r "$home_directory" /tmp/"$username"/
        echo "Files copied successfully."
    else
        echo "No files copied."
    fi
else
    echo "User not found in /etc/passwd."
fi

echo "Current processes status:"
    ps aux






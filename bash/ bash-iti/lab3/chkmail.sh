#!/bin/bash

checkMails() {
    username=$(whoami)
    while true; do
        
        if [ -e /var/mail/$username ]; then
            echo "New mails found!"
            tail /var/mail/$username
        else
            echo "No new mails."
        fi

        sleep 10
    done
}


checkMails 
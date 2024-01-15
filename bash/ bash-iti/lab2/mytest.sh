x=$1


if [ ! -e "$x" ]; then
    echo "Error: $x does not exist."
    exit 1
fi


if [ -f "$x" ]; then
    echo "$x is a regular file."
elif [ -d "$x" ]; then
    echo "$x is a dir"
else
    echo "$x is not a file or dir"
fi


if [ -r "$x" ]; then
    echo "$x has read permission."
else
    echo "$x does not have read permission."
fi

if [ -w "$x" ]; then
    echo "$x you can write in it"
else
    echo "$x you cannot write in it"
fi

if [ -x "$x" ]; then
    echo "$x is excutable"
else
    echo "$x not excutable"
fi
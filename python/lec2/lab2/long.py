def long(str):
    ar1= list(str.lower())
    temp_str=""
    i = 0
    while i < len(ar1)-1:
        letter = ar1[i]
        if len(temp_str) ==0:
            temp_str += letter
        else:
            if temp_str[-1] < ar1[i+1]:
                temp_str +=letter
            else:
                temp_str += " "+letter
        i += 1
    temp_str= temp_str.split(" ")
    max = 0
    for i in temp_str:
        if len(i) > max:
            max = len(i)
            word = i
    return f"Longest substring is: {word}"

print(long("abdulrahman")) 
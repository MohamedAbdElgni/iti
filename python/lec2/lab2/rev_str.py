def ref_str(str):
    print(str[::-1])


while True:
    str = input("Enter a string: ")
    if str == "x":
        break
    elif str == "":
        print("Please enter a string")
    elif not str.isalpha():
        print("Please enter a valid string")
    else:
        ref_str(str)


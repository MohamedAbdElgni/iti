import re
user={
    
}
while True:
    x = input("Enter your name: ")
    if not x.isalpha() or x == "":
        print("Please enter a valid name")
    else:
        user["name"]=x.strip().capitalize()
        print(f"Welcome {user['name']}!!!!")
        print("=Please Enter your Email=")
        break

while True:
    x = input("Enter your Email: ")
    if x == "" or not re.match(r"^\S+@\S+\.\S+$", x):
        print("Please enter a valid email")
    else:
        user["email"]=x
        break

print(f"Thank you {user['name']}!!!!")
print("="*50)
for key, value in user.items():
    print(f"{key}: {value} ")
    
print("="*50)


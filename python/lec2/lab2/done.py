mylist=[]
while True:
    x = input("enter a number:")
    if x == "done":
        if len(mylist) == 0:
            print("No numbers entered")
        else:
            print("="*50)
            print(mylist)
            print(f"Ttotal: {sum(mylist)}")
            print(f"count: {len(mylist)}")
            print(f"average: {sum(mylist)/len(mylist)}")
        break
    elif x.isnumeric():
        mylist.append(int(x))
    
    elif not x.isnumeric():
        print("Please enter a valid number")
        continue  

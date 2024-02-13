#Q3
num_of_elements=5
i=0
mylist=[]
while i<num_of_elements:
    x = input(f"Enter elemnt {i+1}:- ")
    mylist.append(x)
    i+=1
print("=" * 25 )
mylist.sort()
print(mylist)
print("=" * 25)
mylist.sort(reverse=True)
print(mylist)
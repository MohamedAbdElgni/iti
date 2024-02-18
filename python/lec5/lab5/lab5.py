class Queue:
    
    def __init__(self):
        self.items = []
        
    def insert(self, item):
        self.items.append(item)
        print(f"queue ---->{self.items}")
        
    def pop(self):
        if len(self.items) == 0:
            print("cannot pop from empty queue.")
            return False
        else:
            return self.items.pop(0)
    
    def is_empty(self):
        return len(self.items) == 0
    
    
    
if __name__ == "__main__":
    
    myq=Queue()

    myq.insert(1)
    myq.insert(2)
    myq.insert(3)
    myq.insert(4)
    myq.insert(5)
    myq.pop()
    myq.pop()
    print(myq.is_empty())
    myq.pop()
    myq.pop()
    myq.pop()
    print(myq.is_empty())
    myq.pop()
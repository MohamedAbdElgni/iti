from lab5 import Queue
import json
class QueueOutOfRangeException(Exception):
                pass

class advQueue(Queue):
    #excQueue is a class var
    
    excQueue = {}
    def __init__(self,name,length=10):
        super().__init__()
        self.name = name
        self.max_size = length
        self.current_size = 0
        
    def insert(self, item):
        if self.current_size < self.max_size:
            self.items.append(item)
            self.current_size += 1
            self.excQueue[self.name] = self.items
            print(f"queue ---->{self.items}")
        else:
            
            raise QueueOutOfRangeException(f"current size of queue {self.name} is {self.current_size} and max size is {self.max_size}")  

    def pop(self):
        if len(self.items) == 0:
            print("cannot pop from empty queue.")
            return False
        else:
            self.current_size -= 1
            return self.items.pop(0)
        
    def is_empty(self):
        return len(self.items) == 0
    
    @classmethod
    def get_queue(cls,name):
        print(cls.excQueue[name])
        return cls.excQueue[name]
    
    @classmethod
    def save(cls):
        try:
            with open("queue.json", "w") as f:
                json.dump(cls.excQueue,f,indent=4)
        except Exception as e:
            print(e)
            
    @classmethod
    def load(cls):
        try:
            with open("queue.json", "r") as f:
                cls.extQueue = json.load(f)
                print(cls.excQueue)
        except Exception as e:
            print(e)
            
if __name__ == "__main__":
    myq=advQueue("myq",5)
    myq.insert("sss")
    myq.insert(2)
    myq.insert(3)
    myq.insert(4)
    myq.insert(5)
    
    myq.pop()
    myq.insert("zzz")
    #advQueue.save()
    #advQueue.load()
    
    #advQueue.save()
    
    myq2=advQueue("myq2",5)
    myq2.insert("a")
    myq2.insert("b")
    myq2.insert("c")
    myq2.insert("d")
    myq2.insert("e222")
    myq2.pop()
    
    
    advQueue.save()
    
    print(advQueue.excQueue["myq"])
    myq2.pop()
    print(advQueue.excQueue['myq2'])
    
    print(myq.items)
    advQueue.get_queue("myq2")
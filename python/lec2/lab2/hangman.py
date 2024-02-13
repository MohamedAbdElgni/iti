def hang_man():
    tries= 7
    words = ['banana', 'apple', 'orange']
    
    selected=1
    word = words[selected]
    user_in=[]
    print("=Game Staerted=")
    print("Guss the word: ")
    for i in range(len(word)):
        user_in.append("_")
    
    while tries > 0:
        print("="*50)
        print(f"tries left: {tries}")
        print("="*50)
        guess = input("Enter your guess: ")
        if guess in word:
            for i in range(len(word)):
                if word[i].lower() == guess.lower():
                    user_in[i] = guess
                    
            if "".join(user_in) == word:
                print("You win")
                print(f"The word is:{word} ")
                break
        print("".join(user_in))
        tries -= 1
    else:
        print("you loset")
        print(f"the word is:{word} ")
    
    
        
        
    
hang_man()

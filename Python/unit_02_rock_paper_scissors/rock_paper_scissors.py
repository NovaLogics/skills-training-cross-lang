# Here is a online Python compiler (interpreter) to run Python online.
# https://www.programiz.com/python-programming/online-compiler/
# -------------------------------------------------------------------
# Unit 02 : Rock, Paper, Scissors
# -------------------------------------------------------------------

import random

def rock_paper_scissors():
    # Define choices for the game
    #choices = ["rock", "paper", "scissors"]
    choices = ["r" , "rock", "p" , "paper", "s" , "scissors"]
    score_player = 0
    score_computer = 0

    print("Welcome to Rock, Paper, Scissors!")
    print("Type 'exit' to quit the game.")
    print("-------------------------------")
    
    while True:
        player_choice = input("Choose rock, paper, or scissors: ").lower()
        
        # Exit condition
        if player_choice == "exit":
            break
        
        if player_choice not in choices:
            print("Invalid choice. Please choose rock, paper, or scissors.")
            continue
        
        # Computer's random choice
        computer_choice = random.choice(choices)

        if computer_choice == "r":
            computer_choice = "rock"
        elif computer_choice == "s":
            computer_choice = "scissors"
        elif computer_choice == "p":
            computer_choice = "paper"

        print(f"Computer chose {computer_choice}")
        

        # Determine the winner
        if player_choice == computer_choice:
            print("It's a tie!")
        elif ((player_choice == "rock" or player_choice == "r") and computer_choice == "scissors") or \
             ((player_choice == "scissors" or player_choice == "s")  and computer_choice == "paper") or \
             ((player_choice == "paper" or player_choice == "p")  and computer_choice == "rock"):
            print("You win!")
            score_player += 1
        else:
            print("Computer wins!")
            score_computer += 1
        
        print(f"Score - You: {score_player}, Computer: {score_computer}")
        print("-------------------------------")
        
rock_paper_scissors()

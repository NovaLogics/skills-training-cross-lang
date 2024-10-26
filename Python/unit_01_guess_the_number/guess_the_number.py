# Here is a online Python compiler (interpreter) to run Python online.
# https://www.programiz.com/python-programming/online-compiler/
# -------------------------------------------------------------------
# Unit 01 : Guess the Number
# -------------------------------------------------------------------

import random

def guess_the_number():
    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)
    max_attempts = 10  # Maximum attempts allowed
    attempts = 0

    print("Welcome to 'Guess the Number'!")
    print("I'm thinking of a number between 1 and 100.")
    
    while attempts < max_attempts:
        try:
            # Prompt the player to enter a guess
            player_guess = int(input("Enter your guess: "))
        except ValueError:
            print("Please enter a valid integer.")
            continue

        attempts += 1
        
        # Check if the player's guess is correct
        if player_guess == secret_number:
            print(f"Congratulations! You guessed it in {attempts} attempts.")
            return
        elif player_guess < secret_number:
            print("Too low. Try again!")
        else:
            print("Too high. Try again!")

    print(f"Sorry, you've used all {max_attempts} attempts. The correct number was {secret_number}.")
    
guess_the_number()

## Rock, Paper, Scissors
A simple game of rock, paper, scissors!

## Notice
I tried outputing messages to the console, but `prompt()` for some reason runs first and blocks out
all console logs until it disappears (which is at the end of the game).
Therefore, all game messages are output through `alert()` instead.

## Pseudocode
> [!NOTE]
> _I tried planning it_

### General
```
01 Print out instructions
02 Start a new round
03 Generate a random choice between 'rock', 'paper', and 'scissors'
04 Get user input from one of previous three choices
05 Compare the two choices
06 Determine the winner based on rules
07 Rules: 
..    1 'rock' beats 'scissors'
..    2 'scissors' beats 'paper'
..    3 'paper' beats 'rock'
..    4  same choice is a tie
08 Print out winner
09 Increment winner score
10 Repeat 02 until 5 rounds are played
11 Print winner and scores
12 End program
```

### For Step [02]
```
01 Receive both human choice and computer choice
02 Compare both choices
03 Determine winner based on rules
..    1 'rock' beats 'scissors'
..    2 'scissors' beats 'paper'
..    3 'paper' beats 'rock'
..    4  same choice is a tie
04 Print out result
05 If winner is determined, increment winner score
06 If tie, continue
07 End round
```

### For Step [03]
```
01 Pick a random number from 1 to 3
02 Match number to choice
.. 1 is 'rock'
.. 2 is 'paper'
.. 3 is 'scissors'
03 Return choice
```

### For Step [04]
```
01 Print prompt
02 Get input
03 Lower case of input
04 Match input to one of choices
.. 'rock'
.. 'paper'
.. 'scissors'
04 If none match, return null
05 Otherwise, return matched
```

### For Step [10]
```
01 Create roundsPlayed int variable, initialised to 0 
02 Receive both human choice and computer choice
03 Start a new round
04 Repeat 02 until roundsPlayed == 5
05 Print overall game winner
```
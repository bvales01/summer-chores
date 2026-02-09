Summer Chores: JavaScript Callbacks

This project is a JavaScript simulation of a chore rountine, exploring asynchronous programming. 
The program simulates a person's energy levels throughout the day. As chores progress, there is a randomized chance the person will become too tired and fall asleep before completing the remaining chores. 

This repository demonstrates: 
- Callback Functions
- Asynchronous Execution
- Control Flow
- Node.js

Chore List & Time completion(ms): 
- Mowing the Yard, 2000
- Weed eating, 1500
- Trimming Hedges, 1000
- Collecting Wood, 2500
- Watering the Garden, 500

HOW TO RUN: 
1. Have Node.js installed on your machine.
2. Clone this repo or download the files.
3. Open tour terminal and navigate to the projects folder.
4. Run the following command:
    node callbackVersion.js
    Run it a few times - sometimes you'll finish, sometimes you will fall asleep!



PART 2: REFACTORED WITH PROMISES
In the second portion of this assignment, I converted the callback-based logic into Promises. 
Key Updates: 
- Promise Constructor: Each chore function now returns a new Promise, which either resolves or rejects.
- Promise Chaining: Instead of nesting functions *Callback Hell), I used .then() to chain the chores vertically.
- Centralized Error Handling: I implemented .catch() block at the end of the chain to handle any "fell asleep" scenarios, regardless of which chore they occurred in.

HOW TO RUN PROMISE VERSION: 
To run the updated version of the program, follow steps 1-3 from above and then use the following command in your terminal: 
        node promiseVersion.js
        

   

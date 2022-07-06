# Output
- Count is 0

# explanation
- execution of code happens at const[increment, log] = createIncrement(); In this line we are calling the function. 
- before const[increment, log] = createIncrement(); all the lines of code is function declaration. 
- message String is created once and at that point value of count variable is 0
- So when we make call increment() 3 times, it does increase the value of count variable but message String was intiallzed only once so the value of count in message String is zero, so our output of given code is "Count is 0". 
- To change the message String values every time when we make function call then we need to put message String inside the function increment().

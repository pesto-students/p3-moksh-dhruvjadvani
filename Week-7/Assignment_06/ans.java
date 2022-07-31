class MyQueue {
    Stack<Integer> mainS;
	Stack<Integer> helperS;

    public MyQueue() {
        mainS = new Stack<>();
	    helperS = new Stack<>();
    }
    
    int size() {
	  return mainS.size();
	}
    
    public void push(int x) {
        mainS.push(x);
    }
    
    public int pop() {
        while(mainS.size() > 1) {
	    	helperS.push(mainS.pop());
	    }
	    		
	    int x = mainS.pop();
	    		
	
	    while(helperS.size() > 0) {
	    	mainS.push(helperS.pop());		
	    }
	    return x;
    }
    
    public int peek() {
        while(mainS.size() > 1) {
	       helperS.push(mainS.pop());
	    }
	    		
	    int x = mainS.pop();
	    helperS.push(x);
	    		
	    while(helperS.size() > 0) {
	    	mainS.push(helperS.pop());
	    }
	    return x;
    }
    
    public boolean empty() {
        if(size() == 0) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */

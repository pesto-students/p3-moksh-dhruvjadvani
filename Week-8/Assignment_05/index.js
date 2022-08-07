var findJudge = function(N, trust) {
  let peeps = new Map();  
  for (let i = 1; i <= N; i++) {
    peeps.set(i, 0);
  }

  for (let i = 0; i < trust.length; i++) {
  	peeps.delete(trust[i][0]); 
  }

  if (peeps.size === 0) {
  		return -1; 
  } else {
  	let judge = peeps.keys().next().value; 
  	let count = 0; 
  	for (let i = 0; i < trust.length; i++) {
  		if (trust[i][1] === judge) { 
  			count += 1;
  		}
  	}
  	if (count == (N-1)) {
  		return judge; 
  	} else {
  		return -1;
  	}
  }
    
};

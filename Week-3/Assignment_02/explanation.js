let name = {
    firstName: "Dhruv",
    lastName: "Jadvani",
    
}

let printFullName = function(hometown, country) { // each function in javascript has access to this keyword
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + country);
}

printFullName.call(name, "Botad", "India");

let name2 = {
    firstName: "David",
    lastName: "Beckham",
}

//.call()
// function borrowing
//we can borrow functions from other objects and use it

printFullName.call(name2, "Leytonstone", "England");

//only diff. b/w call and apply is the way we supply arguments, in apply we supply arguments as array

printFullName.apply(name2, ["Leytonstone", "England"]);


//bind method
//bind method looks exactl same as call method but the only diff. is instead of directly calling this method, bind binds the method printFullName
// with object and returns us the copy of the method

let printMyName = printFullName.bind(name2, "Leytonstone", "England"); // this is a function which can be invoked later

// console.log(printMyName);

printMyName();

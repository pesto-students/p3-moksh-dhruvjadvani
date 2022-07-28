var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

function Teacher() {
     function teach (sub){
     console.log(this.name + " is teaching " + sub);
    }
}

Teacher.prototype= new Person();

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");


// Adam is teaching Inheritance

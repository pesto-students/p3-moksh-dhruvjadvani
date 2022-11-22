function fn1(arg1, arg2){
    console.log(this.num, arg1, arg2); // 100, 10, 20
  }
  
  fn1.call({num: 100}, 10, 20);

  function fn2(...arguments){
    console.log(this.num, arguments);//100, [1,2,3]
  }
  
  fn2.apply({num: 100}, [1,2,3]); 


  function fn3(arg){
    console.log(this.number, arg);
   }
   
   let bindedFn = fn3.bind({number: 99}, "argument");
   
   bindedFn(); // 99, "argument"

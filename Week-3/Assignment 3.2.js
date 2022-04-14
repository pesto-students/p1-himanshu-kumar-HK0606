// Bind

 function sum (a,b){
     return this.a + this.b;
 }

 const sumB = sum.bind({a:10 , b:20});
 console.log(sumB());
 const sumC = sumB.bind({a:40 , b:80});
 console.log(sumC()); 

 //Call

 function add(x, y) {
    return x + y;
  }
  
  let result = add.call(this, 80, 20);
  console.log(result); 

  //Apply

  var numbers =  [5,6,7,9];
  var max = Math.max.apply(null, numbers);
  console.log(max);
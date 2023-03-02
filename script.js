 "use strict";
//3
let user = {
  firstname: "giorgi",
  lastname:"saakadze",
   age:32

}
let result =  `${user.firstname}  ${user.lastname}   aris ${user.age}   wlis; ` 
console.log(result);

//6
let names = ['html','css', 'python','javascript', 'bootsrap'];
for (let item of names) {
    console.log(item);
  if (item.length < 4) {
        console.log(item);
    }
   
}

//7
let array = [1,2,3,4,5];
   
for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
 }


//1

 function positive_nums(...numbers){
    let sum = 0;
     for (let i of numbers){
        if (i > 0){
            sum += i;
         }
     }
     return sum;
 }

 let result1 = positive_nums(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
 console.log(result1);
 //2

  function sum(...number){
  // console.log(numbers);
       let numbersum = 0;
      for (let item of number){
         numbersum = numbersum + item;  

      }
 console.log(numbersum);
 return numbersum;
 }
sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
let resultsum= sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultsum);

  
  
   
   


 







 
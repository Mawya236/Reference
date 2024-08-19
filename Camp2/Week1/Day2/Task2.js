let numbers = [-1, -10, -20, 30, 40, 50];
console.log("Sum = " + numbers.reduce((total ,value)=>{
    return value > 0 && total + value
},0));
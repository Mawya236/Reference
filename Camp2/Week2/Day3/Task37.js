function flower(num1, num2){
    if((num1%2 === 0 && num2%2 !==0) || (num1%2 !== 0 && num2%2 === 0)){
        return true;
    }
    else{
        return false;
    }
};
console.log(flower(3,2));
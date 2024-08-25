let num = [2, 4, 6];
function average(num){
    if(num.length !== 0){
        return console.log("Average = " + (num.reduce((total, value) =>{
            return total + value;
        },0))/num.length);
    }
    else{
        return console.log(0);
    }
};
average(num);
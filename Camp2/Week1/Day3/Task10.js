let arr = [1, 2, 3, 4, 5, 0, -1, -2, -3 , -4, -5];

function sum(num){
    let sumPostive = 0;
    let sumNegative = 0;
    if(num > 0){
        sumPostive = 1;
    }
    else if(num < 0){
        sumNegative += num;
    }
    else{
        num;
    }
    return sumPostive, sumNegative;
}
let x = arr.map(sum).reduce((total, value) => {
    return total + value
},0);
console.log([x]);



// function sum(num, sumNegative = 0){
//     return num > 0;
// }
// console.log(arr.map(sum).reduce((total, value) => {
//     return total + value
// },0));
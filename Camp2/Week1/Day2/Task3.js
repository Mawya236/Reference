///////////////1///////////////////
let arr = [3, 5, 4, 9, 8, 7, 1, 2];
let lowest = Math.min(...arr);
let highest = Math.max(...arr);
let sum = 0;
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] !== lowest && arr[i] !== highest){
        sum += arr[i];
    }
}
console.log("Sum = " + sum);


/////////////2//////////////////
// let arr = [3, 1, 9, 7, 8, 5];
// function found(value){
//     console.log(value)
//     return Math.min(value);
// }
// console.log(arr.find(found))


function numbers(num){
    let y;
    for(let i = 0; i < num.length; i++){
        let x = num[i+1] - num[i];
        if(x > 1){
            y = num[i+1];
            break;
        }
    }
    return y;
};
console.log(numbers([1,2,3,4,6,7,8]))




// let arr = [1,2,4,6,7,8];
// console.log(arr.filter((item, index)=>{
//     return item - index >= 1 && true;
// }));
function sqr(arr){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        let sqrt = Math.sqrt(arr[i]);
        if(Number.isInteger(sqrt)){
            newarr.push(sqrt);
        }
        else{
            num = arr[i] ** 2;
            newarr.push(num);
        }
    }
    return newarr;
}
console.log(sqr([1, 2, 3, 4, 5, 6, 9, 16]));


// function sqr(arr){
//     let newarr = [];
//     let sqrt;
//     let pow = 0;
//     let x;
//     arr.forEach((item, index) => {
//         sqrt = Math.sqrt(item);
//         pow = arr[index] ** 2
//        x = Number.isInteger(sqrt) ? newarr.push(sqrt) : newarr.push(pow);
//     })
//     return x;
// }
// console.log(sqr([1, 2, 3, 4, 5, 6, 9, 16]));
// console.log(sqr(arr));


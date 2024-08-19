function reverseArray(num){
    let arr = String(num).split("").reverse().map(Number).join("");
    console.log(arr);
}
reverseArray(123456);
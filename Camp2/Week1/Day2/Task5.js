function reverseArray(num){
    let arr = +String(num).split("").reverse().join("");
    console.log(arr);
}
reverseArray(123456);
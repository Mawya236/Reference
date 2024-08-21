function transform(num){
    return Number.isInteger(num) ? String(num) : "Please Enter An Integer Number";
}
console.log(transform(123))

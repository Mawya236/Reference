function multiply(x, n){
    let arr = [];
    let num = 0;
    if(x > 0 && n > 0){
        for(i = 1; i <= n; i++){
            num = x * i;
            if(num < n){
                arr.push(num);
            }
        }
        return arr;
    }
    else{
        return "Please Enter Postive Number";
    }
}
console.log(multiply(-1,10));
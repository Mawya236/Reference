function opposite (num){
    if(typeof num === "number"){
        num < 0 ? num = Math.abs(num) : num = -Math.abs(num)
        console.log(num)
    }
    else{
        console.log("Please Enter a Number");
    }
}
opposite(-10);
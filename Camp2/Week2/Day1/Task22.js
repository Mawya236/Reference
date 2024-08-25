let str = "5";
function strTOnum(str){
    let num1 = +str;
    let num2 = Number(str);
    let num3 = parseInt(str);
    let num4 = parseFloat(str);
    // console.log(typeof num1 + " " + typeof num2 + " " + typeof num3 + " " + typeof num4);
    return console.log(num1 + " " + num2 + " " + num3 + " " + num4);
}
strTOnum(str)
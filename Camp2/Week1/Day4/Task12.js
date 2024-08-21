function operation(char, value1, value2){
    let result = 0;
    switch(char){
        case '+':
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        default:
            result = "Please Enter your operation";
            break;
    }
    return result;
}
console.log("Result = " + operation('+', 6, 2));
function zero(num){
    return String(num).endsWith(0) && +String(num).split("").slice(0, String(num).length-1).join("")
};
console.log(zero(1050));
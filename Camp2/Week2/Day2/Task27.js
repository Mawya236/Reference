let str = "Hi!!!";
console.log(str.split("").slice(0, str.lastIndexOf("!")).join(""));
console.log(str.split("").slice(0, str.length-1).join(""));
function answers(name){
    return name.toUpperCase().startsWith("R") === true ? name + " plays banjo" : name + " does not play banjo";
};
console.log(answers("ra"));
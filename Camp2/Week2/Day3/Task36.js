let alphabet = (char) =>{
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let x = 0;
    for(let i = 0; i < alpha.length; i++){
        char.toUpperCase() === alpha[i].toUpperCase() ? x = i+1 : 'Please enter a character';
    }
    return x;
}
console.log(alphabet('D'))
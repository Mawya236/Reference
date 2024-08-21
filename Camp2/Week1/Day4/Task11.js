function str(s){
    let char = "";
    for(let i = 0; i < s.length; i++){
        char += s.charAt(i) + s.charAt(i);
    }
    console.log(char);
}
str("String")


// function str(s, n){
//     let char = "";
//     for(n of s){
//         char += s.charAt(n) + s.charAt(n);
//     }
//     console.log(char);
// }
// str("String")
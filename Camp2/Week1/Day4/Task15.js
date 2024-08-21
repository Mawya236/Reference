let str = "S t r   i n    g";
function remove(item,index){
    let arr = [];
    return item[index] !== " " ? arr.push(item[index]) : "Please Remove Spaces";
}
console.log(str.split(" ").map(remove).join(""));

// function remove(str){
//     str.split(" ");
//     let arr = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             arr.push(str[i]);
//         }
//     }
//     return arr;
// };
// console.log(remove(str).join(""));
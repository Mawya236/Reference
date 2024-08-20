let arr = ["asd", "needle", "qwe", "zxc"];
// let found = arr.map((item, index) =>{
//     return item == "needle"  && "found the needle at position ";
// });
// console.log(found);

function findNeedle(item, index){
    item = arr.includes("needle");
    index = arr.indexOf("needle");
    return "found the needle at position " + index; 
}
console.log(findNeedle());

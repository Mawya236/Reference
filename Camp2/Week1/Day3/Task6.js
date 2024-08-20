let arr = [true, true, false, true, false, true]
let sheep = arr.map((item, index) => {
    return item == true ? 1 : 0
});
console.log("Number of Sheep = " + sheep.reduce((total, value) => {
    return total + value
},0));

// let arr = ["sheep", "sheep", , "sheep", , "sheep"]
// let sheep = arr.map((item, index) => {
//     return item.length > 0 ? 1 : 0
// });
// console.log("Number of Sheep = " + sheep.reduce((total, value) => {
//     return total + value
// },0));
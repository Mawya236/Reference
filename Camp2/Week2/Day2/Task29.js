let arr = ["keep", "remove", "keep", "remove", "keep", "remove", "keep"];
function keep(arr){
    let newarr= [];
    for(let i = 0; i < arr.length; i++){
        newarr.push(arr.splice(i, 1))
    }
    return newarr;
}
console.log(keep(arr));
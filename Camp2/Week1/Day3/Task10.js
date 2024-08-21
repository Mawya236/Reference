let arr = [1, 2, 3, 4, 5, 0, -1, -2, -3 , -4, -5];

function sum(num){
    let sumPostive = 0;
    let sumNegative = 0;
    num.forEach(item => {
        item > 0 ? sumPostive++ : sumNegative +=item
    })
    return [sumPostive , sumNegative] ;
}
console.log(sum(arr))

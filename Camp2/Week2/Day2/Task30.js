function rent(day){
    let total = 0;
    if(day >= 3){
        total = (day*40)-((day*40)*(20/100));
    }
    else if(day >= 7){
        total = (day*40)-((day*40)*(50/100));
    }
    else{
        total = day*40;
    }
    return total;
}
console.log(rent(8) + "$")

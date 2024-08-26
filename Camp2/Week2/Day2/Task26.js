function fatcat(salary, bonus){
    return bonus === true ? salary * 10 : "The fatcat did not make enough money and must receive only his stated salary";
};
console.log(fatcat(20, false));
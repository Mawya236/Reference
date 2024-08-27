function volume(length, width, height){
    return length > 0 && width > 0 && height > 0 ? length*width*height : "Please enter a number greater than zero";
};
console.log("The volume of a cuboid  = " + volume(10,10,10));
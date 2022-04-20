function  getRandomNeg(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
// let s = getRandomNeg(-100);
console.log(getRandomNeg(-100));


const getRandomPos = function(max) {
    return Math.floor(Math.random() * Math.floor(max))
}  
console.log(getRandomPos(100))


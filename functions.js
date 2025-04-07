// FUNCTIONS E ARROW FUNCTIONS

// function sum(a , b = 10) {
//     return a + b
// }

//  Mesma coisa que acima
// const sumArrow = (a, b = 10) =>{
//     return a + b
// } 
// Mesma coisa que acima
const sumArrow = (a, b = 10) => a + b

const sumValue = sumArrow(2)
console.log(sumValue)
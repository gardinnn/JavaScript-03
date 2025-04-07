const numbers = [1, 2, 3, 4, 5]

// multiplicar os numeros da lista para que se tornem o dobro
const numbersMultipliedByTwo = numbers.map(function(number){
      return number * 2
})



const ages = [8, 18, 22, 26, 29, 33]


// para ver se os numeros da lista são pares 
// const evenAges = ages.filter(function(age){
    // return age % 2 === 0
// })

// para ver a soma de todos os valores da lista 'acumulados'
const sumOfAges = ages.reduce(function(age, accumulator){
   return accumulator + age
}, 0)

console.log(numbersMultipliedByTwo)
// console.log(evenAges)
console.log(sumOfAges)

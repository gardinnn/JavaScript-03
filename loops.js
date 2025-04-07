// LOOPS

// contador
 for(let index = 0; index <= 20; index++){
     console.log(index)
 }

const cars = ['ferraari', 'tesla', 'mercedes']

 for(let i = 0; i < cars.length; i++){
     console.log(cars[i])
 }

 for(let car of cars){
     console.log(car)
 }

cars.forEach(function(car, index) {
    console.log(index)
    console.log(car)
})



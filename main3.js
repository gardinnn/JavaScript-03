// Um objeto guarda valores dentro de propriedades

const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: '21',
    hobbies: ['assistir F1', 'jogar futebol', 'ler'],
    dog: {
        name: 'Hulk',
        age: 18
    }
}

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies

// mesma coisa que acima
const {age, firstName: primeiroNome, hobbies, lastName, dog} = person

const read = person.hobbies[2]

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(dog)

// como adicionar nova propriedade
// person.dog = 'Hulk'

console.log(person)


const todos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true

    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: false

    },    

]

const descriptionOfLastTodo = todos[2].description

console.log(descriptionOfLastTodo)
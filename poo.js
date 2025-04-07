// PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getFullName(){
        console.log(`${this.firstName} ` + `${this.lastName}`)
    }

    static speak(){
        console.log('Hello jane')
    }
}

const person = new Person("jane", "doe", 30)
console.log(person)
Person.speak()

// ==============================================================

// HERANÇAS

class Animal{
    constructor(name){
        this.name = name
    }

    speak(){
      console.log(`${this.name} made some noise!`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    speak(){
        console.log(`${this.name} barked!`)
    }
}

const animal = new Animal ('simba')
const dog = new Dog('bob')
animal.speak()
dog.speak()
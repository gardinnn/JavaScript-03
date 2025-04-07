// JSON

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

const todosJson = JSON.stringify(todos)
const todosList = JSON.parse(todosJson)

console.log(todosList)
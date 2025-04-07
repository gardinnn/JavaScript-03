// Para criarmos uma lista precisamos de [], e dentro delas os valores string dentro de ''.

const names = ['Felipe', 'João', 'Pedro', false]
                // 0        1       2  ...

// as listas em js são baseadas em posição 0
const joao = names[1]

// o .push nos permite colocar mais valores na lista sempre na ultima posição.
names.push('Mateus')

// o .unshift nos permite colocar valores na lista na primeira posição.
names.unshift('Tiago')

// o .pop exclui os ultimos valores da lista.
names.pop()
names.pop()

// para alteral qualquer valor:
names[2] = 'André'

// para sabermos a posição dos valores
console.log(names.indexOf('Felipe'))

// para colocarmos a lista em ordem alfabética
const sortedNames = names.sort()

// se quisermos saber se a variavel é uma lista
const nameIsArray = Array.isArray(names)

console.log(names.length)
console.log(sortedNames)
console.log(nameIsArray)




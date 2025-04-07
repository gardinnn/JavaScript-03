const x = ''
// Uma string vazia vai ser sempre false

console.log(!!x)

const y = 0
// valor 0 sempre sera false
console.log(!!y)

const a = null
const b = undefined
// null e undefined são false 
console.log(!!b)

const list = []
const obeject = {}
// list e object vão ser true
console.log(!!obeject)
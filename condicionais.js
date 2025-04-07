const sum = 1 + 3

// if(sum === 2){
//     console.log('a soma é igual a 2')
// } else if(sum === 3){
//      console.log('a soma é igual a 3')
// }else {
//     console.log('a soma não é igual a 2 e nem 3')
// }

let number = sum === 2 ? 2 : 4

// Mesma coisa que acima
//  if(sum === 2){
//     number = 2
//  } else {
//     number = 4
//  }

 console.log(number)
// ------------------------------------------------------------------------

// &&
// ||

const sum1 = 2 + 2
const sum2 = 3 + 10
 if(sum1 === 4 && sum2 === 6){
    console.log('a soma dos dois valores é igual a 4 e 6')
 }


 if(sum1 === 4 || sum2 === 6){
    console.log('a soma dos dois valores é igual a 4 ou 6')
 }

//  ----------------------------------------------------------------------

// SWHITCH

const car = 'Ferrari'
 switch(car){
    case 'Mercedes':
        console.log('Mercedes is beautiful')
    break
    case 'Ferrari':
        console.log('Ferrari is very red')
    break
    case 'Tesla':
        console.log('Tesla is ver smart')
    break            
 }
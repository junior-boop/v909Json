const alpha = 'abcdefghijklmnopqrstuvwxyz'
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nbre = '1234567890'
const symb = '-$_çàé'

const a = alpha.split('')
const b = ALPHA.split('')
const c = nbre.split('')
const d = symb.split('')

const e = []
const f = e.concat(a, b, c, d)

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}

module.exports = function generatorId(n){
    const Arr = [] 
    const Ar = []
    let i = 0
    for(i; i < n*2; i++){
        if(Arr.length < n*2 ){
            f.map((el, key) => {
                let x = getRandomInt(66);
               if(key === x){
                  Arr.push(el)
               }
            })
        } 
    }

    Arr.map((el) => {
        if(Ar.length < n){
            Ar.push(el)
        }
    })

    const id =Ar.join('')

    return id
}
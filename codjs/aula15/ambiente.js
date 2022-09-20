let num = [5, 8, 2,9,3]
num.push(1)
num.sort()
console.log(`Ordem dos vetores: ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso primeiro vetor é ${num[0]} `)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição: ${pos}`)
}
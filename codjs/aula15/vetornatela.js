let num = [5, 8, 2,9,3]
num.push(1)
num.sort()
/*
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}
*/
//método mais simples:
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
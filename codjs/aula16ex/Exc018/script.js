let num = document.getElementById('fnum')
let list = document.getElementById('list')
let res = document.getElementById('res')
let valores = []


//Função principal abaixo
function adicionar() {
    if(isNumero(num.value) && !inList(num.value, valores)){
        window.alert('Tudo ok!')
    }else{
        window.alert('[ERRO] valor inválido ou já adicionado!')
    }
}




//Função abaixo para verificar se o valor é um número
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Função abaixo para verificar se o valor já não está adicionado
function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
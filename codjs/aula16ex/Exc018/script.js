let num = document.getElementById('fnum')
let list = document.getElementById('list')
let res = document.getElementById('res')
let valores = []


//Função principal abaixo
function adicionar() {
    if(isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('Option')
        item.text = `Valor ${num.value} adicionado!`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('[ERRO] valor inválido ou já adicionado!')
    }
    num.value = ''
    num.focus()
    //focus faz o cursor voltar para ele sempre que uma funcionalidade atualizar!
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

//função para finalizar!
function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma/tot
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}.</p>`

    }
}


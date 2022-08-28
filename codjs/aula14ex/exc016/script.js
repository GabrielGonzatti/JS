function Contar(){
    var txtinicio = document.getElementById('txti')
    var txtfim = document.getElementById('txtf')
    var txtpasso = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        res.innerHTML = ('Impossível contar!')
        window.alert('[ERRO] PREENCHA CORRETAMENTE')
    } else {
        res.innerHTML = ('Contando: <br>')
        i = Number(txtinicio.value)
        f = Number(txtfim.value)
        p = Number(txtpasso.value)
        //passo = 0
        if(p <= 0){
            window.alert('Passo inválido! considerando passo=1')
            p = 1
        }
        //se a contagem for adicionando:
        if(i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        //se a contagem for subtraindo:
        } else if (i > f){
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += (` \u{1F3C1} `)
    }
}
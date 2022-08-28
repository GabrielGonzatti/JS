function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados!')
    }else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'foto-bebe-m.png')
                //criança
            } else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png')
                //jovem
            } else if(idade > 21 && idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
                //adulto
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
                //idoso
            }

        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'foto-bebe-f.png')
                //criança
            } else if(idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png')
                //jovem
            } else if(idade > 21 && idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png')
                //adulto
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} e idade ${idade}`
        res.appendChild(img)
    }
}

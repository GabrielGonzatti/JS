function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12){
        //Bomdia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#f7e7a2'
    } else if (hora >= 12 && hora <= 18) {
        //boatarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#889D96'
    } else {
        //boanoite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#153348'
    }
}
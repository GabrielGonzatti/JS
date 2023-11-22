//valores mínimos e máximo
var min = 1
var max = 1000
//abaixo está um gerador de número -- para o número secreto
var numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
//declarando como zerado o numero escolhido (usuário ainda não escolheu)
var numeroEscolhido = 0;
//loop de verificação
while(numeroEscolhido != numeroSecreto){
    var numeroEscolhido = prompt('Digite um número entre 1 e 1000');
    if(numeroEscolhido == numeroSecreto){
        alert('Parabéns você acertou!❤️');
        break;
    } else {
        alert('Você errou!👿')
        continue;
    }
}

      
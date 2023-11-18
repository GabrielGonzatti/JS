while (true) {
    // Solicita ao usuário a moeda e o valor
    var moeda = prompt("Digite a moeda (D para Dólar, R para Real):");
    var valor = parseFloat(prompt("Digite o valor:"));
    
    var valorConvertido;
    var cotacao;
    
    // Verifica a moeda e define a cotação correspondente
    //Caso o usuário tenha digitdo 'd' o toUpperCase irá torná-lo maiusculo
    if (moeda.toUpperCase() === "D") {
      cotacao = 5.32; // Cotação do Dólar
      valorConvertido = valor * cotacao;
    } else if (moeda.toUpperCase() === "R"){
      cotacao = 5.32; //cotacao do Dólar
      valorConvertido = valor/cotacao;
    } else {
      alert("Moeda inválida. Use 'D' para Dólar ou 'R' para Real.");
      continue;  //voltando ao início
    }
    
    // Exibe o resultado
    if (valorConvertido !== undefined) {
      alert("Valor convertido: " + valorConvertido.toFixed(2) + "R$");
    } 
    var querContinuar = prompt("Deseja fazer outra conversão? (s/n)");
     if (querContinuar.toLowerCase() !== 's') {
     break; // Sai do loop se a resposta não for 's'
     }
    }
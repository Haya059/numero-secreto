alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)    
    if (chute == numeroSecreto){
            break;
    } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
            tentativas++;
    } else {
            alert(`O número secreto é maior que ${chute}`);
            tentativas++;
    }
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
if (tentativas > 1){
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
} else {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
}
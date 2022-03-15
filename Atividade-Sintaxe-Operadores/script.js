/**
Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
 */


function numeros(n1, n2) {
    const primeiraFrase = criaPrimeiraFrase(n1,n2);
    const segundaFrase = criaSegundaFrase(n1,n2);

    return `${primeiraFrase} ${segundaFrase}`;

    // return iguais ? "São iguais" : " Não são iguais";
}
function criaPrimeiraFrase(n1,n2) {
    let primeiraFrase = `Os números ${n1} e ${n2}`;
    let simNao = 'não';

    if (n1 === n2) {
        simNao = '';
    } 

    return `${primeiraFrase} ${simNao} são iguais.`;
    
}

function criaSegundaFrase(n1,n2) {
    const soma = n1 + n2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (soma > 10) {
        resultado10 = 'maior';
    }
    if (soma > 20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} do que 10 e ${resultado20} do que 20`;
  
}

console.log((numeros(20,10)));
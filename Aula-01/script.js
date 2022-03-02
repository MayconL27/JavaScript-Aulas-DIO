alert("Tudo certo jovem!")

// Variavel generica.
var vOuF = false;
console.log(vOuF);
var num = 1;
console.log(num);
var nome = 'Maycon';
console.log(nome);

// se usa em escopo local, pode ser alterada.
let variavel = 'Maycon';
console.log(variavel);
variavel = 'Leandro';
console.log(variavel);

// Valor não pode ser alterado.
const constante = 'Maycon';
console.log(constante);


var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escooLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

console.log(escopoLocalInterno);

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação idêntica, compara o valor e tipo.
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;

// subtracao
var subtracao = 2 - 1;

// multiplicação
var multiplicacao = 2 * 2;

// divisão real
var divisaoReal = 6 / 2;

// divisão resto
var divisaoResto = 5 % 2;

// potenciação
var potenciacao = 2 ** 10;


// Relacionais

var maiorQue = 5 > 2;

var menorQue = 5 < 2;

var maiorOuIgual = 5 >= 2;

var menorOuIgual = 5 <= 2;

// Operadores lógicos

var e = true && false;

var ou = true || false;

var nao = !true;


var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());


for (var pos = 0 ; pos < valores.length; pos++){
console.log("Posicao:  " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";


var motos = new Array("BMW","Yamaha","Honda");

//calcular a média de todos os numeros de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
   soma += valores[pos];


}

    var media = soma/valores.length;

    console.log(media);


//localizar o maior valor dentro de um array de números
function encontrarMaiorValor(array) {
    let maior = array[0]; // Assume que o primeiro elemento é o maior
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; // Atualiza 'maior' se encontrar um valor maior
        }
    }
    
    return maior; // Retorna o maior valor encontrado
}

const numeros = [10, 5, 25, 8, 30];
const maiorValor = encontrarMaiorValor(numeros);
console.log("O maior valor no array é:", maiorValor);





//conjunto de cidades, qual a cidade tem o maior tamanho de palavras
function encontrarMaiorCidade(cidades) {
    let maiorCidade = "";

    for (const cidade of cidades) {
        if (cidade.length > maiorCidade.length) {
            maiorCidade = cidade;
        }
    }

    return maiorCidade;
}

const cidades = ["Nova York", "Los Angeles", "São Francisco", "Rio de Janeiro", "Cidade do México"];
const maiorCidade = encontrarMaiorCidade(cidades);
console.log("A cidade com o maior nome é:", maiorCidade);


var arr1 = [1,2,3,4,5,6];

console.log(arr1.join(' '));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do numero 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);



var ar = [-5, 10, 15, 20, -3, 89];

var numerosPositivos = ar.map(function(numero) {
    return Math.abs(numero); // Retorna o valor absoluto de cada número
});

console.log(numerosPositivos); // Exibe o array com números positivos






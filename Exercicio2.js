const valorCafe = 7;
const valorLeite = 5.5;
const valorCha = 6.25;

console.log('CARDAPIO: \nCafé\nLeite\nChá');

let escolha = prompt("'O que você quer beber?'");
switch(escolha){
    case "Café":
        console.log('Você escolheu', escolha, 'Total', valorCafe.toFixed(2));
        break;
    case "Leite":
        console.log('Você escolheu', escolha, 'Total', valorLeite.toFixed(2));
        break;
    case "Chá":
        console.log('Você escolheu', escolha, 'Total', valorCha.toFixed(2));
        break;
    default:
        console.log('Você deve escolher entre : Café, Leite ou Chá');
}

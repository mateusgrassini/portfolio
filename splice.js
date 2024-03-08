var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);

console.log(arr2);


var nomes = ["Maria","Joao","Lucas","Pedro"];
var novos = nomes.splice(1,2,"Luiz","Ronaldo");
console.log(nomes);

var pais = ["Brasil","Argentina","Colombia"];
pais.unshift("Uruguai");
console.log(pais);



var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi","Manuela"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);


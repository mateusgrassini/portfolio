var idade = 28;
var experienciaAnos = 5;
var bivelEducacao = "superior";
var possuiCertificado = true;

var idadeMinima = 18;
var experienciaMinimaAnos = 3;
var nivelEducacaoMinimo = "superior";
var certificadoObrigatorio = true;

var elegivel = 21 >= 18 &&

5 >= 3 &&

("superior" === "superior" || possuiCertificado) &&

(!certificadoObrigatorio || possuiCertificado);

console.log("Elegível para a vaga? " + elegivel);




var textoEntrada = document.querySelector("#input-padrao");
var textoSaida = document.querySelector("#texto-codificado");


function criptografar () {
   // O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
   // i afeta tanto minusculas, quanto maísculas
   // g afeta toda linha
   // m afeta linha e parágrafo
   
    var texto = document.getElementById("input-padrao").value.toLowerCase();
    
    var transformCripto = texto.replace(/e/igm, "enter");
    var transformCripto = transformCripto.replace(/i/igm,"imes");
    var transformCripto = transformCripto.replace(/a/igm, "ai");
    var transformCripto = transformCripto.replace(/o/igm, "ober");
    var transformCripto = transformCripto.replace(/u/igm, "ufat");
    
    
    document.getElementById("texto-secundario").innerHTML = texto;
    console.log("texto")
}


function descriptografar (){
    var texto = document.getElementById("input-padrao").value.toLowerCase();

    var transformDescripto = texto.replace(/enter/igm, "e");
    var transformDescripto = transformDescripto.replace(/imes/igm,"i");
    var transformDescripto = transformDescripto.replace(/ai/igm, "a");
    var transformDescripto = transformDescripto.replace(/ober/igm, "o");
    var transformDescripto =  transformDescripto.replace(/ufat/igm, "u");
   
    
    
};

function copiar(){
    var copieTexto = document.getElementById('input-padrao');

    copieTexto.select();
    document.execCommand('copy');
    alert("Texto copiado!!!")
};


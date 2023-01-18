var textoEntrada = document.querySelector("#input-padrao");
var textoSaida = document.querySelector("#texto-codificado");

   // O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
   // i afeta tanto minusculas, quanto maísculas
   // g afeta toda linha
   // m afeta linha e parágrafo
function criptografar () {
    
    var texto = document.getElementById("input-padrao").value.toLowerCase();
    
    var transformCripto = texto.replace(/e/igm, "enter");
    var transformCripto = transformCripto.replace(/i/igm,"imes");
    var transformCripto = transformCripto.replace(/a/igm, "ai");
    var transformCripto = transformCripto.replace(/o/igm, "ober");
    var transformCripto = transformCripto.replace(/u/igm, "ufat");
    
    
    document.getElementById("texto-codificado").innerHTML = transformCripto;
    
    document.getElementById("imagem-principal").style.display = "none";
    document.getElementById("texto-codificado").style.display = "block";
}


function descriptografar (){
    var texto = document.getElementById("input-padrao").value.toLowerCase();

    var desTransformDescripto = texto.replace(/enter/igm, "e");
    var desTransformDescripto = desTransformDescripto.replace(/imes/igm,"i");
    var desTransformDescripto = desTransformDescripto.replace(/ai/igm, "a");
    var desTransformDescripto = desTransformDescripto.replace(/ober/igm, "o");
    var desTransformDescripto =  desTransformDescripto.replace(/ufat/igm, "u");
   
    
    document.getElementById("texto-input").innerHTML = desTransformCripto;
};

function copiar(){
    var copieTexto = document.getElementById("texto-codificado");

    copieTexto.select();
    document.execCommand('copy');
    alert("Texto copiado!!!")
};


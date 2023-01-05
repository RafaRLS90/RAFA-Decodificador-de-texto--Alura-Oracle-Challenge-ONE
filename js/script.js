var textoEntrada = document.querySelector("caixa-texto");
var textoSaida = document.querySelector("segunda-caixa-texto");


function criptografar () {
    var texto = textoEntrada.value;
        
    var transformCripto =    
        texto.replace(/e/g, "enter");
        texto.replace(/i/g,"imes");
        texto.replace(/a/g, "ai");
        texto.replace(/o/g, "ober");
        texto.replace(/u/g, "ufat");
        texto.replace(/u/g, "ufat");
    }


criptografa.onclick = criptografar;

return textoEntrada;




var acaoBotaoDescriptografa = document.querySelector("descriptografa");

function descriptografar (){

};

descriptografa.onclick = descriptografar;


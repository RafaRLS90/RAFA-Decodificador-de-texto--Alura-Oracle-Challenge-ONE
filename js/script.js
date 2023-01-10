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


document.getElementById("segunda-caixa-texto").innerHTML = '<textarea readonly id="caixa-texto">' + transformCripto + '<textarea>' + '<button class ="copiar" id="acao-copiar" onclick="copiar()">Copiar</button>'






var acaoBotaoDescriptografa = document.querySelector("descriptografa");

function descriptografar (){

};

descriptografa.onclick = descriptografar;


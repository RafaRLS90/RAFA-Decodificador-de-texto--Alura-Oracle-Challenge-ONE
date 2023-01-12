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
        
   
   
        document.getElementById("caixa-texto").innerHTML = '<textarea readonly id="text-para-codificar">' + transformCripto + 
        '</textarea>' + '<button class ="copiar" id="botao-copia" onclick="copiar()">Copiar</button>'
    };


function descriptografar (){
    var texto = textoEntrada.value;

    var transformDescripto = 
    texto.replace(/enter/g, "e");
    texto.replace(/imes/g,"i");
    texto.replace(/ai/g, "a");
    texto.replace(/ober/g, "o");
    texto.replace(/ufat/g, "u");
    
    document.getElementById("segunda-caixa-texto").innerHTML = '<textarea readonly id="text-para-codificar">' + transformDescripto + 
    '</textarea>' + '<button class ="copiar" id="botao-copia" onclick="copiar()">Copiar</button>'

};

function copiar(){
    var copieTexto = document.getElementById('#caixa-texto');

    copieTexto.select();
    document.execCommand('copy');
    alert("Texto copiado!!!")
};


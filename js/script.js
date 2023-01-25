    
    // O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
   // i afeta tanto minusculas, quanto maísculas
   // g afeta toda linha
   // m afeta linha e parágrafo
   // var textoSemAcento = texto.normalize("NFD").replace(/[\u0300 -\u036f]/g, "");
   // var transformCripto = transformCripto.replace(/[\u0300-\u036f]/g , "");


   
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
    document.getElementById("comando-copia").style.display = "block";
    document.getElementById("mensagem-chamada").style.display = "none";
    document.getElementById("acao-botao-limpa").style.display = "block";
    document.getElementById("acao-botao-cola").style.display = "block";
}


function descriptografar (){
    var texto = document.getElementById("input-padrao").value.toLowerCase();

    var transformCripto = texto.replace(/enter/igm, "e");
    var transformCripto = transformCripto.replace(/imes/igm,"i");
    var transformCripto = transformCripto.replace(/ai/igm, "a");
    var transformCripto = transformCripto.replace(/ober/igm, "o");
    var transformCripto =  transformCripto.replace(/ufat/igm, "u");
   
    document.getElementById("texto-codificado").innerHTML = transformCripto;
    
    document.getElementById("imagem-principal").style.display = "none";
    document.getElementById("texto-codificado").style.display = "block";
    document.getElementById("comando-copia").style.display = "block";
    document.getElementById("mensagem-chamada").style.display = "none";
     
};

function copiar(){
    var copieTexto = document.querySelector("#texto-codificado");

    copieTexto.select();
    document.execCommand('copy');
    alert("Texto copiado!!!")
    
};

function limpar() {
   
    document. getElementById("input-padrao"). value = '';
    document.getElementById("imagem-principal").style.display = "block";
    document.getElementById("acao-botao-limpa").style.display = "none";
    document.getElementById("acao-botao-cola").style.display = "none";
    document.getElementById("texto-codificado").style.display = "none";

};

function cola() {
    document. getElementById("input-padrao"). value = 'copieTexto';

}
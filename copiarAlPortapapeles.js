var botonCopiado = document.querySelector(".boton-copiar");
botonCopiado.addEventListener("click",function(event){
    var textoACopiar = document.querySelector(".output-text");
    textoACopiar.select();
    document.execCommand('copy');
});
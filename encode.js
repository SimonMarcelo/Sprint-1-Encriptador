const inputTexto = document.querySelector(".input-text");
const outputTexto = document.querySelector(".output-text");

function btnencriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    seleccionarOutput;
}

function seleccionarOutput(mensaje){
    const botonEncriptar = document.querySelector(".boton-encriptar");
    var conMensaje = document.querySelector(".mensaje");
    var sinMensaje = document.querySelector(".ningun-mensaje");
}

function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let sinMensaje = document.querySelector(".ningun-mensaje");
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    if (StringParaEncriptar.length > 0){
        sinMensaje.classList.add("invisible")
    }
    else{
        sinMensaje.classList.remove("invisible");
    }
    return StringParaEncriptar;
}

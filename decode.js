// const inputTexto = document.querySelector(".input-text");
// const outputTexto = document.querySelector(".output-text");

function btndesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputTexto.value = textoDesencriptado;
    seleccionarOutput;
}

function seleccionarOutput(mensaje){
    const botonDesencriptar = document.querySelector(".boton-desencriptar");
    var conMensaje = document.querySelector(".mensaje");
    var sinMensaje = document.querySelector(".ningun-mensaje");
}

function desencriptar(StringParaDesencriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let sinMensaje = document.querySelector(".ningun-mensaje");
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaDesencriptar.includes(matrizCodigo[i][1])) {
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    if (StringParaDesencriptar.length > 0){
        sinMensaje.classList.add("invisible")
    }
    else{
        sinMensaje.classList.remove("invisible");
    }
    return StringParaDesencriptar;
}
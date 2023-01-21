const botonEncriptar2 = document.getElementById("botonEncriptar2");
const botonDesencriptar1 = document.getElementById("botonDesencriptar1");
const botonDesencriptar2 = document.getElementById("botonDesencriptar2");
const botonEncriptar1 = document.getElementById("botonEncriptar1");
const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado")
const deslizador1 = document.getElementById("deslizador1")
const deslizador2 = document.getElementById("deslizador2")
const contenedor = document.getElementById("contenedor")
const alura = document.getElementById("alura")


function encriptar() {

    if (texto.value){
        let texto_encriptado = texto.value;
        texto_encriptado = texto_encriptado.replace(/[àáâãäå]/g,"a");
        texto_encriptado = texto_encriptado.replace(/[èéêë]/g,"e");
        texto_encriptado = texto_encriptado.replace(/[ìíîï]/g,"i");
        texto_encriptado = texto_encriptado.replace(/[òóôõö]/g,"o");
        texto_encriptado = texto_encriptado.replace(/[ùúûü]/g,"u");
        texto_encriptado = texto_encriptado.replace(/e/g, "enter");
        texto_encriptado = texto_encriptado.replace(/i/g, "imes");
        texto_encriptado = texto_encriptado.replace(/a/g, "ai");
        texto_encriptado = texto_encriptado.replace(/u/g, "ufat");
        texto_encriptado = texto_encriptado.replace(/o/g, "ober");
        resultado.innerText = texto_encriptado;
    }
}

function desencriptar() {
    if (texto.value){
        let texto_desencriptado = texto.value;
        texto_desencriptado = texto_desencriptado.replace(/[àáâãäå]/g,"a");
        texto_desencriptado = texto_desencriptado.replace(/[èéêë]/g,"e");
        texto_desencriptado = texto_desencriptado.replace(/[ìíîï]/g,"i");
        texto_desencriptado = texto_desencriptado.replace(/[òóôõö]/g,"o");
        texto_desencriptado = texto_desencriptado.replace(/[ùúûü]/g,"u");
        texto_desencriptado = texto_desencriptado.replace(/enter/g, "e");
        texto_desencriptado = texto_desencriptado.replace(/imes/g, "i");
        texto_desencriptado = texto_desencriptado.replace(/ai/g, "a");
        texto_desencriptado = texto_desencriptado.replace(/ufat/g, "u");
        texto_desencriptado = texto_desencriptado.replace(/ober/g, "o");
        resultado.innerText = texto_desencriptado;
    }
}

function portapapeles(){
    navigator.clipboard.writeText(resultado.textContent)
    console.log("Copiado")
}

function selector(){
    if (deslizador1.value=='0') {
        desencriptar();
    }else{
        encriptar();
    }
}

function deslizador1Seleccion(){
    if (deslizador1.value=='0') {
        contenedor.style.setProperty("background-image", "linear-gradient(to bottom,rgba(255, 242, 183, 0.856),rgba(100, 53, 139, 0.651))")
        deslizador2.value = 0;
        desencriptar();
    }else{
        contenedor.style.setProperty("background-image", "linear-gradient(to bottom,rgba(255, 242, 183, 0.856),rgba(49, 138, 255, 0.651))")
        deslizador2.value = 1;
        encriptar();
    }
}

function deslizador2Seleccion(){
    if (deslizador2.value=='0') {
        deslizador1.value = 0;
        deslizador1Seleccion();
    }else{
        deslizador1.value = 1;
        deslizador1Seleccion();
    }
}

document.getElementById("texto").focus();

function btEncriptar(){
    deslizador1.value = 1;
    deslizador1Seleccion();
}

function btDesencriptar(){
    deslizador1.value = 0;
    deslizador1Seleccion();
}

botonEncriptar1.addEventListener("click", btEncriptar);
botonDesencriptar1.addEventListener("click", btDesencriptar);
botonEncriptar2.addEventListener("click", btEncriptar);
botonDesencriptar2.addEventListener("click", btDesencriptar);
texto.oninput = selector;
texto.onbeforeinput= selector;
deslizador1.addEventListener("change",deslizador1Seleccion);
deslizador2.addEventListener("change",deslizador2Seleccion);

let sinTexto;
function verificarTextoA(){
    sinTexto = setInterval(verificarTextoB, 500);
}

let azar1 = 0;
let azar2 = 0;
let azar3 = 0;
function verificarTextoB(){
    azar1 = Math.floor(Math.random() * 255);
    azar2 = Math.floor(Math.random() * 255);
    azar3 = Math.floor(Math.random() * 255);
    if (texto.value == "") {
        resultado.innerText = "";
    }
    alura.style.filter = `opacity(70%) drop-shadow(0px 0px 2px rgb(${azar1}, ${azar2}, ${azar3})`;
}

verificarTextoA();
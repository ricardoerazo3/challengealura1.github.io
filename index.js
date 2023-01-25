

function solominusculas(cadena){
    var patron01 = RegExp("[A-Z]+");    
    var ok =patron01.test(cadena);
    return ok
}
function acentos(cadena){
    var patron02 =RegExp("[\u00C0-\u017F]+");
    var ok2=patron02.test(cadena);
    return ok2
}
function desencriptar(cadena){
    var textoEncriptado = cadena.replace(/enter/img, 'e');
    textoEncriptado = textoEncriptado.replace(/ober/img, 'o');
    textoEncriptado = textoEncriptado.replace(/imes/img, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/img, 'a');
    textoEncriptado = textoEncriptado.replace(/ufat/img, 'u');
return textoEncriptado;
} 
function encriptar(cadena){
    var textoEncriptado = cadena.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/o/img, 'ober');
    textoEncriptado = textoEncriptado.replace(/i/img, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/img, 'ai');
    textoEncriptado = textoEncriptado.replace(/u/img, 'ufat');
return textoEncriptado;
}

function accionbotonencriptar(){
let textarea1=document.getElementById("area_mensaje").value;
let textarea2=document.getElementById("resultado");
let encriptacion=" ";
if(!(solominusculas(textarea1))){
    if(acentos(textarea1)){
        alert("no se permiten acentos"); 
    }else{
        encriptacion=encriptar(textarea1);
        textarea2.innerText=encriptacion;
    }
}
else{
    alert("no se permiten mayusculas"); 
}

}

function accionbotondesencriptar(){
    let textarea1=document.getElementById("area_mensaje").value;
    let textarea2=document.getElementById("resultado");
    let encriptacion=" "; 
    encriptacion=desencriptar(textarea1);
    textarea2.innerText=encriptacion;
  
}
function copiarcontenido(){
    var codigoACopiar = document.getElementById('resultado');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}

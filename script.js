document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn_criptografar').addEventListener('click', criptografar);
    document.querySelector('.btn_descriptografar').addEventListener('click', descriptografar);
});

function criptografar() {
    let texto = document.getElementById("userText").value;
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    exibirResultado(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById("userText").value;
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Apenas letras minúsculas sem acentos ou caracteres especiais.");
        return;
    }
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibirResultado(textoDescriptografado);
}

function exibirResultado(resolucaoDoTexto) {
    let resultContMensagem = document.getElementById("resultContMensagem");
    let resolucaoArea = document.getElementById("resolucao");
    let imagemContMensagem = resultContMensagem.querySelector('.contImagem');
    let textoContMensagem = resultContMensagem.querySelector('.textoMensagem');
    let btn_copiar = document.getElementById("btn_copiar");

    imagemContMensagem.style.display = 'none';
    textoContMensagem.style.display = 'none';
    resolucaoArea.style.display = 'block';
    btn_copiar.style.display = 'block';
    resolucaoArea.innerText = resolucaoDoTexto; 
}

function copiarParaAreaDeTransferencia() {
    let resolucao = document.getElementById("resolucao");
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = resolucao.innerText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Texto copiado!");
}
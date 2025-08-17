function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];

    if (ate - de + 1 < quantidade) {
        document.getElementById("resultado").innerHTML = `<label class='texto__paragrafo'>Intervalo insuficiente para ${quantidade} números únicos.</label>`;
        return;
    }

    while (sorteados.length < quantidade) {
        let numero = obterNumeroAleatorio(de, ate);
        if (!sorteados.includes(numero)) {
            sorteados.push(numero);
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class='texto__paragrafo'>Números sorteados: ${sorteados.join(", ")}</label>`;
    alterarStatusBotao();
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

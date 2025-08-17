var expressao = "0";
var display = document.getElementById("display");
var ultimoFoiPonto = false;

function mostrar(e) {
    var valor = e.target.innerText;

    if (valor == "." && ultimoFoiPonto) {
        return;
    }

    if (valor == ".") {
        ultimoFoiPonto = true;
    } else {
        ultimoFoiPonto = false;
    }

    if (expressao == "0" && valor != ".") {
        expressao = valor;
    } else {
        expressao = expressao + valor;
    }

    display.innerText = expressao;
}

function limpar() {
    expressao = "0";
    ultimoFoiPonto = false;
    display.innerText = expressao;
}

function calcular() {
    expressao = eval(expressao);
    display.innerText = expressao;
    ultimoFoiPonto = false;
}

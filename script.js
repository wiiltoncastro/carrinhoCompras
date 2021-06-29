let quant1 = document.getElementById("quant1");
let quant2 = document.getElementById("quant2");
let quant3 = document.getElementById("quant3");
let quant4 = document.getElementById("quant4");
let frete = document.getElementById("frete");
let quantUnidades = document.getElementById("quantUnidades");
let totalUnidades = document.getElementById("totalUnidades");
let resultado = document.getElementById("resultado");
let freteGratis = document.getElementById("freteGratis");
let finalizar = document.getElementById("finalizar");

let quantidade = 0;

let btn = document.getElementById("btn");

function clicou() {
  quantidade =
    Number(quant1.value) +
    Number(quant2.value) +
    Number(quant3.value) +
    Number(quant4.value);

  let total = quantidade * Number(1.5);

  quantUnidades.innerHTML = quantidade;
  totalUnidades.innerHTML =
    "<span>R$ </span>" + total.toFixed(2).replace(".", ",");

  if (total >= 10.0) {
    freteGratis.style.display = "flex";
    frete.style.display = "none";
    resultado.innerHTML =
      "<span>R$ </span>" + total.toFixed(2).replace(".", ",");
  } else if (total != 0) {
    total = total + Number(2.0);
    freteGratis.style.display = "none";
    frete.style.display = "flex";
    resultado.innerHTML =
      "<span>R$ </span>" + total.toFixed(2).replace(".", ",");
  }

  quant1.value = "";
  quant2.value = "";
  quant3.value = "";
  quant4.value = "";
}

function mouseFora() {
  console.log("saiu");
  finalizar.style = "background-color: rgba(0, 110, 255, 0.8);";
}

function mouseDentro() {
  console.log("entrou");
  finalizar.style = "background-color: rgba(0, 110, 255);";
}

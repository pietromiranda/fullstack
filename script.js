// Gera número aleatório de 0 a 99
let numeroSecreto = Math.floor(Math.random() * 100);

function verificar() {
  let valor = document.getElementById("numero").value;
  let resultado = document.getElementById("resultado");

  if (valor == numeroSecreto) {
    resultado.innerHTML = "🎉 Acertou!";
    document.getElementById("body")
      .style.setProperty("background-color", "green");
  } 
  else {
    document.getElementById("body")
      .style.setProperty("background-color", "red");

    if (valor > numeroSecreto) {
      resultado.innerHTML = "🔽 O número é menor!";
    } else {
      resultado.innerHTML = "🔼 O número é maior!";
    }
  }
}
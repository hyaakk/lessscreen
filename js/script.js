// Seleção dos elementos (fora da função para performance)
const inputIdade = document.querySelector(".input-idade");
const inputHoras = document.querySelector(".input-horas");
const btnVerificar = document.querySelector(".btnVerificar");
const campoResultado = document.querySelector("#resultadoUso");

// Função que executa o cálculo 
function calcularUso() {
  const idade = document.querySelector(".input-idade").value;
  const horas = document.querySelector(".input-horas").value;

  // Para impedir que o usuario não preencha os campos  
  if (idade === "" || horas === "");

  let horaMax;

  if (idade < 2) {
    horaMax = 0.001;
  } else if (idade >= 2 && idade < 5) {
    horaMax = 1;
  } else if (idade >= 5 && idade < 10) {
    horaMax = 2;
  } else if (idade >= 10 && idade < 18) {
    horaMax = 3;
  } else {
    horaMax = 4;
  }

  if (horas > 24) {
    alert("O número de horas deve ser menor que 24h.");
    return;
  }
  if (horas < 0) {
    alert("O número de horas deve ser maior ou igual à 0h");
    return;
  }

  const indice = horas / horaMax;
  let mensagem = "";

  // Saída
  if (indice <= 1) {
    mensagem =
      "✅ Uso consciente: Parabéns, você está usando as telas de forma equilibrada!";
    campoResultado.style.color = "green";
  } else if (indice > 1 && indice <= 1.5) {
    mensagem =
      "⚠️ Uso moderado: Você precisa diminuir um pouco o uso de telas.";
    campoResultado.style.color = "orange";
  } else {
    mensagem =
      "🚨 Uso excessivo: Você precisa diminuir urgentemente o tempo de tela!";
    campoResultado.style.color = "red";
  }

  // Exibe o resultado no parágrafo do HTML
  campoResultado.textContent = mensagem;
}


btnVerificar.addEventListener("click", calcularUso);

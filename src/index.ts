const consoleUser = document.getElementById("consoleUser");

function msgConsoleClick() {
  if (consoleUser === null) {
    return;
  }
  if (consoleUser.textContent === "Eduardo (user)") {
    consoleUser.textContent = "Click on the consoleUser element";
  } else {
    consoleUser.textContent = "Eduardo (user)";
  }
}

if (consoleUser === null) {
  console.log("Nao encontrado");
} else {
  consoleUser.addEventListener("click", msgConsoleClick);
}


const chamadoForm = document.getElementById("chamadoForm");

chamadoForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("Formulário de chamado enviado!");
});
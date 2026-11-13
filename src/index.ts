interface Chamado {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: string;
  dataCriacao: Date;
  status: "aberto" | "andamento" | "fechado";
}

const chamados: Chamado[] = [];

const chamadoForm = document.getElementById("chamadoForm");
const tituloInput = document.getElementById("titulo") as HTMLInputElement;
const descricaoInput = document.getElementById(
  "descricao",
) as HTMLTextAreaElement;
const prioridadeSelect = document.getElementById(
  "prioridade",
) as HTMLSelectElement;
const chamadosDiv = document.getElementById("chamados");

chamadoForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const novoChamado: Chamado = {
    id: crypto.randomUUID(),
    titulo: tituloInput.value,
    descricao: descricaoInput.value,
    prioridade: prioridadeSelect.value,
    dataCriacao: new Date(),
    status: "aberto",
  };

  chamados.push(novoChamado);

 if (chamadosDiv) {
      chamadosDiv.innerHTML = "";
    }

  console.log(chamados);

  chamados.forEach((chamado) => {
    const chamadoElement = document.createElement("div");
    const h2 = document.createElement("h2");
    const pId = document.createElement("p");
    const pDesc = document.createElement("p");
    const pPrioridade = document.createElement("p");
    const pDataCriacao = document.createElement("p");
    const pStatus = document.createElement("p");

    h2.textContent = chamado.titulo;
    pId.textContent = `ID: ${chamado.id}`;
    pDesc.textContent = `Descrição: ${chamado.descricao}`;
    pPrioridade.textContent = `Prioridade: ${chamado.prioridade}`;
    pDataCriacao.textContent = `Data de Criação: ${(chamado.dataCriacao).toLocaleString()}`;
    pStatus.textContent = `Status: ${chamado.status}`;
    chamadoElement.classList.add("bg-gray-800", "p-4", "space-y-4", "mb-4","border", "border-gray-700", "rounded",);
    h2.classList.add("text-xl", "font-bold");
    pDataCriacao.classList.add("text-gray-500");

    chamadoElement.appendChild(h2);
    chamadoElement.appendChild(pId);
    chamadoElement.appendChild(pDesc);
    chamadoElement.appendChild(pPrioridade);
    chamadoElement.appendChild(pDataCriacao);
    chamadoElement.appendChild(pStatus);

    chamadosDiv?.appendChild(chamadoElement);
    
  });
});



// 1. Selecionar os elementos que vamos usar
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// 2. Criar a função que adiciona a tarefa
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value;

    // Se o input estiver vazio, avisamos o usuário
    if (textoTarefa.trim() === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Criar um novo elemento <li> (item da lista)
    const novoItem = document.createElement("li");
    novoItem.textContent = textoTarefa;

    // Adicionar o novo item dentro da nossa <ul> listaTarefas
    listaTarefas.appendChild(novoItem);

    // Limpar o campo de texto e focar nele novamente
    inputTarefa.value = "";
    inputTarefa.focus();
}

// 3. Escutar o clique no botão
botaoAdicionar.addEventListener("click", adicionarTarefa);

// 4. (Opcional) Permitir apertar 'Enter' para adicionar
inputTarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
const inputNome = document.getElementById("nome-produto"); //entrada do nome
const selectCat = document.getElementById("categoria-produto");
const previaNome = document.getElementById("previa-nome"); //saída do nome
const previaCat = document.getElementById("previa-categoria"); 
const btnLimpar = document.getElementById("btn-limpar");
const cardPrevia = document.getElementById("card-previa");

// 2. EVENTO INPUT (Interatividade em Tempo Real)
// Explique: O evento 'input' acontece a cada tecla digitada.

inputNome.addEventListener("input", () => {
    // Atualiza o texto da prévia com o que está no input
    previaNome.textContent = inputNome.value;

    // LÓGICA DE ESTILO (Integração com Aula 09)
    // Se o nome for curto, fica rosa. Se for longo, fica vermelho.
    if (inputNome.value.length > 10) {
        previaNome.style.color = "red";
    } else {
        previaNome.style.color = "#E15BFF";
    }
});

// 3. EVENTO CHANGE (Seleção de Opções)
// Explique: O 'change' é acionado quando a seleção termina.

selectCat.addEventListener("change", () => {
    previaCat.textContent = selectCat.value;
    document.getElementById("card-previa").classList.add("destaque"); // Aplica o destaque

    // Aplicando uma classe CSS para destacar o card (Revisão Aula 09)
    if (selectCat.value !== "Sem Categoria") {
        cardPrevia.classList.add("destaque");
    } else {
        cardPrevia.classList.remove("destaque");
    }
});

// 4. EVENTO CLICK (Ação de Finalização/Limpeza)

btnLimpar.addEventListener("click", () => {
    // Limpando os valores dos inputs
    inputNome.value = "";
    selectCat.value = "Sem Categoria";

    // Resetando a prévia
    previaNome.textContent = "Nome do Produto";
    previaCat.textContent = "Nenhuma";
    cardPrevia.classList.remove("destaque");

    alert("O formulário foi limpo com sucesso!");
});
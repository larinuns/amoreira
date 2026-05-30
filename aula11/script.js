const inputNum = document.getElementById("num");
const spanRes = document.getElementById("resultado");

/**
 * Função principal para realizar os cálculos matemáticos
 * @param {string} operacao - O método Math a ser aplicado
 */
function calcular(operacao) {
    // Captura o valor do input e converte para número
    let valor = parseFloat(inputNum.value);
    
    // Validação básica: se não for um número, avisa o usuário
    if (isNaN(valor)) {
        alert("Por favor, digite um número válido antes de calcular!");
        inputNum.focus();
        return;
    }

    let res = 0;

    // Aplicação das funções do Objeto Math
    switch (operacao) {
        case 'round':
            res = Math.round(valor); // Arredonda para o mais próximo
            break;
        case 'ceil':
            res = Math.ceil(valor);  // Arredonda para cima (teto)
            break;
        case 'floor':
            res = Math.floor(valor); // Arredonda para baixo (chão)
            break;
        case 'sqrt':
            // Raiz quadrada de número negativo resulta em NaN (Not a Number)
            if (valor < 0) {
                alert("Não existe raiz quadrada real de número negativo!");
                res = "Erro";
            } else {
                res = Math.sqrt(valor).toFixed(2); // Limita em 2 casas decimais
            }
            break;
        case 'abs':
            res = Math.abs(valor);   // Valor absoluto (remove o sinal negativo)
            break;
        case 'trunc':
            res = Math.trunc(valor); // Remove a parte decimal
            break;
        default:
            res = "Operação inválida";
    }

    // Exibe o resultado na tela
    spanRes.textContent = res;
    
    // Efeito visual simples: muda a cor temporariamente
    spanRes.style.color = "#c695c3";
    setTimeout(() => {
        spanRes.style.color = "#bc95c6";
    }, 500);
}

/**
 * Função para gerar um número aleatório entre 1 e 100
 */
function sortear() {
    // Math.random() gera entre 0 e 0.999...
    // Multiplicamos por 100 e somamos 1 para o intervalo [1, 100]
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;
    
    // Coloca o número sorteado no input para que o aluno possa testar outras funções com ele
    inputNum.value = numeroSorteado;
    spanRes.textContent = "" + numeroSorteado;
    
    // Feedback visual
    spanRes.style.color = "#bc95c6";
}
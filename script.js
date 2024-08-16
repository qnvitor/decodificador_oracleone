// Função para criptografar o texto
function criptografarTexto() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    
    // Substitui as letras 'e', 'i', 'a', 'o', 'u' pelas strings correspondentes
    let resultado = texto.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    
    // Exibe o texto criptografado no campo de saída
    document.getElementById("outputTexto").value = resultado;
}

// Função para descriptografar o texto
function descriptografarTexto() {
    // Obtém o texto do campo de entrada e converte para minúsculas
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    
    // Substitui as strings 'enter', 'imes', 'ai', 'ober', 'ufat' pelas letras correspondentes
    let resultado = texto.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    
    // Exibe o texto descriptografado no campo de saída
    document.getElementById("outputTexto").value = resultado;
}

// Função para copiar o texto criptografado ou descriptografado para a área de transferência
function copiarTexto() {
    // Seleciona o texto do campo de saída
    let textoCopiado = document.getElementById("outputTexto");
    textoCopiado.select();
    
    // Copia o texto selecionado para a área de transferência
    document.execCommand("copy");
    
    // Exibe uma mensagem informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
}

// Função para gerar a chuva de números no estilo "Matrix"
function createMatrixRain() {
    // Seleciona o contêiner onde a chuva de números será exibida
    const matrixContainer = document.querySelector('.matrix');
    
    // Obtém as dimensões da janela do navegador
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calcula o número de colunas e linhas baseado no tamanho da janela
    const columns = Math.floor(width / 20); // Colunas
    const rows = Math.floor(height / 20); // Linhas

    // Cria spans para cada coluna e linha, representando os números que caem
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            // Cria um elemento <span> para cada número
            const span = document.createElement('span');
            
            // Define o conteúdo do span como um número aleatório de 0 a 9
            span.textContent = Math.floor(Math.random() * 10);
            
            // Define a posição do span na tela
            span.style.left = `${i * 20}px`; // Distribui ao longo da largura
            span.style.top = `${j * 20}px`; // Distribui ao longo da altura
            
            // Define um atraso aleatório para o início da animação
            span.style.animationDelay = `${Math.random() * 5}s`;
            
            // Define uma duração aleatória para a animação, entre 5 e 10 segundos
            span.style.animationDuration = `${Math.random() * 5 + 5}s`;
            
            // Define um tamanho aleatório para a fonte do número
            span.style.fontSize = `${Math.random() * 20 + 10}px`;
            
            // Adiciona o span ao contêiner
            matrixContainer.appendChild(span);
        }
    }
}

// Chama a função createMatrixRain quando a página é carregada
window.onload = createMatrixRain;

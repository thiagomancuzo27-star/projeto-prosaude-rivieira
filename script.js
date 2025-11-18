// 1. BANCO DE DADOS DE TEXTOS
// Aqui você define o texto para cada ID do seu HTML
const informacoes = {
    "B1": {
        titulo: "Prefeitura Municipal de SP",
        texto: "Órgão responsável pela gestão da cidade, fornecendo diretrizes e apoio institucional para o projeto."
    },
    "B2": {
        titulo: "GeoSampa",
        texto: "Mapa digital oficial da cidade. Usaremos dados abertos do GeoSampa para mapear as necessidades da região do Riviera."
    },
    "E1": {
        titulo: "Fab Lab",
        texto: "Laboratório de Fabricação Digital. Aqui serão criadas as #engenhocas e protótipos para resolver problemas de saúde locais."
    },
    "C1": {
        titulo: "FPAC",
        texto: "Fundo Especial de Promoção de Atividades Culturais. Uma possível fonte de financiamento para ações culturais do projeto."
    },
    "D1": {
        titulo: "Hosp. Mun. Guarapiranga",
        texto: "Referência hospitalar na região. Atuará como parceiro técnico para validação das soluções de saúde."
    }
    // Você pode adicionar mais itens aqui seguindo o padrão...
};

// 2. LÓGICA DO MODAL

// Pegamos os elementos da tela
const modal = document.getElementById("meuModal");
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");
const btFechar = document.getElementsByClassName("fechar")[0];

// Pegamos todos os blocos que têm informação (sub-blocos)
const blocos = document.querySelectorAll(".sub-bloco");

// Adicionamos o evento de CLIQUE em cada bloco
blocos.forEach(bloco => {
    bloco.addEventListener("click", () => {
        const id = bloco.id;
        
        // Verifica se temos informação para esse ID
        if (informacoes[id]) {
            tituloModal.innerText = informacoes[id].titulo;
            textoModal.innerText = informacoes[id].texto;
            modal.style.display = "block"; // Mostra a janela
        } else {
            // Caso não tenha texto cadastrado ainda
            tituloModal.innerText = bloco.innerText;
            textoModal.innerText = "Informação detalhada em breve.";
            modal.style.display = "block";
        }
    });
});

// Quando clicar no (X), fecha a janela
btFechar.onclick = function() {
    modal.style.display = "none";
}

// Se clicar fora da janela (no fundo escuro), também fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

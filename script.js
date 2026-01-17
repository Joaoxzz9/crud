
// Função para renderizar os celulares
function renderPhones(phoneList) {
    const container = document.getElementById('phones-container');
    container.innerHTML = '';

    if (phoneList.length === 0) {
        container.innerHTML = '<p class="no-results">Nenhum celular encontrado.</p>';
        return;
    }

    phoneList.forEach(phone => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        card.innerHTML = `
            <div class="phone-name">${phone.name}</div>
            <div class="phone-details">
                <p><strong>Marca:</strong> ${phone.brand}</p>
                <p><strong>Modelo:</strong> ${phone.model}</p>
                <p><strong>Ano:</strong> ${phone.year}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para filtrar celulares com base na pesquisa
function filterPhones(query) {
    const lowerQuery = query.toLowerCase();
    return phones.filter(phone =>
        phone.name.toLowerCase().includes(lowerQuery) ||
        phone.brand.toLowerCase().includes(lowerQuery) ||
        phone.model.toLowerCase().includes(lowerQuery)
    );
}

// Event listener para o campo de pesquisa
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value;
    const filteredPhones = filterPhones(query);
    renderPhones(filteredPhones);
});

// Renderizar todos os celulares ao carregar a página
renderPhones(phones);

let phones = []; // Começa vazio

// Função para carregar os dados
async function carregarDados() {
    try {
        const resposta = await fetch('celulares.json'); // Busca o arquivo
        phones = await resposta.json(); // Converte o texto em lista de objetos
        
        // SÓ DEPOIS de carregar, você chama as outras funções
        renderPhones(phones); 
    } catch (erro) {
        console.error("Erro ao carregar o JSON:", erro);
    }
}

carregarDados();
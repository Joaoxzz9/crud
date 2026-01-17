// Lista de celulares com dados fixos
const phones = [
    // Apple - Novos iPhone 16 e 17
    
   
   
    // Celulares antigos mantidos para referência
    { name: 'iPhone 13', brand: 'Apple', model: 'Base', year: 2021, chip: 'A15 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3095, camera: '12MP principal + 12MP ultra-wide', price: 4299 },
    { name: 'iPhone 13 mini', brand: 'Apple', model: 'Mini', year: 2021, chip: 'A15 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 2406, camera: '12MP principal + 12MP ultra-wide', price: 3799 },
    { name: 'iPhone 13 Pro', brand: 'Apple', model: 'Pro', year: 2021, chip: 'A15 Bionic', tela: 'Super Retina XDR', hzz: 120, mAh: 3095, camera: '12MP principal + 12MP ultra-wide + 12MP telephoto', price: 4999 },
    { name: 'iPhone 13 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2021, chip: 'A15 Bionic', tela: 'Super Retina XDR', hzz: 120, mAh: 3687, camera: '12MP principal + 12MP ultra-wide + 12MP telephoto', price: 5999 },
    { name: 'iPhone 12', brand: 'Apple', model: 'Base', year: 2020, chip: 'A14 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 2815, camera: '12MP principal + 12MP ultra-wide', price: 3699 },
    { name: 'iPhone 12 mini', brand: 'Apple', model: 'Mini', year: 2020, chip: 'A14 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 2227, camera: '12MP principal + 12MP ultra-wide', price: 3299 },
    { name: 'iPhone 12 Pro', brand: 'Apple', model: 'Pro', year: 2020, chip: 'A14 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 2815, camera: '12MP principal + 12MP ultra-wide + 12MP telephoto', price: 4499 },
    { name: 'iPhone 12 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2020, chip: 'A14 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3687, camera: '12MP principal + 12MP ultra-wide + 12MP telephoto', price: 5299 },
    { name: 'iPhone 11', brand: 'Apple', model: 'Base', year: 2019, chip: 'A13 Bionic', tela: 'Liquid Retina', hzz: 60, mAh: 3110, camera: '12MP principal + 12MP ultra-wide', price: 3199 },
    { name: 'iPhone 11 Pro', brand: 'Apple', model: 'Pro', year: 2019, chip: 'A13 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3046, camera: '12MP principal + 12MP ultra-wide + 12MP telephoto', price: 3899 },
    { name: 'iPhone 11 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2019, chip: 'A13 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3969, camera: '12MP principal + 12MP ultra-wide + 12MP telephoto', price: 4499 },
    { name: 'iPhone 14', brand: 'Apple', model: 'Base', year: 2022, chip: 'A16 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3279, camera: '12MP principal + 12MP ultra-wide', price: 4799 },
    { name: 'iPhone 14 Plus', brand: 'Apple', model: 'Plus', year: 2022, chip: 'A16 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3687, camera: '12MP principal + 12MP ultra-wide', price: 5299 },
    { name: 'iPhone 14 Pro', brand: 'Apple', model: 'Pro', year: 2022, chip: 'A16 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3200, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto', price: 5999 },
    { name: 'iPhone 14 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2022, chip: 'A16 Bionic', tela: 'Super Retina XDR', hzz: 60, mAh: 3969, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto', price: 6999 },
    { name: 'iPhone 15', brand: 'Apple', model: 'Base', year: 2023, chip: 'A17 Pro', tela: 'Super Retina XDR', hzz: 60, mAh: 3279, camera: '48MP principal + 12MP ultra-wide', price: 5499 },
    { name: 'iPhone 15 Plus', brand: 'Apple', model: 'Plus', year: 2023, chip: 'A17 Pro', tela: 'Super Retina XDR', hzz: 60, mAh: 3687, camera: '48MP principal + 12MP ultra-wide', price: 6199 },
    { name: 'iPhone 15 Pro', brand: 'Apple', model: 'Pro', year: 2023, chip: 'A17 Pro', tela: 'Super Retina XDR', hzz: 60, mAh: 3200, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto', price: 6999 },
    { name: 'iPhone 15 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2023, chip: 'A17 Pro', tela: 'Super Retina XDR', hzz: 60, mAh: 3969, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto', price: 7999 },
    { name: 'iPhone 16', brand: 'Apple', model: 'Base', year: 2024, chip: 'A18', tela: 'Super Retina XDR', hzz: 60, mAh: 3279, camera: '48MP principal + 12MP ultra-wide', price: 6499 },
    { name: 'iPhone 16 Plus', brand: 'Apple', model: 'Plus', year: 2024, chip: 'A18', tela: 'Super Retina XDR', hzz: 60, mAh: 3687, camera: '48MP principal + 12MP ultra-wide', price: 7199 },
    { name: 'iPhone 16 Pro', brand: 'Apple', model: 'Pro', year: 2024, chip: 'A18 Pro', tela: 'Super Retina XDR', hzz: 120, mAh: 3200, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto + 48MP periscope', price: 7999 },
    { name: 'iPhone 16 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2024, chip: 'A18 Pro', tela: 'Super Retina XDR', hzz: 120, mAh: 3969, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto + 48MP periscope', price: 8999 },
    { name: 'iPhone 16e', brand: 'Apple', model: 'Base', year: 2024, chip: 'A18', tela: 'Super Retina XDR', hzz: 60, mAh: 3000, camera: '48MP principal + 12MP ultra-wide', price: 5499 },
    { name: 'iPhone 17', brand: 'Apple', model: 'Base', year: 2025, chip: 'A19', tela: 'Super Retina XDR', hzz: 60, mAh: 3279, camera: '48MP principal + 12MP ultra-wide', price: 7499 },
    { name: 'iPhone 17 Plus', brand: 'Apple', model: 'Plus', year: 2025, chip: 'A19', tela: 'Super Retina XDR', hzz: 60, mAh: 3687, camera: '48MP principal + 12MP ultra-wide', price: 8199 },
    { name: 'iPhone 17 Pro', brand: 'Apple', model: 'Pro', year: 2025, chip: 'A19 Pro', tela: 'Super Retina XDR', hzz: 120, mAh: 3200, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto + 48MP periscope', price: 8999 },
    { name: 'iPhone 17 Pro Max', brand: 'Apple', model: 'Pro Max', year: 2025, chip: 'A19 Pro', tela: 'Super Retina XDR', hzz: 120, mAh: 3969, camera: '48MP principal + 12MP ultra-wide + 12MP telephoto + 48MP periscope', price: 9999 },
    { name: 'iPhone 17 Air', brand: 'Apple', model: 'Air', year: 2025, chip: 'A19', tela: 'Super Retina XDR', hzz: 60, mAh: 2800, camera: '48MP principal + 12MP ultra-wide', price: 6499 },
    
    // Samsung
    { name: 'Galaxy S20', brand: 'Samsung', model: 'Base', year: 2020, chip: 'Snapdragon 865', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4000, camera: '64MP principal + 12MP ultra-wide + 12MP telephoto', price: 2299 },
    { name: 'Galaxy S20 Plus', brand: 'Samsung', model: 'Plus', year: 2020, chip: 'Snapdragon 865', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4500, camera: '64MP principal + 12MP ultra-wide + 12MP telephoto', price: 2599 },
    { name: 'Galaxy S20 Ultra', brand: 'Samsung', model: 'Ultra', year: 2020, chip: 'Snapdragon 865', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '108MP principal + 48MP telephoto + 12MP ultra-wide + 0.3MP depth', price: 2999 },
    { name: 'Galaxy S21', brand: 'Samsung', model: 'Base', year: 2021, chip: 'Snapdragon 888', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4000, camera: '64MP principal + 12MP ultra-wide + 12MP telephoto', price: 3299 },
    { name: 'Galaxy S21 Plus', brand: 'Samsung', model: 'Plus', year: 2021, chip: 'Snapdragon 888', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4800, camera: '64MP principal + 12MP ultra-wide + 12MP telephoto', price: 3699 },
    { name: 'Galaxy S21 Ultra', brand: 'Samsung', model: 'Ultra', year: 2021, chip: 'Snapdragon 888', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '108MP principal + 12MP ultra-wide + 10MP telephoto + 10MP periscope', price: 3999 },
    { name: 'Galaxy S22', brand: 'Samsung', model: 'Base', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 3700, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 3999 },
    { name: 'Galaxy S22 Plus', brand: 'Samsung', model: 'Plus', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 4499 },
    { name: 'Galaxy S22 Ultra', brand: 'Samsung', model: 'Ultra', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '108MP principal + 12MP ultra-wide + 10MP telephoto + 10MP periscope', price: 4999 },
    { name: 'Galaxy S23', brand: 'Samsung', model: 'Base', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 3900, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 4499 },
    { name: 'Galaxy S23 Plus', brand: 'Samsung', model: 'Plus', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4700, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 5299 },
    { name: 'Galaxy S23 Ultra', brand: 'Samsung', model: 'Ultra', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '200MP principal + 12MP ultra-wide + 10MP telephoto + 10MP periscope', price: 5999 },
    { name: 'Galaxy S24', brand: 'Samsung', model: 'Base', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4000, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 5499 },
    { name: 'Galaxy S24 Plus', brand: 'Samsung', model: 'Plus', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 6299 },
    { name: 'Galaxy S24 Ultra', brand: 'Samsung', model: 'Ultra', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '200MP principal + 12MP ultra-wide + 10MP telephoto + 50MP periscope', price: 6999 },
    { name: 'Galaxy S25', brand: 'Samsung', model: 'Base', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 4000, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 6499 },
    { name: 'Galaxy S25 Plus', brand: 'Samsung', model: 'Plus', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 7299, image: 'https://images.samsung.com/is/image/samsung/p6pim/br/2501/gallery/br-galaxy-s25-plus-s926-sm-s926bztbzto-thumb-544603026?$PD_GALLERY_L_THUMB$' },
    { name: 'Galaxy S25 Ultra', brand: 'Samsung', model: 'Ultra', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '200MP principal + 12MP ultra-wide + 10MP telephoto + 50MP periscope', price: 7999, image: 'https://images.samsung.com/is/image/samsung/p6pim/br/2501/gallery/br-galaxy-s25-ultra-s928-sm-s928bztbzto-thumb-544603026?$PD_GALLERY_L_THUMB$' },
    
    // Xiaomi
    { name: 'Xiaomi 9', brand: 'Xiaomi', model: 'Base', year: 2019, chip: 'Snapdragon 855', tela: 'AMOLED', hzz: 60, mAh: 3300, camera: '48MP principal + 16MP ultra-wide + 12MP telephoto', price: 1899 },
    { name: 'Xiaomi 10', brand: 'Xiaomi', model: 'Base', year: 2019, chip: 'Snapdragon 865', tela: 'AMOLED', hzz: 90, mAh: 4780, camera: '108MP principal + 13MP ultra-wide + 2MP macro + 2MP depth', price: 2299 },
    { name: 'Xiaomi 11', brand: 'Xiaomi', model: 'Base', year: 2020, chip: 'Snapdragon 888', tela: 'AMOLED', hzz: 120, mAh: 4600, camera: '108MP principal + 13MP ultra-wide + 5MP telemacro', price: 2899 },
    { name: 'Xiaomi 12', brand: 'Xiaomi', model: 'Base', year: 2021, chip: 'Snapdragon 8 Gen 1', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 13MP ultra-wide + 5MP telemacro', price: 3299 },
    { name: 'Xiaomi 13', brand: 'Xiaomi', model: 'Base', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 3799, image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-13/specs-header.png' },
    { name: 'Xiaomi 13 Pro', brand: 'Xiaomi', model: 'Pro', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 4499, image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-13-pro/specs-header.png' },
    { name: 'Xiaomi 14', brand: 'Xiaomi', model: 'Base', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 3999 },
    { name: 'Xiaomi 14 Pro', brand: 'Xiaomi', model: 'Pro', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 4999 },
    { name: 'Xiaomi 15', brand: 'Xiaomi', model: 'Base', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 4499 },
    { name: 'Xiaomi 15 Pro', brand: 'Xiaomi', model: 'Pro', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 5499 },
    { name: 'Xiaomi 16', brand: 'Xiaomi', model: 'Base', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 4999 },
    { name: 'Xiaomi 16 Pro', brand: 'Xiaomi', model: 'Pro', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 5999 },
    { name: 'Xiaomi 17', brand: 'Xiaomi', model: 'Base', year: 2026, chip: 'Snapdragon 8 Gen 5', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 5999 },
    { name: 'Xiaomi 17 Pro', brand: 'Xiaomi', model: 'Pro', year: 2026, chip: 'Snapdragon 8 Gen 5', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 6999 }

   
];

// Variáveis para seleção de celulares para comparação
let selectedPhones = [];

// Função para renderizar os celulares agrupados por marca
function renderPhones(phoneList) {
    const container = document.getElementById('phones-container');
    container.innerHTML = '';

    // Agrupar celulares por marca
    const groupedPhones = phoneList.reduce((groups, phone) => {
        if (!groups[phone.brand]) {
            groups[phone.brand] = [];
        }
        groups[phone.brand].push(phone);
        return groups;
    }, {});

    // Ordem das marcas: Samsung, Apple, Xiaomi
    const brandOrder = ['Samsung', 'Apple', 'Xiaomi'];

    // Renderizar seções por marca na ordem definida
    brandOrder.forEach(brand => {
        if (groupedPhones[brand]) {
            const brandSection = document.createElement('div');
            brandSection.className = 'brand-section';

            const brandTitle = document.createElement('h2');
            brandTitle.textContent = brand;
            brandSection.appendChild(brandTitle);

            const phonesGrid = document.createElement('div');
            phonesGrid.className = 'phones-grid';

            groupedPhones[brand].forEach((phone) => { // Removi o originalIndex pois usaremos o nome
                const card = document.createElement('div');
                card.className = 'phone-card';
                
                // --- COLOQUE ESTA PARTE AQUI (INÍCIO DO FOREACH) ---
                // Verifica se este celular específico está na lista de selecionados
                const isSelected = selectedPhones.includes(phones.findIndex(p => p.name === phone.name));
                
                if (isSelected) {
                    card.classList.add('selected');
                }
                // ---------------------------------------------------

                card.innerHTML = `
                    <div class="phone-name">${phone.name}</div>
                    <div class="phone-details">
                        <p><strong>Modelo:</strong> ${phone.model}</p>
                        <p><strong>Ano:</strong> ${phone.year}</p>
                        <p><strong>Chip:</strong> ${phone.chip || 'N/A'}</p>
                        <p><strong>Tela:</strong> ${phone.tela || 'N/A'}</p>
                        <p><strong>Hz:</strong> ${phone.hzz || 'N/A'}</p>
                        <p><strong>mAh:</strong> ${phone.mAh || 'N/A'}</p>
                        <p><strong>Câmera:</strong> ${phone.camera || 'N/A'}</p>
                        <p><strong>Preço:</strong> R$ ${phone.price ? phone.price.toLocaleString('pt-BR') : 'N/A'}</p>
                    </div>
                    <div class="card-buttons">
                        <button class="select-btn ${isSelected ? 'selected-btn' : ''}" onclick="selectPhone('${phone.name}')">
                            ${isSelected ? 'Desselecionar' : 'Selecionar'}
                        </button>
                    </div>
                `;

                // Adiciona classe de cor por marca
                if (phone.brand === 'Apple') {
                    card.classList.add('apple-card');
                } else if (phone.brand === 'Samsung') {
                    card.classList.add('samsung-card');
                } else if (phone.brand === 'Xiaomi') {
                    card.classList.add('xiaomi-card');
                }
                phonesGrid.appendChild(card);
            });

            brandSection.appendChild(phonesGrid);
            container.appendChild(brandSection);
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = '<p class="no-results">Nenhum celular encontrado.</p>';
    }
}

// Função para selecionar/desselecionar celular
// Função para selecionar/desselecionar celular com substituição automática
function selectPhone(phoneName) {
    // Encontrar o índice real no array 'phones' baseado no nome único
    const realIndex = phones.findIndex(p => p.name === phoneName);
    
    if (selectedPhones.includes(realIndex)) {
        // Se já está selecionado, apenas remove
        selectedPhones = selectedPhones.filter(i => i !== realIndex);
    } else {
        // Se já temos 2 selecionados, removemos o primeiro (o mais antigo)
        if (selectedPhones.length >= 2) {
            selectedPhones.shift(); // Remove o primeiro elemento do array
        }
        // Adiciona o novo celular na última posição
        selectedPhones.push(realIndex);
    }
    
    // Atualiza a visualização
    const filteredPhones = filterPhones();
    renderPhones(filteredPhones);
    updateComparison();
}

// Função para atualizar a seção de comparação
function updateComparison() {
    const comparisonSection = document.getElementById('comparison-section');
    const phone1Div = document.getElementById('phone1');
    const phone2Div = document.getElementById('phone2');

    if (selectedPhones.length === 2) {
        comparisonSection.style.display = 'block';
        const phone1 = phones[selectedPhones[0]];
        const phone2 = phones[selectedPhones[1]];

        phone1Div.innerHTML = `
            <h3>${phone1.name}</h3>
            <p><strong>Marca:</strong> ${phone1.brand}</p>
            <p><strong>Modelo:</strong> ${phone1.model}</p>
            <p><strong>Ano:</strong> ${phone1.year}</p>
            <p><strong>Chip:</strong> ${phone1.chip || 'N/A'}</p>
            <p><strong>Tela:</strong> ${phone1.tela || 'N/A'}</p>
            <p><strong>Hz:</strong> ${phone1.hzz || 'N/A'}</p>
            <p><strong>mAh:</strong> ${phone1.mAh || 'N/A'}</p>
            <p><strong>Câmera:</strong> ${phone1.camera || 'N/A'}</p>
            <p><strong>Preço:</strong> R$ ${phone1.price ? phone1.price.toLocaleString('pt-BR') : 'N/A'}</p>
           
        `;

        phone2Div.innerHTML = `
            <h3>${phone2.name}</h3>
            <p><strong>Marca:</strong> ${phone2.brand}</p>
            <p><strong>Modelo:</strong> ${phone2.model}</p>
            <p><strong>Ano:</strong> ${phone2.year}</p>
            <p><strong>Chip:</strong> ${phone2.chip || 'N/A'}</p>
            <p><strong>Tela:</strong> ${phone2.tela || 'N/A'}</p>
            <p><strong>Hz:</strong> ${phone2.hzz || 'N/A'}</p>
            <p><strong>mAh:</strong> ${phone2.mAh || 'N/A'}</p>
            <p><strong>Câmera:</strong> ${phone2.camera || 'N/A'}</p>
            <p><strong>Preço:</strong> R$ ${phone2.price ? phone2.price.toLocaleString('pt-BR') : 'N/A'}</p>
            
        `;

        // Scroll automático para a seção de comparação
        setTimeout(() => {
            comparisonSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    } else {
        comparisonSection.style.display = 'none';
    }
}

// Estado dos filtros atuais
let currentFilters = {
    search: '',
    brands: [],
    models: [],
    minPrice: '',
    maxPrice: '',
    battery: '',
    refreshRates: [],
    year: '',
    sortBy: 'name'
};

// Mapeamento de modelos disponíveis por marca
const brandModels = {
    'Apple': ['Base', 'Mini', 'Plus', 'Pro', 'Pro Max', 'Air'],
    'Samsung': ['Base', 'Plus', 'Ultra'],
    'Xiaomi': ['Base', 'Pro']
};

// Função para atualizar modelos disponíveis baseado nas marcas selecionadas
function updateAvailableModels() {
    const selectedBrands = [];
    ['brand-apple', 'brand-samsung', 'brand-xiaomi'].forEach(id => {
        if (document.getElementById(id).checked) {
            selectedBrands.push(document.getElementById(id).value);
        }
    });

    // Se nenhuma marca estiver selecionada, mostrar todos os modelos
    if (selectedBrands.length === 0) {
        ['model-base', 'model-plus', 'model-pro', 'model-ultra', 'model-mini', 'model-air'].forEach(id => {
            const checkbox = document.getElementById(id);
            const label = checkbox.parentElement;
            checkbox.disabled = false;
            label.style.opacity = '1';
            label.style.pointerEvents = 'auto';
        });
        return;
    }

    // Coletar todos os modelos disponíveis para as marcas selecionadas
    const availableModels = new Set();
    selectedBrands.forEach(brand => {
        if (brandModels[brand]) {
            brandModels[brand].forEach(model => availableModels.add(model));
        }
    });

    // Atualizar estado dos checkboxes de modelo
    const modelMappings = {
        'model-base': 'Base',
        'model-plus': 'Plus',
        'model-pro': 'Pro',
        'model-ultra': 'Ultra',
        'model-mini': 'Mini',
        'model-air': 'Air'
    };

    Object.keys(modelMappings).forEach(id => {
        const checkbox = document.getElementById(id);
        const label = checkbox.parentElement;
        const modelName = modelMappings[id];

        if (availableModels.has(modelName)) {
            checkbox.disabled = false;
            label.style.opacity = '1';
            label.style.pointerEvents = 'auto';
        } else {
            checkbox.disabled = true;
            checkbox.checked = false; // Desmarcar se estava marcado
            label.style.opacity = '0.4';
            label.style.pointerEvents = 'none';
        }
    });
}

// Função para filtrar celulares com múltiplos critérios
function filterPhones() {
    let filtered = [...phones];

    // Filtro de busca por texto
    if (currentFilters.search) {
        const lowerQuery = currentFilters.search.toLowerCase();
        filtered = filtered.filter(phone =>
            phone.name.toLowerCase().includes(lowerQuery) ||
            phone.brand.toLowerCase().includes(lowerQuery) ||
            phone.model.toLowerCase().includes(lowerQuery) ||
            (phone.chip && phone.chip.toLowerCase().includes(lowerQuery))
        );
    }

    // Filtro por marcas
    if (currentFilters.brands.length > 0) {
        filtered = filtered.filter(phone => currentFilters.brands.includes(phone.brand));
    }

    // Filtro por modelos
    if (currentFilters.models.length > 0) {
        filtered = filtered.filter(phone => currentFilters.models.includes(phone.model));
    }

    // Filtro por preço mínimo
    if (currentFilters.minPrice) {
        filtered = filtered.filter(phone => phone.price >= parseInt(currentFilters.minPrice));
    }

    // Filtro por preço máximo
    if (currentFilters.maxPrice) {
        filtered = filtered.filter(phone => phone.price <= parseInt(currentFilters.maxPrice));
    }

    // Filtro por bateria
    if (currentFilters.battery) {
        filtered = filtered.filter(phone => phone.mAh >= parseInt(currentFilters.battery));
    }

    // Filtro por taxa de refresh
    if (currentFilters.refreshRates.length > 0) {
        filtered = filtered.filter(phone => {
            if (!phone.hzz) return false;
            return currentFilters.refreshRates.some(rate => {
                const rateNum = parseInt(rate);
                if (rate === '120') {
                    return phone.hzz >= 120;
                }
                return phone.hzz === rateNum;
            });
        });
    }

    // Filtro por ano
    if (currentFilters.year) {
        filtered = filtered.filter(phone => phone.year >= parseInt(currentFilters.year));
    }

    // Ordenação
    filtered = sortPhones(filtered, currentFilters.sortBy);

    return filtered;
}

// Função para ordenar celulares
function sortPhones(phoneList, sortBy) {
    return [...phoneList].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-asc':
                return (a.price || 0) - (b.price || 0);
            case 'price-desc':
                return (b.price || 0) - (a.price || 0);
            case 'year-desc':
                return b.year - a.year;
            case 'battery-desc':
                return (b.mAh || 0) - (a.mAh || 0);
            case 'camera-desc':
                // Ordenação simples por resolução da câmera principal
                const getCameraMP = (camera) => {
                    if (!camera) return 0;
                    const match = camera.match(/(\d+)MP/);
                    return match ? parseInt(match[1]) : 0;
                };
                return getCameraMP(b.camera) - getCameraMP(a.camera);
            default:
                return 0;
        }
    });
}

// Função para aplicar filtros
function applyFilters() {
    // Atualizar modelos disponíveis baseado nas marcas selecionadas
    updateAvailableModels();

    // Coletar valores dos filtros
    currentFilters.search = document.getElementById('search-input').value;

    // Marcas
    currentFilters.brands = [];
    ['brand-apple', 'brand-samsung', 'brand-xiaomi'].forEach(id => {
        if (document.getElementById(id).checked) {
            currentFilters.brands.push(document.getElementById(id).value);
        }
    });

    // Modelos (só incluir os que não estão desabilitados)
    currentFilters.models = [];
    ['model-base', 'model-plus', 'model-pro', 'model-ultra', 'model-mini', 'model-air'].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox.checked && !checkbox.disabled) {
            currentFilters.models.push(document.getElementById(id).value);
        }
    });

    // Preços
    currentFilters.minPrice = document.getElementById('min-price').value;
    currentFilters.maxPrice = document.getElementById('max-price').value;

    // Bateria
    currentFilters.battery = document.getElementById('battery-filter').value;

    // Taxa de refresh
    currentFilters.refreshRates = [];
    ['refresh-60', 'refresh-90', 'refresh-120'].forEach(id => {
        if (document.getElementById(id).checked) {
            currentFilters.refreshRates.push(document.getElementById(id).value);
        }
    });

    // Ano
    currentFilters.year = document.getElementById('year-filter').value;

    // Ordenação
    currentFilters.sortBy = document.getElementById('sort-filter').value;

    // Aplicar filtros e renderizar
    const filteredPhones = filterPhones();
    renderPhones(filteredPhones);

    // Atualizar contador
    updateResultsCount(filteredPhones.length);

    // Salvar filtros no localStorage
    saveFiltersToStorage();
}

// Função para limpar filtros
function clearFilters() {
    // Limpar campos de entrada
    document.getElementById('search-input').value = '';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';

    // Limpar selects
    document.getElementById('battery-filter').value = '';
    document.getElementById('year-filter').value = 'name';
    document.getElementById('sort-filter').value = 'name';

    // Limpar checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Reabilitar todos os modelos
    updateAvailableModels();

    // Resetar estado dos filtros
    currentFilters = {
        search: '',
        brands: [],
        models: [],
        minPrice: '',
        maxPrice: '',
        battery: '',
        refreshRates: [],
        year: '',
        sortBy: 'name'
    };

    // Renderizar todos os celulares
    renderPhones(phones);
    updateResultsCount(phones.length);

    // Limpar localStorage
    localStorage.removeItem('phoneFilters');
}

// Função para atualizar contador de resultados
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    counter.textContent = `${count} celular${count !== 1 ? 'es' : ''} encontrado${count !== 1 ? 's' : ''}`;
}

// Função para salvar filtros no localStorage
function saveFiltersToStorage() {
    localStorage.setItem('phoneFilters', JSON.stringify(currentFilters));
}

// Função para carregar filtros do localStorage
function loadFiltersFromStorage() {
    const saved = localStorage.getItem('phoneFilters');
    if (saved) {
        currentFilters = JSON.parse(saved);

        // Aplicar valores salvos nos campos
        document.getElementById('search-input').value = currentFilters.search || '';
        document.getElementById('min-price').value = currentFilters.minPrice || '';
        document.getElementById('max-price').value = currentFilters.maxPrice || '';
        document.getElementById('battery-filter').value = currentFilters.battery || '';
        document.getElementById('year-filter').value = currentFilters.year || '';
        document.getElementById('sort-filter').value = currentFilters.sortBy || 'name';

        // Aplicar checkboxes de marcas
        currentFilters.brands.forEach(brand => {
            const checkbox = document.getElementById(`brand-${brand.toLowerCase()}`);
            if (checkbox) checkbox.checked = true;
        });

        // Aplicar checkboxes de modelos
        currentFilters.models.forEach(model => {
            const checkbox = document.getElementById(`model-${model.toLowerCase()}`);
            if (checkbox) checkbox.checked = true;
        });

        // Aplicar checkboxes de refresh rate
        currentFilters.refreshRates.forEach(rate => {
            const checkbox = document.getElementById(`refresh-${rate}`);
            if (checkbox) checkbox.checked = true;
        });
    }
}

// Função para toggle dos filtros
function toggleFilters() {
    const content = document.getElementById('filters-content');
    const button = document.getElementById('toggle-filters');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'Ocultar Filtros';
    } else {
        content.style.display = 'none';
        button.textContent = 'Mostrar Filtros';
    }
}

// Função para rolar suavemente até uma marca específica
function scrollToBrand(brandName) {
    // Encontrar a seção da marca no DOM
    const brandSections = document.querySelectorAll('.brand-section h2');
    for (let section of brandSections) {
        if (section.textContent.toLowerCase().includes(brandName.toLowerCase())) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            break;
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Carregar filtros salvos
    loadFiltersFromStorage();

    // Aplicar filtros iniciais
    applyFilters();

    // Event listener para o campo de pesquisa (com debounce)
    let searchTimeout;
    document.getElementById('search-input').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(applyFilters, 300);
    });

    // Event listeners para checkboxes de marca (atualizar modelos disponíveis)
    ['brand-apple', 'brand-samsung', 'brand-xiaomi'].forEach(id => {
        document.getElementById(id).addEventListener('change', function() {
            updateAvailableModels();
            // Pequeno delay para permitir que a UI seja atualizada antes de aplicar filtros
            setTimeout(applyFilters, 50);
        });
    });

    // Event listeners para botões
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
    document.getElementById('toggle-filters').addEventListener('click', toggleFilters);

    // Event listeners para mudanças em selects (aplicar automaticamente)
    document.getElementById('battery-filter').addEventListener('change', applyFilters);
    document.getElementById('year-filter').addEventListener('change', applyFilters);
    document.getElementById('sort-filter').addEventListener('change', applyFilters);

    // Event listeners para checkboxes (exceto marcas que têm tratamento especial)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:not([id^="brand-"])');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Event listeners para campos de preço (com debounce)
    let priceTimeout;
    ['min-price', 'max-price'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            clearTimeout(priceTimeout);
            priceTimeout = setTimeout(applyFilters, 500);
        });
    });

    // Event listener para o botão de análise
   // Event listener para o botão de análise
    document.getElementById('go-to-analysis').addEventListener('click', function() {
    if (selectedPhones.length === 2) {
        // Criamos um array com os dados completos dos dois celulares selecionados
        const phonesToAnalyze = selectedPhones.map(index => phones[index]);
        
        // Salvamos no localStorage como uma string JSON
        localStorage.setItem('selectedPhonesForAnalysis', JSON.stringify(phonesToAnalyze));
        
        // Redireciona para a página de análise
        window.location.href = '../analise/analise.html'; 
    } else {
        alert("Por favor, selecione 2 celulares para comparar.");
    }
});
});

// Renderizar todos os celulares ao carregar a página
renderPhones(phones);

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
     navMenu.classList.toggle('active');
});




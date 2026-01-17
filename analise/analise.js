// DADOS (Mesma lista do script original para referência)
const phonesData = [
     // Apple
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
     { name: 'Galaxy S25 Plus', brand: 'Samsung', model: 'Plus', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 7299 },
     { name: 'Galaxy S25 Ultra', brand: 'Samsung', model: 'Ultra', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'Dynamic AMOLED 2X', hzz: 120, mAh: 5000, camera: '200MP principal + 12MP ultra-wide + 10MP telephoto + 50MP periscope', price: 7999 },
     
     // Xiaomi
     { name: 'Xiaomi 9', brand: 'Xiaomi', model: 'Base', year: 2019, chip: 'Snapdragon 855', tela: 'AMOLED', hzz: 60, mAh: 3300, camera: '48MP principal + 16MP ultra-wide + 12MP telephoto', price: 1899 },
     { name: 'Xiaomi 10', brand: 'Xiaomi', model: 'Base', year: 2019, chip: 'Snapdragon 865', tela: 'AMOLED', hzz: 90, mAh: 4780, camera: '108MP principal + 13MP ultra-wide + 2MP macro + 2MP depth', price: 2299 },
     { name: 'Xiaomi 11', brand: 'Xiaomi', model: 'Base', year: 2020, chip: 'Snapdragon 888', tela: 'AMOLED', hzz: 120, mAh: 4600, camera: '108MP principal + 13MP ultra-wide + 5MP telemacro', price: 2899 },
     { name: 'Xiaomi 12', brand: 'Xiaomi', model: 'Base', year: 2021, chip: 'Snapdragon 8 Gen 1', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 13MP ultra-wide + 5MP telemacro', price: 3299 },
     { name: 'Xiaomi 13', brand: 'Xiaomi', model: 'Base', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 3799 },
     { name: 'Xiaomi 13 Pro', brand: 'Xiaomi', model: 'Pro', year: 2022, chip: 'Snapdragon 8 Gen 1', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 4499 },
     { name: 'Xiaomi 14', brand: 'Xiaomi', model: 'Base', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 3999 },
     { name: 'Xiaomi 14 Pro', brand: 'Xiaomi', model: 'Pro', year: 2023, chip: 'Snapdragon 8 Gen 2', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 4999 },
     { name: 'Xiaomi 15', brand: 'Xiaomi', model: 'Base', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 4499 },
     { name: 'Xiaomi 15 Pro', brand: 'Xiaomi', model: 'Pro', year: 2024, chip: 'Snapdragon 8 Gen 3', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 5499 },
     { name: 'Xiaomi 16', brand: 'Xiaomi', model: 'Base', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 4999 },
     { name: 'Xiaomi 16 Pro', brand: 'Xiaomi', model: 'Pro', year: 2025, chip: 'Snapdragon 8 Gen 4', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 5999 },
     { name: 'Xiaomi 17', brand: 'Xiaomi', model: 'Base', year: 2026, chip: 'Snapdragon 8 Gen 5', tela: 'AMOLED', hzz: 120, mAh: 4500, camera: '50MP principal + 12MP ultra-wide + 10MP telephoto', price: 5999 },
     { name: 'Xiaomi 17 Pro', brand: 'Xiaomi', model: 'Pro', year: 2026, chip: 'Snapdragon 8 Gen 5', tela: 'AMOLED', hzz: 120, mAh: 5000, camera: '50MP principal + 50MP ultra-wide + 50MP telephoto', price: 6999 }
];

document.addEventListener('DOMContentLoaded', function() {
    const selectedPhones = JSON.parse(localStorage.getItem('selectedPhonesForAnalysis'));

    if (!selectedPhones || selectedPhones.length !== 2) {
        window.location.href = '../index.html';
        return;
    }

    const [p1, p2] = selectedPhones;

    // Preenchimento básico
    document.getElementById('name-1').innerText = p1.name;
    document.getElementById('name-2').innerText = p2.name;

    function calcularAnaliseReal(cel1, cel2) {
        // Criamos categorias com PESOS (Ex: Processador e Câmera valem mais que Bateria)
        let t1 = 0; // Pontos Técnicos Celular 1
        let t2 = 0; // Pontos Técnicos Celular 2

        // 1. Poder do Ano (Celular mais novo é MUITO melhor) - Peso 4
        if (cel1.year > cel2.year) t1 += 4; 
        else if (cel2.year > cel1.year) t2 += 4;

        // 2. Performance de Tela (Hz) - Peso 2
        if (parseInt(cel1.hzz) > parseInt(cel2.hzz)) t1 += 2;
        else if (parseInt(cel2.hzz) > parseInt(cel1.hzz)) t2 += 2;

        // 3. Bateria (mAh) - Peso 1
        if (parseInt(cel1.mAh) > parseInt(cel2.mAh)) t1 += 1;
        else if (parseInt(cel2.mAh) > parseInt(cel1.mAh)) t2 += 1;

        // 4. Câmera (Estimativa por texto - simplificado) - Peso 3
        // Se a string da câmera for maior, geralmente tem mais sensores/recursos
        if (cel1.camera.length > cel2.camera.length) t1 += 3;
        else if (cel2.camera.length > cel1.camera.length) t2 += 3;

        // --- CÁLCULO DAS NOTAS (0 a 10) ---
        // O total de pontos possíveis acima é 10 (4+2+1+3)
        let notaTecnica1 = t1;
        let notaTecnica2 = t2;

        // BÔNUS DE PREÇO (Custo-benefício)
        // Se o celular é melhor tecnicamente E mais barato, a nota sobe.
        // Se o celular é muito antigo (como o S20), ele não pode ganhar do S25.
        const preco1 = cel1.price;
        const preco2 = cel2.price;

        // Mostra as notas baseadas puramente na técnica primeiro
        document.getElementById('score-1').innerText = notaTecnica1.toFixed(1);
        document.getElementById('score-2').innerText = notaTecnica2.toFixed(1);

        // Veredito
        const recText = document.getElementById('recommendation-text');
        if (notaTecnica1 > notaTecnica2) {
            document.getElementById('medal-1').style.display = 'block';
            recText.innerHTML = `O <strong>${cel1.name}</strong> é superior. Embora o outro seja mais barato, o ${cel1.name} oferece tecnologia muito mais atual (${cel1.year}).`;
        } else {
            document.getElementById('medal-2').style.display = 'block';
            recText.innerHTML = `O <strong>${cel2.name}</strong> vence o duelo. Ele supera o concorrente em hardware e longevidade de software.`;
        }
    }

    calcularAnaliseReal(p1, p2);
});

const menuHamburguer = document.getElementById('menu-hamburguer');
const navMenu = document.getElementById('nav-menu')

menuHamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    });

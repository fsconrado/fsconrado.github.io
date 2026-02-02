// Application State
const state = {
    mode: null,
    cart: [],
    user: null,
    products: [],
    selectedCategory: 'TODOS',
    selectedUnit: null,
    allProducts: []
};

// Product Database with Categories
const productsDatabase = {
    varejo: [
        // AÇAÍ
        {
            id: 1,
            name: 'Açaí Premium 500g',
            description: 'Açaí puro e cremoso, direto da Amazônia',
            price: 24.90,
            emoji: '🫐',
            category: 'AÇAÍ',
            featured: true,
            isNew: false
        },
        {
            id: 2,
            name: 'Açaí com Guaraná 500g',
            description: 'Energia extra com guaraná natural',
            price: 28.90,
            emoji: '⚡',
            category: 'AÇAÍ',
            featured: false,
            isNew: true
        },
        {
            id: 3,
            name: 'Açaí Orgânico 500g',
            description: 'Certificado orgânico, 100% natural',
            price: 32.90,
            emoji: '🌿',
            category: 'AÇAÍ',
            featured: true,
            isNew: false
        },
        {
            id: 4,
            name: 'Bowl de Açaí Completo',
            description: 'Açaí + granola + frutas + mel',
            price: 18.90,
            emoji: '🥣',
            category: 'AÇAÍ',
            featured: false,
            isNew: false
        },
        // SORVETES
        {
            id: 5,
            name: 'Sorvete de Açaí 1L',
            description: 'Cremoso e delicioso',
            price: 35.90,
            emoji: '🍦',
            category: 'SORVETES',
            featured: true,
            isNew: false
        },
        {
            id: 6,
            name: 'Sorvete de Morango 1L',
            description: 'Sabor intenso de morango',
            price: 32.90,
            emoji: '🍓',
            category: 'SORVETES',
            featured: false,
            isNew: false
        },
        {
            id: 7,
            name: 'Sorvete de Chocolate 1L',
            description: 'Chocolate belga premium',
            price: 34.90,
            emoji: '🍫',
            category: 'SORVETES',
            featured: false,
            isNew: false
        },
        {
            id: 8,
            name: 'Sorvete Napolitano 2L',
            description: 'Três sabores em um',
            price: 45.90,
            emoji: '🍨',
            category: 'SORVETES',
            featured: false,
            isNew: true
        },
        // CREMES
        {
            id: 9,
            name: 'Creme de Avelã 500g',
            description: 'Cremoso e irresistível',
            price: 22.90,
            emoji: '🥜',
            category: 'CREMES',
            featured: false,
            isNew: false
        },
        {
            id: 10,
            name: 'Creme de Amendoim 500g',
            description: 'Rico em proteínas',
            price: 19.90,
            emoji: '🥜',
            category: 'CREMES',
            featured: true,
            isNew: false
        },
        {
            id: 11,
            name: 'Creme de Chocolate 500g',
            description: 'Puro chocolate belga',
            price: 24.90,
            emoji: '🍫',
            category: 'CREMES',
            featured: false,
            isNew: false
        },
        // CEREAIS
        {
            id: 12,
            name: 'Granola Tradicional 1kg',
            description: 'Crocante e nutritiva',
            price: 18.90,
            emoji: '🌾',
            category: 'CEREAIS',
            featured: true,
            isNew: false
        },
        {
            id: 13,
            name: 'Granola Light 500g',
            description: 'Menos calorias, mesmo sabor',
            price: 15.90,
            emoji: '🌾',
            category: 'CEREAIS',
            featured: false,
            isNew: false
        },
        {
            id: 14,
            name: 'Aveia em Flocos 500g',
            description: 'Rica em fibras',
            price: 12.90,
            emoji: '🌾',
            category: 'CEREAIS',
            featured: false,
            isNew: false
        },
        {
            id: 15,
            name: 'Mix de Cereais 1kg',
            description: 'Blend especial de grãos',
            price: 21.90,
            emoji: '🌾',
            category: 'CEREAIS',
            featured: false,
            isNew: true
        },
        // RECHEIOS/COBERTURAS
        {
            id: 16,
            name: 'Calda de Chocolate 500ml',
            description: 'Cobertura cremosa',
            price: 16.90,
            emoji: '🍫',
            category: 'RECHEIOS/COBERTURAS',
            featured: false,
            isNew: false
        },
        {
            id: 17,
            name: 'Calda de Morango 500ml',
            description: 'Sabor natural de morango',
            price: 15.90,
            emoji: '🍓',
            category: 'RECHEIOS/COBERTURAS',
            featured: false,
            isNew: false
        },
        {
            id: 18,
            name: 'Leite Condensado 395g',
            description: 'Tradicional e cremoso',
            price: 8.90,
            emoji: '🥛',
            category: 'RECHEIOS/COBERTURAS',
            featured: true,
            isNew: false
        },
        {
            id: 19,
            name: 'Doce de Leite 400g',
            description: 'Artesanal e delicioso',
            price: 14.90,
            emoji: '🍯',
            category: 'RECHEIOS/COBERTURAS',
            featured: false,
            isNew: false
        },
        // POLPAS
        {
            id: 20,
            name: 'Polpa de Morango 1kg',
            description: '100% natural, sem conservantes',
            price: 19.90,
            emoji: '🍓',
            category: 'POLPAS',
            featured: false,
            isNew: false
        },
        {
            id: 21,
            name: 'Polpa de Manga 1kg',
            description: 'Sabor tropical intenso',
            price: 18.90,
            emoji: '🥭',
            category: 'POLPAS',
            featured: false,
            isNew: false
        },
        {
            id: 22,
            name: 'Polpa de Maracujá 1kg',
            description: 'Azedinho na medida certa',
            price: 21.90,
            emoji: '🍊',
            category: 'POLPAS',
            featured: true,
            isNew: false
        },
        {
            id: 23,
            name: 'Polpa Mista 1kg',
            description: 'Mix de frutas tropicais',
            price: 20.90,
            emoji: '🍹',
            category: 'POLPAS',
            featured: false,
            isNew: true
        },
        // DIVERSOS
        {
            id: 24,
            name: 'Copinhos Descartáveis 100un',
            description: 'Resistentes e práticos',
            price: 12.90,
            emoji: '🥤',
            category: 'DIVERSOS',
            featured: false,
            isNew: false
        },
        {
            id: 25,
            name: 'Colheres Descartáveis 100un',
            description: 'Biodegradáveis',
            price: 9.90,
            emoji: '🥄',
            category: 'DIVERSOS',
            featured: false,
            isNew: false
        },
        {
            id: 26,
            name: 'Guardanapos 100un',
            description: 'Folha dupla, alta absorção',
            price: 7.90,
            emoji: '📄',
            category: 'DIVERSOS',
            featured: false,
            isNew: false
        },
        {
            id: 27,
            name: 'Embalagens Delivery 50un',
            description: 'Térmicas e resistentes',
            price: 24.90,
            emoji: '📦',
            category: 'DIVERSOS',
            featured: false,
            isNew: false
        }
    ],
    atacado: [
        // AÇAÍ
        {
            id: 101,
            name: 'Açaí Premium 10kg',
            description: 'Caixa com 10kg de açaí puro',
            price: 189.90,
            emoji: '📦',
            category: 'AÇAÍ',
            featured: true,
            isNew: false
        },
        {
            id: 102,
            name: 'Açaí Premium 20kg',
            description: 'Caixa com 20kg - melhor custo-benefício',
            price: 349.90,
            emoji: '📦',
            category: 'AÇAÍ',
            featured: true,
            isNew: false
        },
        {
            id: 103,
            name: 'Polpa de Açaí 100kg',
            description: 'Tambor de 100kg para produção',
            price: 1599.90,
            emoji: '🛢️',
            category: 'AÇAÍ',
            featured: false,
            isNew: false
        },
        {
            id: 104,
            name: 'Mix Açaí com Guaraná 50kg',
            description: 'Blend especial para revenda',
            price: 899.90,
            emoji: '⚡',
            category: 'AÇAÍ',
            featured: false,
            isNew: true
        },
        {
            id: 105,
            name: 'Açaí Orgânico 25kg',
            description: 'Certificado orgânico em grande quantidade',
            price: 649.90,
            emoji: '🌿',
            category: 'AÇAÍ',
            featured: true,
            isNew: false
        },
        // SORVETES
        {
            id: 106,
            name: 'Sorvete de Açaí 10L',
            description: 'Balde de 10 litros',
            price: 289.90,
            emoji: '🍦',
            category: 'SORVETES',
            featured: false,
            isNew: false
        },
        {
            id: 107,
            name: 'Sorvete Napolitano 20L',
            description: 'Para alta demanda',
            price: 379.90,
            emoji: '🍨',
            category: 'SORVETES',
            featured: false,
            isNew: false
        },
        {
            id: 108,
            name: 'Mix Sorvetes 50L',
            description: 'Variedade de sabores',
            price: 899.90,
            emoji: '🍦',
            category: 'SORVETES',
            featured: false,
            isNew: true
        },
        // CREMES
        {
            id: 109,
            name: 'Creme de Avelã 5kg',
            description: 'Balde de 5kg',
            price: 189.90,
            emoji: '🥜',
            category: 'CREMES',
            featured: false,
            isNew: false
        },
        {
            id: 110,
            name: 'Creme de Amendoim 10kg',
            description: 'Econômico para produção',
            price: 299.90,
            emoji: '🥜',
            category: 'CREMES',
            featured: true,
            isNew: false
        },
        // CEREAIS
        {
            id: 111,
            name: 'Granola Tradicional 25kg',
            description: 'Saco de 25kg',
            price: 389.90,
            emoji: '🌾',
            category: 'CEREAIS',
            featured: true,
            isNew: false
        },
        {
            id: 112,
            name: 'Mix de Cereais 50kg',
            description: 'Para alta produção',
            price: 749.90,
            emoji: '🌾',
            category: 'CEREAIS',
            featured: false,
            isNew: false
        },
        // RECHEIOS/COBERTURAS
        {
            id: 113,
            name: 'Calda de Chocolate 5L',
            description: 'Galão de 5 litros',
            price: 129.90,
            emoji: '🍫',
            category: 'RECHEIOS/COBERTURAS',
            featured: false,
            isNew: false
        },
        {
            id: 114,
            name: 'Leite Condensado 5kg',
            description: 'Lata de 5kg',
            price: 89.90,
            emoji: '🥛',
            category: 'RECHEIOS/COBERTURAS',
            featured: true,
            isNew: false
        },
        // POLPAS
        {
            id: 115,
            name: 'Polpa de Morango 10kg',
            description: 'Caixa com 10kg',
            price: 159.90,
            emoji: '🍓',
            category: 'POLPAS',
            featured: false,
            isNew: false
        },
        {
            id: 116,
            name: 'Mix de Polpas 50kg',
            description: 'Variedade de frutas',
            price: 699.90,
            emoji: '🍹',
            category: 'POLPAS',
            featured: false,
            isNew: true
        },
        // DIVERSOS
        {
            id: 117,
            name: 'Copinhos Descartáveis 1000un',
            description: 'Caixa com 1000 unidades',
            price: 99.90,
            emoji: '🥤',
            category: 'DIVERSOS',
            featured: false,
            isNew: false
        },
        {
            id: 118,
            name: 'Kit Completo Açaiteria',
            description: 'Tudo para montar sua açaiteria',
            price: 2499.90,
            emoji: '🏪',
            category: 'DIVERSOS',
            featured: true,
            isNew: false
        },
        {
            id: 119,
            name: 'Embalagens Delivery 500un',
            description: 'Caixa com 500 unidades',
            price: 189.90,
            emoji: '📦',
            category: 'DIVERSOS',
            featured: false,
            isNew: false
        }
    ]
};

// Categories list
const categories = [
    'TODOS',
    'AÇAÍ',
    'SORVETES',
    'CREMES',
    'CEREAIS',
    'RECHEIOS/COBERTURAS',
    'POLPAS',
    'DIVERSOS'
];

// Units/Locations
const units = [
    { id: 1, name: 'Maceió - AL', city: 'Maceió' },
    { id: 2, name: 'Recife - PE', city: 'Recife' },
    { id: 3, name: 'Salvador - BA', city: 'Salvador' },
    { id: 4, name: 'Fortaleza - CE', city: 'Fortaleza' },
    { id: 5, name: 'São Paulo - SP', city: 'São Paulo' }
];

// Health Tips
const healthTips = [
    {
        icon: '💪',
        title: 'Rico em Antioxidantes',
        content: 'O açaí é uma das frutas com maior concentração de antioxidantes, ajudando a combater radicais livres e o envelhecimento precoce.'
    },
    {
        icon: '❤️',
        title: 'Saúde Cardiovascular',
        content: 'Estudos mostram que o consumo regular de açaí pode ajudar a reduzir o colesterol ruim e melhorar a saúde do coração.'
    },
    {
        icon: '⚡',
        title: 'Energia Natural',
        content: 'Rico em carboidratos saudáveis e gorduras boas, o açaí fornece energia duradoura para suas atividades diárias.'
    },
    {
        icon: '🧠',
        title: 'Função Cognitiva',
        content: 'Os compostos bioativos do açaí podem melhorar a memória e a função cerebral, além de proteger contra doenças neurodegenerativas.'
    },
    {
        icon: '🏋️',
        title: 'Recuperação Muscular',
        content: 'Ideal para atletas, o açaí auxilia na recuperação muscular pós-treino devido ao seu alto teor de proteínas e nutrientes.'
    },
    {
        icon: '🌿',
        title: 'Sustentabilidade',
        content: 'A produção de açaí sustentável ajuda a preservar a floresta amazônica e gera renda para comunidades locais.'
    }
];

// Show Random Health Tip
function showRandomHealthTip() {
    const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
    const tipCard = document.getElementById('healthTipCard');

    if (tipCard) {
        document.querySelector('.tip-icon').textContent = randomTip.icon;
        document.getElementById('tipTitle').textContent = randomTip.title;
        document.getElementById('tipContent').textContent = randomTip.content;
    }
}

// Utility Functions
function formatPrice(price) {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Unit Selection
function selectUnit(unitId) {
    const unit = units.find(u => u.id === unitId);
    if (unit) {
        state.selectedUnit = unit;

        // Update both displays
        const headerDisplay = document.getElementById('selectedUnitNameHeader');
        if (headerDisplay) {
            headerDisplay.textContent = unit.name;
        }

        // Close modal if open
        const modal = document.getElementById('unitSelectorModal');
        if (modal && modal.classList.contains('active')) {
            toggleUnitSelector();
        }

        // If not in shop screen yet, go to mode selection
        if (!state.mode) {
            showScreen('modeSelection');
        }

        // Update units list to show selected
        renderUnitsList();
    }
}

// Toggle Unit Selector Modal
function toggleUnitSelector() {
    const modal = document.getElementById('unitSelectorModal');
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            renderUnitsList();
        }
    }
}

// Render Units List in Modal
function renderUnitsList() {
    const container = document.getElementById('unitsList');
    if (!container) return;

    container.innerHTML = units.map(unit => `
        <div class="unit-list-item ${state.selectedUnit?.id === unit.id ? 'selected' : ''}" 
             onclick="selectUnit(${unit.id})">
            <div class="unit-list-icon">📍</div>
            <div class="unit-list-info">
                <h4>${unit.name}</h4>
                <p>${unit.city}</p>
            </div>
        </div>
    `).join('');
}

// Mode Selection
function selectMode(mode) {
    state.mode = mode;
    state.allProducts = productsDatabase[mode];
    state.selectedCategory = 'TODOS';
    state.products = state.allProducts;

    document.getElementById('currentMode').textContent =
        mode === 'varejo' ? '🛒 Modo Varejo' : '📦 Modo Atacado';

    renderCategories();
    renderProducts();
    showRandomHealthTip(); // Show random health tip
    showScreen('shopScreen');
}

// Category Filtering
function filterByCategory(category) {
    state.selectedCategory = category;

    if (category === 'TODOS') {
        state.products = state.allProducts;
    } else {
        state.products = state.allProducts.filter(p => p.category === category);
    }

    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`)?.classList.add('active');

    renderProducts();
}

// Render Categories
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    container.innerHTML = categories.map(cat => `
        <button class="category-btn ${cat === state.selectedCategory ? 'active' : ''}" 
                data-category="${cat}"
                onclick="filterByCategory('${cat}')">
            ${cat}
        </button>
    `).join('');
}

function goToModeSelection() {
    state.cart = [];
    state.mode = null;
    updateCartUI();
    showScreen('modeSelection');
}

// Product Rendering
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (state.products.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: var(--spacing-xl); color: var(--text-secondary);">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-md);">📦</div>
                <p>Nenhum produto encontrado nesta categoria</p>
            </div>
        `;
        return;
    }

    state.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        let badges = '';
        if (product.isNew) {
            badges += '<span class="product-badge new-badge">NOVO</span>';
        }
        if (product.featured) {
            badges += '<span class="product-badge featured-badge">DESTAQUE</span>';
        }

        card.innerHTML = `
            ${badges}
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-category-tag">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Adicionar
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Cart Management
function addToCart(productId) {
    const product = state.allProducts.find(p => p.id === productId);
    const existingItem = state.cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();

    // Show cart briefly
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.add('open');
}

function updateQuantity(productId, delta) {
    const item = state.cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    totalPrice.textContent = formatPrice(total);

    if (state.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('open');
}

// Checkout Flow
function proceedToCheckout() {
    if (state.cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    toggleCart();

    // Check if user is logged in
    if (!state.user) {
        showScreen('loginScreen');
    } else {
        showCheckout();
    }
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Simulate login
    state.user = {
        name: email.split('@')[0],
        email: email
    };

    showCheckout();
}

function quickRegister() {
    // Simulate quick registration
    state.user = {
        name: 'Usuário Demo',
        email: 'demo@acaishop.com'
    };

    showCheckout();
}

function showCheckout() {
    const summaryItems = document.getElementById('summaryItems');
    const summaryTotal = document.getElementById('summaryTotal');

    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    summaryItems.innerHTML = state.cart.map(item => `
        <div class="summary-item">
            <span>${item.name} x${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    summaryTotal.textContent = formatPrice(total);

    showScreen('checkoutScreen');
}

// Payment Methods
function selectPayment(method) {
    const container = document.getElementById('paymentContainer');

    switch (method) {
        case 'credit':
            container.innerHTML = `
                <div class="payment-form">
                    <h2>💳 Pagamento com Cartão</h2>
                    <form onsubmit="processPayment(event, 'credit')">
                        <div class="form-group">
                            <label>Número do Cartão</label>
                            <input type="text" placeholder="0000 0000 0000 0000" maxlength="19" required>
                        </div>
                        <div class="form-group">
                            <label>Nome no Cartão</label>
                            <input type="text" placeholder="NOME COMPLETO" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label>Validade</label>
                                <input type="text" placeholder="MM/AA" maxlength="5" required>
                            </div>
                            <div class="form-group">
                                <label>CVV</label>
                                <input type="text" placeholder="000" maxlength="3" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Parcelas</label>
                            <select style="background: var(--dark); border: 1px solid var(--border); color: var(--text); padding: var(--spacing-md); border-radius: var(--radius-md); font-size: 1rem;">
                                <option>1x sem juros</option>
                                <option>2x sem juros</option>
                                <option>3x sem juros</option>
                                <option>4x sem juros</option>
                                <option>5x sem juros</option>
                                <option>6x sem juros</option>
                            </select>
                        </div>
                        <button type="submit" class="confirm-payment">Confirmar Pagamento</button>
                    </form>
                </div>
            `;
            break;

        case 'pix':
            container.innerHTML = `
                <div class="payment-form">
                    <h2>📱 Pagamento via PIX</h2>
                    <div class="pix-qrcode">
                        <p style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
                            Escaneie o QR Code ou copie o código abaixo
                        </p>
                        <div class="qrcode-placeholder">
                            <div style="font-size: 8rem;">📱</div>
                        </div>
                        <div class="pix-code">
                            00020126580014BR.GOV.BCB.PIX0136${generateRandomCode()}52040000530398654${state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}5802BR5925ACAI SHOP LTDA6009SAO PAULO
                        </div>
                        <button class="copy-button" onclick="copyPixCode()">📋 Copiar Código</button>
                        <button class="confirm-payment" onclick="processPayment(event, 'pix')">
                            Já Realizei o Pagamento
                        </button>
                    </div>
                </div>
            `;
            break;

        case 'boleto':
            container.innerHTML = `
                <div class="payment-form">
                    <h2>🧾 Pagamento via Boleto</h2>
                    <div class="boleto-info">
                        <p style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
                            Boleto com vencimento em 3 dias úteis
                        </p>
                        <div class="boleto-barcode">
                            ${generateBoletoCode()}
                        </div>
                        <p style="color: var(--text-secondary); margin: var(--spacing-md) 0;">
                            Valor: ${formatPrice(state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0))}
                        </p>
                        <button class="copy-button" onclick="copyBoletoCode()">📋 Copiar Código de Barras</button>
                        <button class="confirm-payment" onclick="processPayment(event, 'boleto')">
                            Confirmar e Baixar Boleto
                        </button>
                    </div>
                </div>
            `;
            break;
    }

    showScreen('paymentScreen');
}

function generateRandomCode() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function generateBoletoCode() {
    let code = '';
    for (let i = 0; i < 47; i++) {
        code += Math.floor(Math.random() * 10);
        if ([4, 9, 14, 19, 24, 29, 34, 39, 44].includes(i)) {
            code += '.';
        }
        if (i === 10) code += ' ';
        if (i === 21) code += ' ';
        if (i === 32) code += ' ';
    }
    return code;
}

function copyPixCode() {
    const code = document.querySelector('.pix-code').textContent;
    navigator.clipboard.writeText(code);
    alert('Código PIX copiado!');
}

function copyBoletoCode() {
    const code = document.querySelector('.boleto-barcode').textContent.replace(/\s/g, '').replace(/\./g, '');
    navigator.clipboard.writeText(code);
    alert('Código de barras copiado!');
}

function processPayment(event, method) {
    if (event) event.preventDefault();

    // Simulate payment processing
    const container = document.getElementById('paymentContainer');
    container.innerHTML = `
        <div class="payment-form" style="text-align: center;">
            <h2>Processando Pagamento...</h2>
            <div style="margin: var(--spacing-xl) 0;">
                <div class="loading" style="width: 60px; height: 60px; border-width: 6px;"></div>
            </div>
            <p style="color: var(--text-secondary);">Aguarde enquanto confirmamos seu pagamento</p>
        </div>
    `;

    // Simulate delay
    setTimeout(() => {
        completeOrder(method);
    }, 2000);
}

function completeOrder(paymentMethod) {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const paymentMethodNames = {
        credit: 'Cartão de Crédito',
        pix: 'PIX',
        boleto: 'Boleto Bancário'
    };

    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = `
        <h3>Detalhes do Pedido</h3>
        <div class="order-detail-item">
            <span>Número do Pedido:</span>
            <strong>#${orderNumber}</strong>
        </div>
        <div class="order-detail-item">
            <span>Forma de Pagamento:</span>
            <strong>${paymentMethodNames[paymentMethod]}</strong>
        </div>
        <div class="order-detail-item">
            <span>Total:</span>
            <strong style="color: var(--accent);">${formatPrice(total)}</strong>
        </div>
        <div class="order-detail-item">
            <span>Status:</span>
            <strong style="color: var(--accent);">✓ Confirmado</strong>
        </div>
        <div class="order-detail-item">
            <span>Itens:</span>
            <strong>${state.cart.reduce((sum, item) => sum + item.quantity, 0)} produto(s)</strong>
        </div>
    `;

    // Clear cart
    state.cart = [];
    updateCartUI();

    showScreen('successScreen');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});


// Charger les produits depuis api.json et les afficher dans #api-results

// --- Gestion du panier ---
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
    const cartCount = getCart().reduce((sum, item) => sum + item.qty, 0);
    const cartLink = document.querySelector('.cart');
    if (cartLink) {
        cartLink.textContent = `Panier (${cartCount})`;
    }
}

// --- Affichage des produits et gestion des boutons ---
document.addEventListener('DOMContentLoaded', function () {

    const apiResults = document.getElementById('api-results');
    let allProducts = [];

    // Fonction d'affichage des produits (avec listeners)
    function renderProducts(products) {
        if (products && products.length > 0) {
            apiResults.innerHTML = products.map(prod => `
                <div class="product-card">
                    <img src="${prod.image}" alt="${prod.nom}" class="product-img" />
                    <div>
                        <h4>${prod.nom}</h4>
                        <p class="price">${prod.prix.toFixed(2)} €</p>
                    </div>
                    <button class="add-to-cart" data-id="${prod.id}">Ajouter au panier</button>
                </div>
            `).join('');
            // Ajout listeners sur les boutons
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    const id = parseInt(this.getAttribute('data-id'));
                    const prod = products.find(p => p.id === id);
                    if (prod && prod.nom === 'Clé à molette') {
                        // Ajout au panier
                        let cart = getCart();
                        let found = cart.find(item => item.id === prod.id);
                        if (found) {
                            found.qty += 1;
                        } else {
                            cart.push({ id: prod.id, nom: prod.nom, prix: prod.prix, image: prod.image, qty: 1 });
                        }
                        setCart(cart);
                        updateCartCount();
                        this.textContent = 'Ajouté !';
                        setTimeout(() => { this.textContent = 'Ajouter au panier'; }, 1200);
                    } else {
                        // Redirection page 404
                        window.location.href = 'page404.html';
                    }
                });
            });
            updateCartCount();
        } else {
            apiResults.innerHTML = '<div class="placeholder-msg">Aucun produit trouvé.</div>';
        }
    }

    // Chargement initial des produits
    fetch('api.json')
        .then(response => response.json())
        .then(data => {
            if (data.produits && data.produits.length > 0) {
                allProducts = data.produits;
                renderProducts(allProducts);
            } else {
                apiResults.innerHTML = '<div class="placeholder-msg">Aucun produit trouvé.</div>';
            }
        })
        .catch(() => {
            apiResults.innerHTML = '<div class="placeholder-msg">Erreur de chargement des produits.</div>';
        });

    // Gestion de la recherche
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('api-query');
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            if (!query) {
                renderProducts(allProducts);
                return;
            }
            const filtered = allProducts.filter(prod => prod.nom.toLowerCase().includes(query));
            renderProducts(filtered);
        });
    }

    // Si sur la page panier.html, afficher le panier dynamiquement
    if (window.location.pathname.endsWith('panier.html')) {
        renderCart();
    }
    // Gestion du bouton "Valider ma commande"
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        // Ajout d'un conteneur pour le message d'erreur
        let errorMsg = document.createElement('div');
        errorMsg.style.color = 'red';
        errorMsg.style.marginTop = '10px';
        errorMsg.style.fontWeight = 'bold';
        checkoutBtn.parentNode.insertBefore(errorMsg, checkoutBtn.nextSibling);

        checkoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            errorMsg.textContent = '';
            const cart = getCart();
            if (!cart || cart.length === 0) {
                errorMsg.textContent = 'Votre panier est vide.';
                return;
            }
            const code = prompt('Veuillez entrer le code de validation :');
            if (code === null) return; // Annulé
            if (code === 'Canard2026') {
                window.location.href = 'sitePlomberie.html';
            } else {
                errorMsg.textContent = 'Code faux';
            }
        });
    }
});

// --- Rendu dynamique du panier ---
function renderCart() {
    const cart = getCart();
    const cartItems = document.getElementById('cart-items');
    const summaryLines = document.querySelectorAll('.cart-summary .summary-line span:last-child');
    if (!cartItems) return;
    if (cart.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#888;">Votre panier est vide.</td></tr>';
        if (summaryLines.length === 3) {
            summaryLines[0].textContent = '0,00 €';
            summaryLines[1].textContent = '0,00 €';
            summaryLines[2].textContent = '0,00 €';
        }
        return;
    }
    let totalHT = 0;
    cartItems.innerHTML = cart.map(item => {
        let prixAffiche = item.prix;
        let totalAffiche = item.prix * item.qty;
        // Si Clé à molette, prix et total affichés à 0
        if (item.nom === 'Clé à molette') {
            prixAffiche = 0;
            totalAffiche = 0;
        } else {
            totalHT += totalAffiche;
        }
        return `<tr>
            <td><div class="product-info"><img src="${item.image}" alt="Produit"><div><strong>${item.nom}</strong></div></div></td>
            <td class="price-bold">${prixAffiche.toFixed(2)} €</td>
            <td><input type="number" value="${item.qty}" min="1" class="qty-input" data-id="${item.id}"></td>
            <td class="price-bold">${totalAffiche.toFixed(2)} €</td>
            <td><a href="#" class="remove-item" data-id="${item.id}" style="color: red; font-size: 12px;">Supprimer</a></td>
        </tr>`;
    }).join('');
    // MAJ totaux
    const tva = totalHT * 0.2;
    const ttc = totalHT * 1.2;
    if (summaryLines.length === 3) {
        summaryLines[0].textContent = totalHT.toFixed(2) + ' €';
        summaryLines[1].textContent = tva.toFixed(2) + ' €';
        summaryLines[2].textContent = ttc.toFixed(2) + ' €';
    }
    // Suppression d'un produit
    document.querySelectorAll('.remove-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let cart = getCart().filter(item => item.id !== parseInt(this.getAttribute('data-id')));
            setCart(cart);
            renderCart();
            updateCartCount();
        });
    });
    // Changement de quantité
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', function() {
            let cart = getCart();
            let prod = cart.find(item => item.id === parseInt(this.getAttribute('data-id')));
            if (prod) {
                prod.qty = Math.max(1, parseInt(this.value) || 1);
                setCart(cart);
                renderCart();
                updateCartCount();
            }
        });
    });
}

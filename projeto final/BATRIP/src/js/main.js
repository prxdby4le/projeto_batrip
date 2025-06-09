// Carrinho simples com localStorage
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const found = cart.find(item => item.id === id);
    if (found) {
      found.qty += 1;
    } else {
      cart.push({id, name, price, qty: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    // Animação visual
    btn.classList.add('added-to-cart');
    setTimeout(() => btn.classList.remove('added-to-cart'), 600);
    alert('Added to cart!');
  });
});
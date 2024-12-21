function filterPokemons(type) {
    const cards = document.querySelectorAll('.pokemon-card');
    cards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.classList.contains(type) ? 'block' : 'none';
        }
    });
}

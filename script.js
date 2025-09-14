const searchInput = document.getElementById('search');
const cardsContainer = document.getElementById('cardsContainer');
const cards = cardsContainer.getElementsByClassName('card');

searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        const name = cards[i].dataset.name.toLowerCase();
        if (name.includes(filter)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
});

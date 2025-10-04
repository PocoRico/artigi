const cards = ["Charizard Base Set", "Charizard Team Rocket", "Pikachu Promo", "Mewtwo Base Set"];

document.getElementById("cardSearch").addEventListener("input", function() {
  const input = this.value.toLowerCase();
  const suggestions = cards.filter(c => c.toLowerCase().includes(input));
  
  document.getElementById("suggestions").innerHTML = suggestions
    .map(s => `<li>${s}</li>`)
    .join("");
});
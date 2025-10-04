async function searchCard() {
    const query = document.getElementById("cardSearch").value.trim();
    if (!query) return;

    const url = `https://api.pokemontcg.io/v2/cards?q=name:${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url, {
            headers: {
                "X-Api-Key": "c254161e-d9fd-4fe9-b1eb-bba8072dbc8a"
            }
        });
        if (!response.ok) throw new Error("API error " + response.status);
        const data = await response.json();

        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        if (!data.data || data.data.length === 0) {
            resultsDiv.innerHTML = "<p>No cards found.</p>";
            return;
        }

        data.data.slice(0, 5).forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.className = "card";
            cardDiv.innerHTML = `
                <h3>${card.name}</h3>
                <p>Set: ${card.set.name}</p>
                <p>Number: ${card.number}</p>
                <img src="${card.images.small}" alt="${card.name}" />
            `;
            resultsDiv.appendChild(cardDiv);
        });
    } catch (error) {
        console.error("API Error:", error);
        document.getElementById("results").innerHTML = "<p>Error fetching data.</p>";
    }
}

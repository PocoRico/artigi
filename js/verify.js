function verifyCode() {
  const code = document.getElementById("slabCode").value;

  // Example: call Google Apps Script API (to be created)
  fetch("YOUR_GOOGLE_SCRIPT_URL?code=" + code)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h3>${data.cardName}</h3>
        <p>Grade: ${data.grade}</p>
        <p>Notes: ${data.notes}</p>
        <img src="${data.imageUrl}" width="200">
      `;
    })
    .catch(err => {
      document.getElementById("result").innerHTML = "Code not found.";
    });
}
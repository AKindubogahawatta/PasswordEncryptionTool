const API_URL = "https://webapp2025encrypt-chajgjbgcua9apbb.eastus-01.azurewebsites.net/api/crypto"; // Change port if needed

async function encryptText() {
    let text = document.getElementById("text").value;
    let key = document.getElementById("key").value;

    if (!text || !key) {
        alert("Please enter both text and key.");
        return;
    }

    let response = await fetch(`${API_URL}/encrypt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, key })
    });

    let result = await response.text();
    document.getElementById("result").value = result;
}

async function decryptText() {
    let text = document.getElementById("text").value;
    let key = document.getElementById("key").value;

    if (!text || !key) {
        alert("Please enter both text and key.");
        return;
    }

    let response = await fetch(`${API_URL}/decrypt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, key })
    });

    let result = await response.text();
    document.getElementById("result").value = result;
}

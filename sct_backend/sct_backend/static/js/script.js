document.getElementById("symptomEntryForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const symptoms = document.getElementById("symptoms").value;

    // Show loading message
    document.getElementById("loading").style.display = "block";
    document.getElementById("assessment-result").innerText = "";

    // Simulate AI API request (Replace with actual API later)
    setTimeout(async () => {
        const response = await getAIResponse(symptoms);
        document.getElementById("loading").style.display = "none";
        document.getElementById("assessment-result").innerText = response;
    }, 2000);
});

// Mock AI API Function (Replace with real API endpoint)
async function getAIResponse(symptoms) {
    const apiURL = "";
    const response = await fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms })
    });

    const data = await response.json();
    return data.prediction || "AI could not determine the issue.";
}
function getCSRFToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

fetch("/", {
    method: "POST",
    headers: {
        "X-CSRFToken": getCSRFToken(),
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ example: "Test data" }),
});


async function checkHealth() {
    const output = document.getElementById("output");

    output.textContent = "Checking application health...";

    try {
        const response = await fetch("/api/health");

        if (!response.ok) {
            throw new Error("Health check failed");
        }

        const data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        output.textContent = "Unable to check application health.";
    }
}

async function getVersion() {
    const output = document.getElementById("output");

    output.textContent = "Fetching application version...";

    try {
        const response = await fetch("/api/version");

        if (!response.ok) {
            throw new Error("Version request failed");
        }

        const data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        output.textContent = "Unable to retrieve application version.";
    }
}

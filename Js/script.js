// Helper functie om een response object te creëren
function createResponseObject(response) {
    return {
        // afhangend van de namen in de api
        ok: response.ok,
        status: response.status,
        code: response.statusText,
        message: response.message || null,
        data: response.data || null
    };
}

// Functie voor het opvragen van informatie via de API
async function fetchInformation() {
    const token = 'Bearer your_access_token_here';
    const response = await fetch('https://stevenop.be/pingfin/api/help/', {
        headers: { 'Authorization': token }
    });
    if (!response.ok) {
        const errorMessage = await response.text(); // Haal de foutmelding op van de response
        throw new Error(errorMessage);
    }
    return response.json();
}

// Simulatie of een bankID bestaat in de database
function checkBankIDInDatabase(bankID) {
    const validBankIDs = ['BIC12345', 'BIC67890'];
    return validBankIDs.includes(bankID);
}

// Functie voor het verzenden van POST en GET verzoeken
async function sendRequest(url, method, data) {
    const requestOptions = {
        headers: new Headers({
            'Authorization': 'Bearer your_access_token_here',
            'Content-Type': 'application/json'
        }),
        method: method,
        body: method === 'POST' ? JSON.stringify({ data: data }) : null
    };

    try {
        const response = await fetch(url, requestOptions);
        const jsonResponse = await response.json();
        const responseObj = createResponseObject(jsonResponse);
        document.getElementById('sendRequest').innerText = 'Request sent: ' + JSON.stringify(responseObj);
        return responseObj;
    } catch (error) {
        console.error(`Failed to send ${method} request:, error`);
        document.getElementById('sendRequest').innerText = 'Failed to send request: ' + error.message;
        throw error;
    }
}


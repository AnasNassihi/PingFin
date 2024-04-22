// Helper functie om een response object te creëren
function createResponseObject(response) {
    return {
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
        throw new Error('Failed to fetch the data');
    }
    return response.json();
}

// Functie om het bank ID te controleren
async function ctrlID() {
    try {
        const info = await fetchInformation();
        const bankID = info.bank_id;
        const exists = checkBankIDInDatabase(bankID);
        if (!exists) {
            throw new Error('4004: BIC does not exist in database');
        }
    } catch (error) {
        console.error(error.message);
        if (error.message.includes('4004')) {
            throw error; // Opnieuw gooien om te verwerken in de Accepted functie
        }
    }
}

// Functie om het bedrag te controleren
function ctrlAmount(amount) {
    if (amount < 0) {
        throw new Error('4003: Amount is negative');
    } else if (amount > 500) {
        throw new Error('4002: Amount exceeds 500 euros');
    }
}

// Functie om te bepalen of de transactie geaccepteerd wordt
async function Accepted() {
    try {
        await ctrlID();
        ctrlAmount(450); // Dynamisch bedrag in echte implementatie
        console.log('2000: Information correct and accepted');
    } catch (error) {
        console.error('Transaction not accepted:', error.message);
    }
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
        return createResponseObject(jsonResponse);
    } catch (error) {
        console.error(`Failed to send ${method} request:,  error`);
        throw error;
    }
}

// Voorbeeld van het aanroepen van de functies
Accepted();
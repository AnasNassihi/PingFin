/* try one AdamG
async function fetchDataForTransactionID() {
    try {
        const apiUrl = '/api/Transaction ID';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor Transaction ID');
        }
        const data = await response.json();
        const transactionIDValue = data['Transaction ID'];
        const transactionIDCell = ("transactie 1");
        transactionIDCell.textContent = transactionIDValue;
        document.getElementById('transaction-id').textContent = transactionIDValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForLogID() {
    try {
        const apiUrl = '/api/Log ID';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor Log ID');
        }
        const data = await response.json();
        const logIDValue = data['Log ID'];
        const logIDCell = document.querySelector('.transaction-value[data-label="Log ID"]');
        logIDCell.textContent = logIDValue;
        document.getElementById('log-id').textContent = logIDValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForDatetime() {
    try {
        const apiUrl = '/api/Datetime';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor Datetime');
        }
        const data = await response.json();
        const datetimeValue = data['Datetime'];
        const datetimeCell = document.querySelector('.transaction-value[data-label="Datetime"]');
        datetimeCell.textContent = datetimeValue;
        document.getElementById('datetime').textContent = datetimeValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForMessage() {
    try {
        const apiUrl = '/api/Message';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor Message');
        }
        const data = await response.json();
        const MessageValue = data['Message'];
        const MessageCell = document.querySelector('.transaction-value[data-label="Message"]');
        MessageCell.textContent = MessageValue;
        document.getElementById('message').textContent = MessageValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForCb_code() {
    try {
        const apiUrl = '/api/cb_code';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor cb_code');
        }
        const data = await response.json();
        const cb_codeValue = data['cb_code'];
        const cb_codeCell = document.querySelector('.transaction-value[data-label="cb_code"]');
        cb_codeCell.textContent = cb_codeValue;
        document.getElementById('cb-code').textContent = cb_codeValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForOb_id() {
    try {
        const apiUrl = '/api/ob_id';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor ob_id');
        }
        const data = await response.json();
        const ob_idValue = data['ob_id'];
        const ob_idCell = document.querySelector('.transaction-value[data-label="ob_id"]');
        ob_idCell.textContent = ob_idValue;
        document.getElementById('ob-id').textContent = ob_idValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForOa_id() {
    try {
        const apiUrl = '/api/oa_id';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor oa_id');
        }
        const data = await response.json();
        const oa_idValue = data['oa_id'];
        const oa_idCell = document.querySelector('.transaction-value[data-label="oa_id"]');
        oa_idCell.textContent = oa_idValue;
        document.getElementById('oa-id').textContent = oa_idValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForBb_id() {
    try {
        const apiUrl = '/api/bb_id';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor bb_id');
        }
        const data = await response.json();
        const bb_idValue = data['bb_id'];
        const bb_idCell = document.querySelector('.transaction-value[data-label="bb_id"]');
        bb_idCell.textContent = bb_idValue;
        document.getElementById('bb-id').textContent = bb_idValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForBa_id() {
    try {
        const apiUrl = '/api/ba_id';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor ba_id');
        }
        const data = await response.json();
        const ba_idValue = data['ba_id'];
        const ba_idCell = document.querySelector('.transaction-value[data-label="ba_id"]');
        ba_idCell.textContent = ba_idValue;
        document.getElementById('ba-id').textContent = ba_idValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

async function fetchDataForBb_code() {
    try {
        const apiUrl = '/api/bb_code';
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('API-verzoek mislukt voor bb_code');
        }
        const data = await response.json();
        const bb_codeValue = data['bb_code'];
        const bb_codeCell = document.querySelector('.transaction-value[data-label="bb_code"]');
        bb_codeCell.textContent = bb_codeValue;
        document.getElementById('bb-code').textContent = bb_codeValue;
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}
*/
/* try two AdamG
Een verkorte versie waarin in plaats van cel per cel in het tabel een gegeven te pullen uit het api het programma een nieuwe rij
zal maken en die vullen met het gepullde informatie uit het api. Andere verschil is dat het volgorde van gepulde informatie uit het
api cruciaal is, het volgorde van de th's in het tabel en het volgorde van het opgehaalde informatie uit het api moeten perfect
overeenkomen anders zullen ze niet in het juiste volgorde zijn in het tabel.
*/
async function fetchDataAndUpdate() {
    const apiUrl = 'https://pingfin.onrender.com/api/logs'; // Example API endpoint
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    addRowToTable(data);
}


function addRowToTable(data) {
    const tableBody = document.getElementById('transaction-table-body');

    // Create and populate table cells with data from the API
    data.forEach(value => {
        const newRow = document.createElement('tr');
        let newCell = document.createElement('td');
        newCell.textContent = value.log_id;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.log_datetime;
        newCell.classList.add('kleiner');
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.log_message;
        newCell.classList.add('klein');
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.log_type;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.po_id;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.po_amount;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.po_message;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.po_datetime;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.ob_id;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.oa_id;
        newCell.classList.add('kleiner');
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.ob_code;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.ob_datetime;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.cb_code;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.cb_datetime;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.bb_id;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.ba_id;
        newCell.classList.add('kleiner');
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.bb_code;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.textContent = value.bb_datetime;
        newRow.appendChild(newCell);

        tableBody.appendChild(newRow);

    });
}

fetchDataAndUpdate(); // Fetch data from API and update table on page load


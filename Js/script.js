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
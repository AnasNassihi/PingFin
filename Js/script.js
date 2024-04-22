const contentSection = document.getElementById('content');

// Function to load the dashboard content
function loadDashboard() {
  contentSection.innerHTML = `
    <h2>Dashboard</h2>
    <p>Welcome to the SEPA Transaction Management System!</p>
    <p>View recent transactions or initiate a new payment.</p>
  `;
}

// Function to load the new payment form
function loadNewPayment() {
  contentSection.innerHTML = `
    <h2>New Payment</h2>
    <form>
      <label for="beneficiary">Beneficiary Name:</label>
      <input type="text" id="beneficiary" name="beneficiary" required>
      <label for="iban">Beneficiary IBAN:</label>
      <input type="text" id="iban" name="iban" required>
      <label for="amount">Amount (EUR):</label>
      <input type="number" id="amount" name="amount" required>
      <label for="description">Description:</label>
      <textarea id="description" name="description"></textarea>
      <button type="submit">Submit Payment</button>
    </form>
  `;
}

function loadTransaction() {
    contentSection.innerHTML= `
    `;
}

// Attach event listeners to navigation links (replace with actual functionalities)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (link.textContent === 'Dashboard') {
      loadDashboard();
    } else if (link.textContent === 'New Payment') {
      loadNewPayment();
    }
  });
});

// Load initial content (can be dashboard by default)
loadDashboard();
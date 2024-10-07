function processOrder(event) {
    event.preventDefault();

    // Get the form values
    const tagline = document.getElementById('tagline').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    const recipientName = document.getElementById('recipient-name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;

    // Get the current date for the receipt
    const currentDate = new Date().toLocaleDateString();

    // Generate the receipt HTML
    const receiptHTML = `
        <div class="receipt-header">
            <div>Order Date: <strong>${currentDate}</strong></div>
            <div>Order ID: <strong>#${Math.floor(Math.random() * 1000000)}</strong></div>
        </div>

        <h2>Order Receipt</h2>

        <div class="section">
            <p><strong>Tagline:</strong> ${tagline}</p>
            <p><strong>Color:</strong> ${color}</p>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
        </div>

        <div class="section">
            <p><strong>Recipient's Name:</strong> ${recipientName}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div class="section">
            <p><strong>Additional Comments:</strong> ${comments ? comments : 'None'}</p>
        </div>

        <div class="receipt-footer">
            Thank you for your order! We will process your order and send it to the provided address.
        </div>
    `;

    // Insert the receipt into the page
    document.getElementById('receipt').innerHTML = receiptHTML;

    // Scroll to the receipt section
    document.getElementById('receipt').scrollIntoView({ behavior: 'smooth' });
}

function processOrder(event) {
    event.preventDefault();

    // Get the form values
    const tagline = document.getElementById('tagline').value.trim();
    const color = document.getElementById('color').value.trim();
    const size = document.getElementById('size').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const deliveryDate = document.getElementById('delivery-date').value.trim();
    const recipientName = document.getElementById('recipient-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Validation for empty fields
    if (!tagline || !color || !size || !quantity || !deliveryDate || !recipientName || !address || !email || !phone) {
        alert('Please fill out all required fields.');
        return;
    }

    // Validation for tagline (max 35 characters)
    if (tagline.length > 35) {
        alert('Tagline must be 35 characters or less.');
        return;
    }

    // Validation for phone number (exactly 9 digits)
    const phonePattern = /^\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be exactly 9 digits.');
        return;
    }

    // If validation passes, proceed with generating the receipt
    const currentDate = new Date().toLocaleDateString();

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

    document.getElementById('receipt').innerHTML = receiptHTML;
    document.getElementById('receipt').scrollIntoView({ behavior: 'smooth' });
}

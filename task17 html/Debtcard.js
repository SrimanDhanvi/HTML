function CarValidation() {
    var cardNumber = document.getElementById('DC').value.replace(/\s/g, ''); // Remove spaces
    document.getElementById('notify').innerHTML = '';

    if(cardNumber.length === 0) {
        document.getElementById('notify').innerHTML = 'Card Number Required';
        document.getElementById('notify').style.color = 'red';
        return;
    }

    // Check if card number contains only digits
    if(!/^\d+$/.test(cardNumber)) {
        document.getElementById('notify').innerHTML = 'Card number must contain only digits';
        document.getElementById('notify').style.color = 'red';
        return;
    }

    // Validate card using Luhn algorithm
    if(!isValidLuhn(cardNumber)) {
        document.getElementById('notify').innerHTML = 'Invalid Card Number';
        document.getElementById('notify').style.color = 'red';
        return;
    }

    // Identify card type
    const cardType = identifyCardType(cardNumber);
    if(cardType) {
        document.getElementById('notify').innerHTML = cardType;
        document.getElementById('notify').style.color = 'green';
    } else {
        document.getElementById('notify').innerHTML = 'Unknown Card Type';
        document.getElementById('notify').style.color = 'orange';
    }
}

// Luhn algorithm for card validation
function isValidLuhn(cardNumber) {
    let sum = 0;
    let isEven = false;
    
    // Loop through values starting from the rightmost side
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));

        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isEven = !isEven;
    }

    return (sum % 10) === 0;
}

// Function to identify card type based on number patterns
function identifyCardType(cardNumber) {
    const patterns = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'Mastercard': /^5[1-5][0-9]{14}$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        'JCB': /^(?:2131|1800|35\d{3})\d{11}$/,
        'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        'Maestro': /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
        'RuPay': /^(?:60[0-9]{14}|65[0-9]{14}|81[0-9]{14}|82[0-9]{14}|508[0-9]{13})$/,
        'UnionPay': /^62[0-9]{14,17}$/,
        'Mir': /^2[0-9]{15}$/
    };

    for (const [cardType, pattern] of Object.entries(patterns)) {
        if (pattern.test(cardNumber)) {
            return cardType;
        }
    }

    return null;
}
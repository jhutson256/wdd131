const form = document.querySelector('#credit-card');

function displayError(msg) {
	document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
	return number === '1234123412341234';
}

function isSecurityCodeValid(number) {
    return number === '123';
}

function submitHandler(event) {
	event.preventDefault();
    let errorMsg = '';
	displayError('');

    let cardNumber = document.querySelector('#card-number');
    const cardNum = cardNumber.value.trim();

    if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
    }

    let securityCode = document.querySelector('#cvc-cvv');
    const secCode = securityCode.value.trim();

    if (!/^\d{3}$/.test(secCode)) {
    errorMsg += 'CVC/CVV must be 3 digits\n';
    } else if (!isSecurityCodeValid(secCode)) {
    errorMsg += 'CVC/CVV is not valid\n';
    }

    const expMonth = Number(document.querySelector('#month').value);   
    const expYear = Number(document.querySelector('#year').value);
    const currentDate = new Date();

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
		displayError(errorMsg);
		return;
    }
    
    form.innerHTML = '<h1>Thank you for your purchase.</h1>';
    form.style.maxWidth = 'none';
    form.style.textAlign = 'center';
    form.style.display = 'block';
}

form.addEventListener('submit', submitHandler);
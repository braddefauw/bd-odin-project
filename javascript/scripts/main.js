// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const zipCode = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');
const pw = document.getElementById('pw');
const pwError = document.querySelector('#pw + span.error');
const pwc = document.getElementById('pwc');
const pwcError = document.querySelector('#pwc + span.error');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showEmailError();
  }
});

zipCode.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (zipCode.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    zipError.textContent = ''; // Reset the content of the message
    zipError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showZipError();
  }
});

pw.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (pw.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    pwError.textContent = ''; // Reset the content of the message
    pwError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPasswordError();
  }
});

pwc.addEventListener('input', function (event) {
  if(pw.value !== pwc.value){
    pwcError.textContent = 'Passwords do not match.';
    pwcError.className = 'error active';
  }
  // Each time the user types something, we check if the
  // form fields are valid.
  else if (pwc.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    pwcError.textContent = ''; // Reset the content of the message
    pwcError.className = 'error'; // Reset the visual state of the message
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit
  event.preventDefault();
  console.log(email.validity, zipCode.validity, pw.validity, pwc.validity)
  if(!email.validity.valid || !zipCode.validity.valid || !pw.validity.valid || !pwc.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showEmailError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}

function showZipError() {
  if(zipCode.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    zipError.textContent = 'You need to enter a zip.';
  } else if(zipCode.validity.patternMismatch) {
    // If the field doesn't contain an the correct pattern,
    // display the following error message.
    zipError.textContent = 'Please make sure to enter a valid 5-digit zip code.';
  }
  // Set the styling appropriately
  zipError.className = 'error active';
}

function showPasswordError() {
  if(pw.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    pwError.textContent = 'You need to enter a password.';
  }else if(pw.validity.patternMismatch) {
    // If the field doesn't contain an the correct pattern,
    // display the following error message.
    pwError.textContent = 'Please make sure to follow the correct pattern (Minimum of 7 characters. Should have at least one special character and one number.).';
  }

  // Set the styling appropriately
  pwError.className = 'error active';
}
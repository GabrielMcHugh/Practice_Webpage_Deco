//crrow function that closes the display of the modal
const closeModal = (modal) => {
  document.getElementById(modal).style.display='none'; 
}

//crrow function that opens the display of the modal by setting it to block
const openModal = (modal) => {
  document.getElementById(modal).style.display='block';
}

//checks if input value matches regex
const checkEmail = (inputText) => {
  var mailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regexstring used to check the email format taken from (https://www.w3resource.com/javascript/form/email-validation.php)
  if (inputText.value.match(mailregex)) {
    return true;
  } else {
    alert("Please enter a valid email address");
    return false;
  }
}

//checks if password matches regex
const checkPassword = (password) => {
  var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  if (mediumRegex.test(password.value)) {
    return true;
  } else {
    alert("Password is not strong enough");
    return false;
  }
}

//check if two strings match
const checkPasswordsMatch = (first, second) => {
  if (first.value == second.value) {
    return true;
  } else {
    alert('Passwords do no match')
    return false;
  }
}

//checks if values is not empty
const checkExists = (element) => {
  if (element.value == "") {
    alert("Please fill in all input fields");
    return false;
  } else {
    return true; 
  }
}

//closes modal if email is valid
const checkFormat = (modal, mail, password) => {
  if (checkExists(password)) {
    if (checkEmail(mail)) {
      closeModal(modal);
    }
  }
}

//closes modal if email is valid, password is valid and passwords match
const checkRegistrationFormat = (modal, mail, password1, password2) => {
  if (checkEmail(mail)) {
    if (checkPassword(password1)) {
      if (checkPasswordsMatch(password1, password2)) {
        closeModal(modal);
      }
    }
  }
}

//opens confirmation is all input fields have been filled in and email is the correct format
const checkBookingFormat = (modal, name, mail, number, links, connection, datapackage, checkin, checkout) => {
  if (checkExists(name) 
    && checkExists(mail) 
    && checkExists(number) 
    && checkExists(links) 
    && checkExists(connection) 
    && checkExists(datapackage)
    && checkExists(checkin)
    && checkExists(checkout)) {
    if (checkEmail(mail)) {
      openModal(modal);
    }
  }
}









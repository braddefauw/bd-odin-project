const email = document.getElementById("email");

email.addEventListener("input", function(e){
  if(email.validity.typeMismatch){
    email.setCustomValidity("I am expecting an email address!");
    email.reportValidity();
  }else{
    email.setCustomValidity("");
  }
})
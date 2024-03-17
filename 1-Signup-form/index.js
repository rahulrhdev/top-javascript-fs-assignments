document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const firstNameValue = document.getElementById("firstName").value;
  const lastNameValue = document.getElementById("lastName").value;
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const confirmPasswordValue = document.getElementById("confirmPassword").value;
  if (passwordValue !== confirmPasswordValue) {
    document.getElementById("password").className = "error";
    document.getElementById("confirmPassword").className = "error";
    document.getElementById("optional").className = "optional-error-true";
  } else {
    setTimeout(() => {
      alert("Account created successfully!");
    }, 2000);
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  }
});

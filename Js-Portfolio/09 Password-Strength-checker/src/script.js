const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  if (password.length === 0) {
    message.textContent = "Type something...";
    message.style.color = "black";
  } 
  else if (password.length < 4) {
    message.textContent = "Weak Password 😢";
    message.style.color = "red";
  } 
  else if (password.length < 8) {
    message.textContent = "Medium Strength 😐";
    message.style.color = "orange";
  } 
  else {
    message.textContent = "Strong Password 💪";
    message.style.color = "green";
  }
});

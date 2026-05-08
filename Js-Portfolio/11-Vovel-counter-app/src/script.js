const input = document.getElementById("textInput");
const btn = document.getElementById("countBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  const text = input.value.toLowerCase(); // convert to lowercase for easy checking
  let count = 0;

  for (let char of text) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }

  if (text.length === 0) {
    message.textContent = "Please type something first!";
    message.style.color = "yellow";
  } else {
    message.textContent = `There are ${count} vowels in your text.`;
    message.style.color = "lightgreen";
  }
});

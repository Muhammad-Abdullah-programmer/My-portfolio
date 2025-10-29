let userText = document.getElementById("userText");
let countBtn = document.getElementById("countBtn");
let wordCount = document.getElementById("wordCount");
let vowelCount = document.getElementById("vowelCount");

countBtn.addEventListener("click", () => {
  let text = userText.value.trim();

  if (text === "") {
    wordCount.textContent = "Words: 0";
    vowelCount.textContent = "Vowels: 0";
    return;
  }

  // Count words
  let words = text.split(" ").filter(word => word !== "").length;

  // Count vowels using loop
  let vowels = 0;
  for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) {
      vowels++;
    }
  }

  wordCount.textContent = `Words: ${words}`;
  vowelCount.textContent = `Vowels: ${vowels}`;

  userText.value = ""
});


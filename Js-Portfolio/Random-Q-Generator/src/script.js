const quotes = [
  "Believe you can and you’re halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "It always seems impossible until it’s done.",
  "Don’t stop until you’re proud.",
  "Success is the sum of small efforts repeated daily."
];

const quoteElement = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    let currentIndex = Math.floor(Math.random() * quotes.length)
    quoteElement.textContent = quotes[currentIndex]
})
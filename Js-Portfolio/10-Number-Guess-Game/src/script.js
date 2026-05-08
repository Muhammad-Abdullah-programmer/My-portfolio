let guessInput = document.getElementById("guessInput")
let checkBtn = document.getElementById("checkBtn")
let message = document.getElementById("message")
let randomNumber = Math.floor(Math.random() * 10) + 1

checkBtn.addEventListener("click", () => {

    let userGes = Number(guessInput.value)

    if (!userGes) {
        message.textContent = "Please Write Something"
    } else if (userGes === randomNumber) {

        message.textContent = "You Won 🎉"
    } else if (userGes < randomNumber) {
        message.textContent = "Too Low 📉"
    } else {
        message.textContent = "Too High 📈"
    }
})
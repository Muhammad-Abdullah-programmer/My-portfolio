let timeInput = document.getElementById("timeInput")
let timerDisplay = document.getElementById("timerDisplay")
let startBtn = document.getElementById("startBtn")
let countdown ;


startBtn.addEventListener("click", ()=>{
  let timeLeft = Number(timeInput.value)

  if(timeLeft <= 0 || isNaN(timeLeft)){
    timerDisplay.textContent = "Enter a Valid Number"
    return
  }

  clearInterval(countdown)

  timerDisplay.textContent = timeLeft

  countdown = setInterval(()=>{
    timeLeft--
    timerDisplay.textContent = timeLeft

    if(timeLeft <= 0){
      clearInterval(countdown)
      timerDisplay.textContent = "⏰ Time's up!"
    }
  }, 1000)
})
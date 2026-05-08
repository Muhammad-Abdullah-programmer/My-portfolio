let tempInput = document.getElementById("tempInput")
let unit = document.getElementById("unit")
let convertBtn = document.getElementById("convertBtn")
let result = document.getElementById("result")



convertBtn.addEventListener("click", ()=>{
    let tempValue = Number(tempInput.value)
    let selectedUnit = unit.value

    if(isNaN(tempInput.value) || tempInput.value === ""){
        result.textContent = "Please Enter Valid Number"

        return
    }

    let converted;

    if(selectedUnit === "C"){
        converted = (tempValue * 9/5) + 32
        result.textContent = `${tempValue} °C =  ${converted.toFixed(2)} °F`
    }else{
        converted = (tempValue -32) * 9/5
        result.textContent = `${tempValue}°F = ${converted.toFixed(2)}°C`
    }

    tempInput.value = ""
})
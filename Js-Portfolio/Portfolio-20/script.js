let submitBtn = document.getElementById("submit")
let nameInpt = document.getElementById("nameInpt")
let numInpt = document.getElementById("numInpt")
let mailInpt = document.getElementById("mailInpt")


submitBtn.addEventListener("click",()=>{

    let cleenValue = nameInpt.value.trim()

  if(cleenValue === ""){
    alert("please write something")
  }else if(!/^[A-Za-z]+$/.test(cleenValue)){
    alert("Please write valid name Text only")
  }
})

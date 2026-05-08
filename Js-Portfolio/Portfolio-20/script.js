let submitBtn = document.getElementById("submit")
let nameInpt = document.getElementById("nameInpt")
let numInpt = document.getElementById("numInpt")
let mailInpt = document.getElementById("mailInpt")
let dark = document.getElementById("dark")
let light = document.getElementById("light")


submitBtn.addEventListener("click",()=>{

    let cleenValue = nameInpt.value.trim()

  if(cleenValue === ""){
    alert("please write something")
  }else if(!/^[A-Za-z ]+$/.test(cleenValue)){
    alert("Please write valid name Text only")
  }else{
    alert("Thanks for connecting us")
  }
})





const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

if (localStorage.theme === "dark") {
  html.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  localStorage.theme = html.classList.contains("dark")
    ? "dark"
    : "light";
});

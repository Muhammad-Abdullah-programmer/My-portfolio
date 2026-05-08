let searchBar = document.getElementById("searchBar")
let productDetails = document.getElementById("product-detail")
let hAddToCartBtn = document.getElementById("hAddToCart")

let productTitle = document.getElementById("productTitle")
let badge = document.getElementById("badge")
let cart = []

let tShirts = [

    {title: "Next Level Apparel Mens", price : "PKR 900", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/1.png"},
    {title: "Casio AE150 Mens Watch", price : "PKR 200", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/2.png"},
    {title: "Yellow Mens T Shirt", price : "PKR 400", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/3.png"},
    {title: "Black Mens T Shirt", price : "PKR 400", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/4.png"},
    {title: "Timex Mens Watch", price : "PKR 900", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/3.png"},
    {title: "OLEVS Mens Watch", price : "PKR 200", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/4.png"},
   
    {title: "Bulova Mens Watch", price : "PKR 900", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/5.png"},
    {title: "Diesel Mens Watch", price : "PKR 200", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/6.png"},
    {title: "Gray Mens T Shirt", price : "PKR 400", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/1.png"},
    {title: "Green Mens T Shirt", price : "PKR 400", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/2.png"},
    {title: "Anne Mens Watch", price : "PKR 900", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/1.png"},
    {title: "Heuer Mens Watch", price : "PKR 200", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/4.png"},
   
    
]


let cartCrossBtn = document.getElementById("cartCrossBtn")
let cartDiv = document.getElementById("cartDiv")
let cartItemsList = document.getElementById("cartItemsList")

// cart icon click — open panel
hAddToCartBtn.addEventListener("click", (e) => {
  e.preventDefault()
  cartDiv.classList.toggle("hidden")
})

// close button
cartCrossBtn.addEventListener("click", () => {
  cartDiv.classList.add("hidden")
})

let closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click", () => {
  productDetails.classList.add("hidden")
  productDetails.classList.remove("flex")
})



searchBar.addEventListener("input", ()=>{

  let userInput = searchBar.value.toLowerCase()

  if(userInput === ""){
    renderProducts(tShirts)
    return
  }

  let filteredProduct = tShirts.filter((product)=>{
    return product.title.toLowerCase().includes(userInput)
  })

  if(filteredProduct.length === 0){
    tshirtProducts.innerHTML = `<p>Product Not Found</p>`
   return 
  }

  renderProducts(filteredProduct)
})


let tshirtProducts = document.getElementById("tShirt-all-p")


function renderProducts(productsArray){
  tshirtProducts.innerHTML = productsArray.map((product, index)=>{
    return  `<div data-index="${index}"  class=" product-card p-tshirt-1 col-span-1 row-span-1 bg-[#f4f4f6] flex flex-col  relative group  max-h-[70%] justify-between  rounded-lg overflow-hidden"> 
    
  <div class=" aspect-square flex justify-center items-center  h-[20vh]">
    <img src="${product.url}" class="h-25 object-contain group-hover:scale-140 transition ease-in-out duration-200 ">
    </div>

   
  
    <div class="flex flex-col py-2 gap-2 px-2 max-h-[30%]  flex-1 border-2 border-white shadow-xl overflow-hidden">
      <h2 class="text-md font-normal name" > <button class="productTitle">${product.title}</button> </h2>
      
    <div class=" flex justify-between "> 
    <p class="text-[#f85606] text-sm font-bold price">${product.price}</p> 

    <button class="bg-slate-900 text-white px-2 py-1 mb-6 rounded addtoCartBtn"> Add to Cart</button>
    </div>
    
    
    </div>

    
    
    </div>`

  }).join("")
}

renderProducts(tShirts)







tshirtProducts.addEventListener("click", (e)=>{

  if(!e.target.matches(".productTitle")) return

  let card = e.target.closest(".product-card");

  if(!card) return

  let index = card.getAttribute("data-index");
  let selectedProduct = tShirts[index]

    showProductDetails(selectedProduct);


})


function showProductDetails(product){

  let productDetails = document.getElementById("product-detail")
  let detailContent = document.getElementById("detail-content")

  detailContent.innerHTML = ` <div class="flex flex-col items-center md:flex-row gap-5 w-[100%] h-[100%] bg-[#f4f4f6]">
      
      <img src="${product.url}" class="w-full md:w-[40%] object-contain">

      <div>
        <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
        <p class="text-orange-500 font-bold mb-2">${product.price}</p>
        <p class="text-gray-600 w-[80%]">${product.details}</p>

        <button class="bg-black text-white p-2 mt-5">Add to Cart </button>
      </div>

    </div>`

    productDetails.classList.remove("hidden")
    productDetails.classList.add("flex")
}











tshirtProducts.addEventListener("click", (e) => {

  if (!e.target.matches(".addtoCartBtn")) return

  let card = e.target.closest(".product-card")
  let name = card.querySelector(".name").textContent
  let price = card.querySelector(".price").textContent

  let existing = cart.find(item => item.name === name)

  if(existing){
    existing.qty++
  }else{
    cart.push({name, price, qty: 1})
     e.target.textContent = "Added ✓"
    e.target.disabled = true
  }
  updateCart()

})


function updateCart() {
let totalItems = cart.reduce((sum , item)=> sum + item.qty, 0)

badge.textContent = totalItems
badge.style.display = totalItems > 0 ? "flex" : "none"

if(cart.length === 0){
  cartItemsList.innerHTML = `<p class="text-gray-500 text-sm">No Item Added</p>`
  return
}

// grand total 

let grandTotal = cart.reduce((sum, item)=>{

  let numPrice = parseInt(item.price.replace(/[^0-9]/g, ""))
  return sum + (numPrice * item.qty)
}, 0)

// render items with qty controlls 

cartItemsList.innerHTML = cart.map((item, index)=> `

<div class="flex justify-between items-center py-2 border-b border-gray-100">

<span class="text-sm w-[45%]"> ${item.name}  </span>

<div class="flex items-center gap-1">

<button onClick="changeQty(${index}, -1)" class="bg-gray-200 text-black w-6 h-6 rounded text-sm font-bold"> - </button>
<span class="text-sm font-semibold w-5 text-center"> ${item.qty}    </span>
<button onClick="changeQty(${index}, +1)" class="bg-gray-200 text-black w-6 h-6 rounded text-sm font-bold"> + </button>
</div>

<span class="text-sm text-orange-500 font-bold"> PKR${(parseInt(item.price.replace(/[^0-9]/g, "")) * item.qty).toLocaleString()} </span>

</div>

`).join("") + `<div class="flex justify-between items-center pt-3 mt-2 border-t-2 border-gray-300"> 
<span class="font-bold text-sm">Grand Total</span>
      <span class="font-bold text-sm text-orange-500">PKR ${grandTotal.toLocaleString()}</span>

 


              </div>`
}



// Change Quantity Function 

function changeQty(index, Change){

  cart[index].qty += Change

  if(cart[index].qty <= 0){
    cart.splice(index, 1)

    let btns = document.querySelectorAll(".addtoCartBtn")
    btns.forEach(btn =>{

      if(btn.textContent === "Added ✓"){

      }
    })
  }

  updateCart()

}
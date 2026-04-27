let searchBar = document.getElementById("searchBar")
let productDetails = document.getElementById("product-detail")

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
    return  `<div data-index="${index}"  class=" product-card p-tshirt-1 col-span-1  bg-[#f4f4f6] flex flex-col  relative group  min-h-[40vh] max-h-[30vh] rounded-lg overflow-x-hidden"> 
    
  <div class=" aspect-square flex justify-center items-center  h-20vh">
    <img src="${product.url}" class="h-30 object-contain group-hover:scale-140 transition ease-in-out duration-200 ">
    </div>

   
  
    <div class="flex flex-col px-1  flex-1 bg-[#f4f4f6] shadow-xl mt-12  justify-end">
      <h2 class="text-md font-normal"> ${product.title}</h2>
      
    <span class="text-[#f85606] text-sm font-bold"> ${product.price} 
    <i class="fa-regular fa-star ml-10 p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    </span>
    
    
    </div>

    <div  class=" flex justify-center items-center gap-2 bottom-11 left-0 px-2   transform translate-y-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition ease-in-out duration-300 bg-white h-[15%] w-[100%] absolute">
  
      <a href="">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-red-600" id="addToCartBtn">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>  </a>

<div class="w-[100%] flex justify-evenly">
<p>Xl</p>
<p>L</p>
<p>MD</p>
<p>SM</p>
</div>


    </div>

    
    </div>`

  }).join("")
}

renderProducts(tShirts)
renderProducts(tShirts)

let productStars = document.querySelectorAll(".p-star");

productStars.forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("text-yellow-500");
  });
});





tshirtProducts.addEventListener("click", (e)=>{

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


let closeBtn = document.getElementById("closeBtn")


closeBtn.addEventListener("click", ()=>{

  productDetails.classList.add("hidden")
})









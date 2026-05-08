let allProductCards = document.getElementById("allProductCards")
let searchBar = document.getElementById("searchBar")


let allProducts = [

    
    {title: "Next Level Apparel Mens Watch", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/1.png"},
    {title: "Next Level Apparel Mens Watch", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/2.png"},
    {title: "Next Level Apparel Mens Watch", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/3.png"},
    {title: "Next Level Apparel Mens Watch", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/watches/Home-page-watches/4.png"},
   
    {title: "Blue  Mens Shoes", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shoes/Home-page-shoes/1.png"},
    {title: "Red Mens Shoes", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shoes/Home-page-shoes/2.png"},
    {title: "Black Mens Shoes", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shoes/Home-page-shoes/3.png"},
    {title: "Gray Mens Shoes", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shoes/Home-page-shoes/4.png"},
   
    {title: "Gray Mens T-Shirt", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/1.png"},
    {title: "Green Mens T-Shirt", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/2.png"},
    {title: "Yellow Mens T-Shirt", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/3.png"},
    {title: "Black Mens T-Shirt", price : "PKR 500", details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", url: "/src/IMAGES/shirts/Home-page-shirts/4.png"},
   
]


searchBar.addEventListener("input", ()=>{

  let userInput = searchBar.value.toLowerCase()

  if(userInput === ""){
    renderProducts(allProducts)
    return
  }

  let filteredProduct = allProducts.filter((product)=>{
    return product.title.toLowerCase().includes(userInput)
  })

  if(filteredProduct.length === 0){
    allProductCards.innerHTML = `<p>Product Not Found</p>`
   return 
  }

  renderProducts(filteredProduct)
})


function renderProducts(productsArray){

  allProductCards.innerHTML = productsArray.map((product , index)=>{

    return `<div data-index="${index}"  class=" mt-4 col-span-1 row-span-1  bg-[#f4f4f6] flex flex-col  relative group   rounded-lg "> 
    
 <div class=" aspect-square flex justify-center items-center  h-20vh">
    <img src="${product.url}" class="h-50 object-contain group-hover:scale-90 transition ease-in-out duration-200 ">
    </div>

   
  
    <div class="flex flex-col px-1 py-2 h-[10-vh] bg-[#f4f4f6] shadow-xl mt-12">
      <h2 class="text-md font-normal"> ${product.title}</h2>
      
    <span class="text-[#f85606] text-sm font-bold"> ${product.price} 
    <i class="fa-regular fa-star ml-10 p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    </span>
    
    
    </div>

    <div  class=" flex justify-center items-center gap-2 bottom-13 left-0 px-2   transform translate-y-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition ease-in-out duration-300 bg-white h-[12%] w-[100%] absolute">
  
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


renderProducts(allProducts)

renderProducts(allProducts)
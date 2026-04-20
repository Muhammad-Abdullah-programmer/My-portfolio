let tShirts = [

    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/1.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/2.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/3.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/4.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/5.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/6.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/1.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/2.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/3.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/4.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/5.png"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Home-page-watches/6.png"},
   
    
]


let tshirtProducts = document.getElementById("tShirt-all-p")



tshirtProducts.innerHTML = tShirts.map((allProducts)=>{

   return `<div class="p-tshirt-1 col-span-1  bg-[#f4f4f6] flex flex-col  relative group  min-h-[40vh] max-h-[30vh] rounded-lg overflow-x-hidden"> 
    
  <div class=" aspect-square flex justify-center items-center  h-20vh">
    <img src="${allProducts.url}" class="h-30 object-contain group-hover:scale-140 transition ease-in-out duration-200 ">
    </div>

   
  
    <div class="flex flex-col px-1 h-[10-vh] bg-[#f4f4f6] shadow-xl mt-12">
      <h2 class="text-md font-normal"> ${allProducts.title}</h2>
      
    <span class="text-[#f85606] text-sm font-bold"> ${allProducts.price} 
    <i class="fa-regular fa-star ml-10 p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    <i class="fa-regular fa-star p-star"></i>
    </span>
    
    
    </div>

    <div  class=" flex justify-center items-center gap-2 bottom-12 left-0 px-2   transform translate-y-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition ease-in-out duration-300 bg-white h-[15%] w-[100%] absolute">
  
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



let productStars = document.querySelectorAll(".p-star");

productStars.forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("text-yellow-500");
  });
});
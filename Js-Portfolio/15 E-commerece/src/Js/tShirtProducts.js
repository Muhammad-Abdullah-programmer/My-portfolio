let tShirts = [

    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Quartz Analog.jpg"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Quartz Analog.jpg"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Quartz Analog.jpg"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Quartz Analog.jpg"},
    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/watches/Quartz Analog.jpg"},
]


let tshirtProducts = document.getElementById("tShirt-all-p")



tshirtProducts.innerHTML = tShirts.map((allProducts)=>{

   return `<div class="p-tshirt-1 col-span-1 aspect-square bg-[#f4f4f6] flex flex-col relative group "> 
    
  <div class=" bg-amber-400">
    <img src="${allProducts.url}" class="object-cover w-50 h-50">
    </div>

   
  
    <div class="flex flex-col gap-2 bg-amber-700">
      <h2 class="text-lg font-normal"> ${allProducts.title}</h2>
    <span class="text-[#f85606] text-sm font-bold"> ${allProducts.price}</span>
    </div>

    <div  class=" flex justify-center items-center gap-2 bottom-16 left-0 px-2 py-1  transform translate-y-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition ease-in-out duration-300 bg-white h-[10%] w-[100%] absolute">
  
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
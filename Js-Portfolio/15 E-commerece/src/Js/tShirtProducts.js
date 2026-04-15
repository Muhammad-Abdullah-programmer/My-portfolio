let tShirts = [

    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/tshirt-products/image-1.jpg"}
]


let tshirtProducts = document.getElementById("tShirt-all-p")



tshirtProducts.innerHTML = tShirts.map((allProducts)=>{

   return `<div class="p-tshirt-1 col-span-1 aspect-square bg-[#f4f4f6] flex flex-col relative group"> 
    
  
    <img src="${allProducts.url}">

   
  
    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-normal"> ${allProducts.title}</h2>
    <span class="text-[#f85606] text-2xl font-bold"> ${allProducts.price}</span>
    </div>

    <div  class=" bottom-16 left-2 px-2 py-1 shadow transform translate-y-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition ease-in-out duration-300 bg-white h-[10%] absolute">
      <p> Size </p>
    </div>

    </div>`
}).join("")
let tShirts = [

    {title: "Next Level Apparel Mens", price : "PKR 200", url: "/src/IMAGES/tshirt-products/image-1.jpg"}
]


let tshirtProducts = document.getElementById("tShirt-all-p")



tshirtProducts.innerHTML = tShirts.map((allProducts)=>{

   return `<div class="p-tshirt-1 col-span-1 aspect-square bg-blue-700"> 
    
  
    <img src="${allProducts.url}"

    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-normal"> ${allProducts.title}</h2>
    <span class="text-[#f85606] text-2xl font-bold"> ${allProducts.price}</span>
    </div>
    </div>`
}).join("")
let nextBtn = document.getElementById("nextBtn")
let productContainer = document.getElementById("productContainer")

const products = [

    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"
    }
]

let start = 0
let limit = 6


productContainer.innerHTML = products.map((allProducts)=>{

    return `<div class=" hover:shadow-lg hover:bg-[#f4f4f6]  flex flex-col gap-2 p-1 group">
    
   
    <img src="${allProducts.image}" class=" w-50 h-60 object-cover  group-hover:scale-110 transition duration-100 ease-in-out"/>
    <div class=" mt-5 mb-2"> <h1 class="group-hover:translate-x-1/5 transition ease-in-out duration-200">${allProducts.title}</h1></div
    <div> <span class="group-hover:translate-x-1/5 transition ease-in-out duration-200 font-semibold text-2xl text-[#f85606]">${allProducts.price}</span>  </div>
    
    </div>`
})
let nextBtn = document.getElementById("nextBtn")
let backBtn = document.getElementById("backBtn")
let productContainer = document.getElementById("productContainer")

const products = [

    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"

    },
    
    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"
    },

    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"
    },

    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"
    },

    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"
    },

    {title: "Watch 1", image: "/src/IMAGES/watches/hero-watch.jpg",
     price: "$100"
    },


     {title: "Watch 1", image: "/src/IMAGES/shirts/hero-shirt-removebg-preview.png",
     price: "$100"
    },
      {title: "Watch 1", image: "/src/IMAGES/shirts/hero-shirt-removebg-preview.png",
     price: "$100"
    },
      {title: "Watch 1", image: "/src/IMAGES/shirts/hero-shirt-removebg-preview.png",
     price: "$100"
    },
      {title: "Watch 1", image: "/src/IMAGES/shirts/hero-shirt-removebg-preview.png",
     price: "$100"
    },
      {title: "Watch 1", image: "/src/IMAGES/shirts/hero-shirt-removebg-preview.png",
     price: "$100"
    },
      {title: "Watch 1", image: "/src/IMAGES/shirts/hero-shirt-removebg-preview.png",
     price: "$100"
    },

]

let start = 0
let limit = 6

   
let renderProduct = ()=>{

    let slicedProducts = products.slice(start, start + limit)

     productContainer.innerHTML = slicedProducts.map((allProducts)=>{

    return `<div class=" hover:shadow-lg   flex flex-col gap-2 p-1 group overflow-hidden relative">
    
   
    <img src="${allProducts.image}" class=" w-50 h-60 object-cover  group-hover:scale-110 transition duration-100 ease-in-out"/>


    <div class=" mt-5 mb-2"> <h1 class="group-hover:translate-x-8 transition ease-in-out duration-200 hover:bg-[#f4f4f6]">${allProducts.title}</h1></div>



    <div class="hover:bg-[#f4f4f6] group-hover:translate-x-8 transition ease-in-out duration-200"> <span class=" font-semibold text-2xl text-[#f85606]">${allProducts.price}</span>  </div>
    

<div class="cart-div bg-[#f4f4f6] flex flex-col items-center gap-4 absolute top-20 -right-12 group-hover:-translate-x-11  py-2 px-2  opacity- group-hover:opacity-100  transition ease-in-out duration-300">

    <!-- Search Bar  -->
       <div class="search-bar">

       <a href="">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-red-600" id="addToCartBtn">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>  </a>
       </div>

       <div>
      <a href="#">  <i class="fa-solid fa-info text-red-400 text-3xl"></i> </a>
       </div>
    
       </div>
      


          </div>
    
   
        </div>`
}).join("")
}

nextBtn.addEventListener("click", (e)=>{

    e.preventDefault()

if(start +  limit <products.length){

    start += limit
    renderProduct()
}


})


backBtn.addEventListener("click", (e)=>{

    e.preventDefault()

    if(start - limit >= 0){
        start -= limit
        renderProduct()
    }
})


renderProduct()
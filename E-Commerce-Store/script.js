/* Theme Toggle */

const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click",

    function(){

        document.body.classList.toggle("dark-mode");

    });

}

/* Products */

const products = [

{
    id:1,

    name:"Wireless Headphones",

    price:2999,

    image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
    id:2,

    name:"Smart Watch",

    price:4999,

    image:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},

{
    id:3,

    name:"Running Shoes",

    price:3499,

    image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
    id:4,

    name:"Gaming Keyboard",

    price:1999,

    image:
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
}

];

/* Product Container */

const productContainer =
document.getElementById("productContainer");

/* Display Products */

function displayProducts(items){

    if(!productContainer) return;

    productContainer.innerHTML = "";

    items.forEach(product => {

        const card =
        document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `

        <img src="${product.image}">

        <h2>${product.name}</h2>

        <h3>₹${product.price}</h3>

        <button onclick="addToCart(${product.id})">

        Add To Cart

        </button>

        `;

        productContainer.appendChild(card);

    });

}

displayProducts(products);

/* Search */

const searchInput =
document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup",

    function(){

        const value =
        searchInput.value.toLowerCase();

        const filtered =
        products.filter(product =>

            product.name
            .toLowerCase()
            .includes(value)

        );

        displayProducts(filtered);

    });

}

/* Cart */

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

/* Add To Cart */

function addToCart(id){

    const product =
    products.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    alert("Product Added To Cart!");

}

/* Cart Display */

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

function displayCart(){

    if(!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        const div =
        document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `

        <div>

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

        </div>

        <button onclick="removeItem(${item.id})">

        Remove

        </button>

        `;

        cartItems.appendChild(div);

    });

    totalPrice.innerText =
    `Total: ₹${total}`;

}

displayCart();

/* Remove Item */

function removeItem(id){

    cart =
    cart.filter(item => item.id !== id);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    displayCart();

}

/* Checkout */

const checkoutForm =
document.getElementById("checkoutForm");

if(checkoutForm){

    checkoutForm.addEventListener("submit",

    function(event){

        event.preventDefault();

        alert("Order Placed Successfully!");

        localStorage.removeItem("cart");

        window.location.href =
        "index.html";

    });

}

/* Login */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",

    function(event){

        event.preventDefault();

        alert("Login Successful!");

    });

}

/* Animated Counters */

function animateValue(id,start,end,duration){

    const obj =
    document.getElementById(id);

    if(!obj) return;

    let range = end - start;

    let current = start;

    let increment =
    end > start ? 1 : -1;

    let stepTime =
    Math.abs(Math.floor(duration / range));

    let timer =
    setInterval(function(){

        current += increment;

        obj.textContent = current;

        if(current == end){

            clearInterval(timer);

        }

    },stepTime);

}

animateValue("productsCount",0,500,2000);

animateValue("usersCount",0,1200,2000);

animateValue("ordersCount",0,3500,2000);
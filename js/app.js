/* ===== App.js: Basic front-end logic for Foodie ===== */

// A dummy list of menu items to simulate a backend response
const dummyMenu = [
  { "id": 1, "name": "Margherita Pizza", "price": 199, "image": "https://media.istockphoto.com/id/910195988/photo/pizza-margarita.jpg?s=612x612&w=0&k=20&c=ZPlovEsbFWJq6M3kLR98u0eo8NCYiFEuRjkMKQCwH40=", "category": "Pizza" },
  { "id": 2, "name": "Pepperoni Pizza", "price": 249, "image": "https://media.istockphoto.com/id/1181651561/photo/oven-baked-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=YFV0_FvKZgm4g-LLBrOomNgFZSkMn6BQO9Tsxbx_xmk=", "category": "Pizza" },
  { "id": 3, "name": "Veggie Burger", "price": 149, "image": "https://media.istockphoto.com/id/1331109186/photo/close-up-of-a-veggie-burger-with-copy-space.jpg?s=612x612&w=0&k=20&c=I9QgB8ar8CF8VmkN4U9gleYBWwADSl-tCYQ86OH679w=", "category": "Burger" },
  { "id": 4, "name": "Chicken Burger", "price": 199, "image": "https://media.istockphoto.com/id/521207406/photo/southern-country-fried-chicken-sandwich.jpg?s=612x612&w=0&k=20&c=XfttLSxEO2YAjop4Gy0CIb1L5N_OK1tTKxmkiPr3QD8=", "category": "Burger" },
  { "id": 5, "name": "Paneer Wrap", "price": 129, "image": "https://media.istockphoto.com/id/665807568/photo/indian-popular-street-food-called-veg-franky-made-using-vegetables-wrapped-inside-paratha.jpg?s=612x612&w=0&k=20&c=QC_F7txTVD8mzbqFkvfuFyAXXXr1c1asSWdPfmkOams=", "category": "Wrap" },
  { "id": 6, "name": "Chicken Wrap", "price": 159, "image": "https://media.istockphoto.com/id/888366454/photo/chicken-wrap.jpg?s=612x612&w=0&k=20&c=smy2oTsWnDDDEaS_Rkn6Jj-7KXll4FlO_aYR9BoKcu0=", "category": "Wrap" },
  { "id": 7, "name": "French Fries", "price": 79, "image": "https://media.istockphoto.com/id/1443993866/photo/french-fries-with-ketchup-and-cocktail-sauce.jpg?s=612x612&w=0&k=20&c=URpOsc5tds8tOfxK4ZO3Tkx6mwLho7fL_pTBSNdziBU=", "category": "Snacks" },
  { "id": 8, "name": "Onion Rings", "price": 89, "image": "https://media.istockphoto.com/id/185258609/photo/cooked-onion-rings-with-dipping-sauce-in-a-white-cup.jpg?s=612x612&w=0&k=20&c=L3YxKua51znCZWzW9cG3rGShsBwVWyghvMiJNjW0fMw=", "category": "Snacks" },
  { "id": 9, "name": "Coke", "price": 49, "image": "https://media.istockphoto.com/id/499208007/photo/coca-cola-classic-in-a-glass-bottle.jpg?s=612x612&w=0&k=20&c=hQ2ub4bQdSRjPkreJBMHT5lwZdXyyRd4dtf8w0NWVUg=", "category": "Beverages" },
  { "id": 10, "name": "Pepsi", "price": 49, "image": "https://media.istockphoto.com/id/185266948/photo/glass-of-cola-with-ice.jpg?s=612x612&w=0&k=20&c=-hdNtaTF-XXjMEop_AwDyWXMv6A90zf6PpZLBVMbMcw=", "category": "Beverages" },
  { "id": 11, "name": "Chocolate Shake", "price": 99, "image": "https://media.istockphoto.com/id/477812744/photo/chocolate-milkshake-on-rustic-wood-table.jpg?s=612x612&w=0&k=20&c=sUQI2qNzYorRM8lwDeXiwoGA6gNFKSTOXaytWY1N39w=", "category": "Shakes" },
  { "id": 12, "name": "Vanilla Shake", "price": 99, "image": "https://media.istockphoto.com/id/477470798/photo/ice-cream-milkshake-with-cookie-and-crumbs.jpg?s=612x612&w=0&k=20&c=lIXytK6VEhW6ObuwXrrftrcK3UHTWGesxkSa087E7Yc=", "category": "Shakes" },
  { "id": 13, "name": "Caesar Salad", "price": 149, "image": "https://media.istockphoto.com/id/1211166166/photo/caesar-salad-with-grilled-chicken-and-croutons-of-bread.jpg?s=612x612&w=0&k=20&c=anNWizfxset3nOpS9zxGU1PCgn6dBwILhqYIED4qxYY=", "category": "Salads" },
  { "id": 14, "name": "Greek Salad", "price": 159, "image": "https://media.istockphoto.com/id/1461256163/photo/feta-cheese-salad-on-wooden-table.jpg?s=612x612&w=0&k=20&c=JISWAr9aTfUdLkgoR2rSWQN-ZzfQvOrhG9stauCUqSE=", "category": "Salads" },
  { "id": 15, "name": "Spaghetti Bolognese", "price": 249, "image": "https://media.istockphoto.com/id/1011868070/photo/traditional-italian-meal-spaghetti-alla-bolognese.jpg?s=612x612&w=0&k=20&c=wpQ2yybuIGo139nIXksV7Nb0pPviDzGL_GD4iEkgFnU=", "category": "Pasta" },
  { "id": 16, "name": "Mac & Cheese", "price": 199, "image": "https://media.istockphoto.com/id/493996118/photo/casserole-with-pasta.jpg?s=612x612&w=0&k=20&c=D3qFgRXaxYu7J2mjPK9tClp3z3NmucK_kFST8QAr-ik=", "category": "Pasta" },
  { "id": 17, "name": "Grilled Sandwich", "price": 129, "image": "https://media.istockphoto.com/id/1412389223/photo/grilled-sandwich-with-vegetables-and-mozzarella-on-wooden-board.jpg?s=612x612&w=0&k=20&c=GGWIteWUmF8Md8xPXa_yLGTeCwHExkWAwbUPfrgikmM=", "category": "Snacks" },
  { "id": 18, "name": "Club Sandwich", "price": 159, "image": "https://media.istockphoto.com/id/614135582/photo/ham-sandwich.jpg?s=612x612&w=0&k=20&c=-t22w7hmyHs_0oND9xlc2AAJW6vZoX-W8xG-VREz0hE=", "category": "Snacks" },
  { "id": 19, "name": "Mango Smoothie", "price": 119, "image": "https://media.istockphoto.com/id/1165087544/photo/mango-smoothies.jpg?s=612x612&w=0&k=20&c=RlSGiRx7YiGMuOM7h7st4K6o1tyv2VL0bfZ0Us0WVTc=", "category": "Beverages" },
  { "id": 20, "name": "Strawberry Smoothie", "price": 119, "image": "https://media.istockphoto.com/id/576740204/photo/strawberry-smoothie.jpg?s=612x612&w=0&k=20&c=eqIe1_itBOqQmtV_KtPduPENbAZWsuM5Q9-qmLp0MAE=", "category": "Beverages" }
];


// A simple client-side cart object
let cart = JSON.parse(localStorage.getItem("foodieCart")) || [];

// ======= Utility Functions =======

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("foodieCart", JSON.stringify(cart));
}

// Render menu items on index.html
function renderMenu() {
  const menuContainer = document.getElementById("menu-items");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";
  dummyMenu.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="food-card-body">
        <h5>${item.name}</h5>
        <p class="price">₹${item.price}</p>
        <button class="btn btn-primary btn-sm add-to-cart" data-id="${item.id}">Add to Cart</button>
      </div>
    `;
    menuContainer.appendChild(card);
  });

  // Attach add-to-cart listeners
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });
}

// Add item to cart
function addToCart(id) {
  const item = dummyMenu.find(m => m.id === id);
  if (!item) return;

  const existing = cart.find(ci => ci.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  alert(`${item.name} added to cart!`);
}

// Render cart table on cart.html
function renderCart() {
  const cartBody = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  if (!cartBody) return;

  cartBody.innerHTML = "";
  let total = 0;
  cart.forEach((ci, index) => {
    const subtotal = ci.price * ci.qty;
    total += subtotal;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ci.name}</td>
      <td>
        <input type="number" min="1" class="form-control form-control-sm qty-input" data-index="${index}" value="${ci.qty}">
      </td>
      <td>₹${ci.price}</td>
      <td>₹${subtotal}</td>
      <td><button class="btn btn-danger btn-sm remove-item" data-index="${index}">X</button></td>
    `;
    cartBody.appendChild(row);
  });

  if (cartTotalEl) cartTotalEl.textContent = `₹${total}`;

  // Quantity change
  document.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const i = parseInt(e.target.dataset.index);
      cart[i].qty = parseInt(e.target.value);
      saveCart();
      renderCart();
    });
  });

  // Remove item
  document.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = parseInt(btn.dataset.index);
      cart.splice(i, 1);
      saveCart();
      renderCart();
    });
  });
}

// Handle checkout form submission
function handleCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    if (!address || !payment) {
      alert("Please fill in all checkout details.");
      return;
    }

    // Placeholder for AJAX call to server to create an order:
    // fetch('/api/orders', { method: 'POST', body: JSON.stringify({ cart, address, payment }) })

    alert("Order placed successfully!");
    cart = [];
    saveCart();
    window.location.href = "index.html";
  });
}

// ======= Run on page load =======
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCart();
  handleCheckout();
});

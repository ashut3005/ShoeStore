function handleUserClick(event) {
  event.preventDefault(); // Stop default link behavior
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (user) {
    // Already logged in
    window.location.href = 'dashboard.html';
  } else {
    // Not logged in
    window.location.href = 'login.html';
  }
}


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

// Function to add items to the cart
function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Create a new item object
  const newItem = {
      name: productName,
      price: productPrice,
      quantity: 1
  };

  // Check if the item is already in the cart
  const existingItemIndex = cart.findIndex(item => item.name === productName);

  if (existingItemIndex > -1) {
      // Item already exists, update the quantity
      cart[existingItemIndex].quantity += 1;
  } else {
      // Item doesn't exist, add to the cart
      cart.push(newItem);
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${productName} has been added to your cart!`);
}

// Function to load cart items when the cart page is accessed
function loadCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <p>${item.name}</p>
          <p>$${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
      `;
      cartContainer.appendChild(cartItem);
  });
}
window.addEventListener('load', () => {
  localStorage.removeItem('cart'); // Remove old cart from localStorage
});
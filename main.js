const welcomingPage = document.querySelector('.welcomingPageLayout');
const productsLayouts = document.querySelector('.productsLayouts');

const displayCategoryMenu = document.querySelector('#displayCategoryMenu');
const categoryBtn = document.querySelector('#categoryBtn');
const allProductsBtn = document.querySelector('#allProductsBtn');

const cartBtn = document.querySelector('#cartBtn');
const mainSelect = document.querySelector('.mainSelect');

let cart = [];
let productJSON = [];

function fetchAndStoreData() {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      productJSON = data;
      mainPage(data);
    });
}

fetchAndStoreData();

allProductsBtn.addEventListener('click', () => {
  if (!mainSelect.classList.contains('main')) {
    return
  } else {
    mainSelect.innerHTML = `
    <h2 style="color: white; text-align: center; font-size: 40px; margin: 50px 0px;">All products at an unbelievable price</h2>
    <section class="productsLayouts">
      <div class="bed">
        <h3 class="productCategory">Bedroom</h3>
        <div class="cardBed"></div>
      </div>
      <div class="kitchen">
        <h3 class="productCategory">Kitchen</h3>
        <div class="cardKitchen"></div>
      </div>
      <div class="bathroom">
        <h3 class="productCategory">Bathroom</h3>
        <div class="cardBathroom"></div>
      </div>
      <div class="decorative">
        <h3 class="productCategory">Decorative</h3>
        <div class="cardDecorative"></div>
      </div>
    </section>
  `;

  mainSelect.className = 'main';
  mainPage(productJSON);
  } 
  }) 

 
function mainPage(data) {
  
  const bedroom = document.querySelector('.cardBed');
  const kitchen = document.querySelector('.cardKitchen');
  const bathroom = document.querySelector('.cardBathroom');
  const decorative = document.querySelector('.cardDecorative');

  displayProducts(bedroom, data, 'Bedroom');
  displayProducts(kitchen, data, 'Kitchen');
  displayProducts(bathroom, data, 'Bathroom');
  displayProducts(decorative, data, 'Decoratives');
}

function displayProducts(container, data, category) {
  const items = data.filter(item => item.category === category);
  items.forEach(prod => {
    container.innerHTML += `
      <div class="card">
        <img src="./img/product-test.png" alt="Product Image" />
        <div class="card-content">
          <div class="card-title">${prod.name}</div>
          <div class="card-description">${prod.description}</div>
          <div class="price">$${prod.price}</div>
          <button class="btn" onclick="addTocart(${prod.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

categoryBtn.addEventListener('click', () => {
  displayCategoryMenu.innerHTML = displayCategoryMenu.innerHTML ? '' : `
    <nav>
      <ul class="categoryMenu">
        <li><button id='displayBedroomProducts'>Bedroom</button></li>
        <li><button id='displayKitchenProducts'>Kitchen</button></li>
        <li><button id='displayBathroomProducts'>Bathroom</button></li>
        <li><button id='displayDecorativesProducts'>Decoratives</button></li>
      </ul>
    </nav>
  `;
});

document.body.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.matches('#displayBedroomProducts, #displayKitchenProducts, #displayBathroomProducts, #displayDecorativesProducts')) return;

  welcomingPage.innerHTML = '';
  mainSelect.innerHTML = '';
  mainSelect.className = 'main';

  const categoryMap = {
    'displayBedroomProducts': 'Bedroom',
    'displayKitchenProducts': 'Kitchen',
    'displayBathroomProducts': 'Bathroom',
    'displayDecorativesProducts': 'Decoratives'
  };

  const category = categoryMap[target.id];
  mainSelect.innerHTML = `
    <div class="productsCategoryLayout">
      <h3>${category}</h3>
      <div class="cardDisplay"></div>
    </div>
  `;

  const cardDisplay = document.querySelector('.cardDisplay');
  const filtered = productJSON.filter(product => product.category === category);
  filtered.forEach(product => {
    cardDisplay.innerHTML += `
      <div class="card">
        <img src="./img/product-test.png" alt="Product Image" />
        <div class="card-content">
          <div class="card-title">${product.name}</div>
          <div class="card-description">${product.description}</div>
          <div class="price">$${product.price}</div>
          <button class="btn" onclick="addTocart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
});

function addTocart(id) {
  const product = productJSON.find(prod => prod.id === id);
  const exist = cart.find(item => item.id === id);

  if (exist) {
    exist.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  console.log(cart);
}

cartBtn.addEventListener('click', () => {
  if (!cart.length) {
    alert('cart is empty!');
    return;
  }

  mainSelect.className = 'main';
  mainSelect.innerHTML = `
    <div class="cart-container">
      <button class="checkout-btn" onclick="checkout()">Finalizar Compra</button>
    </div>
  `;

  const cartContainer = document.querySelector('.cart-container');
  cart.forEach(product => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="./img/product-test.png" alt="Product">
        <div class="item-details">
          <div class="item-name">${product.name}</div>
          <div class="item-price">$${product.price * product.quantity}</div>
          <div class="item-quantity">Quantity: ${product.quantity}</div>
        </div>
      </div>
    `;
  });
});

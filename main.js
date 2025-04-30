const welcomingPage = document.querySelector('.welcomingPageLayout');
const productsLayouts = document.querySelector('.productsLayouts');

const displayCategoryMenu = document.querySelector('#displayCategoryMenu');
const categoryBtn = document.querySelector('#categoryBtn');
const allProductsBtn = document.querySelector('#allProductsBtn');

const displayKitchenProducts = document.querySelector('#displayKitchenProducts');
const displayDecorativesProducts = document.querySelector('#displayDecorativesProducts');
const displayBedroomProducts = document.querySelector('#displayBedroomProducts');
const displayBathroomProducts = document.querySelector('#displayBathroomProducts');

const cartBtn = document.querySelector('#cartBtn');
const mainSelect = document.querySelector('.mainSelect')


let cart = [];
let productJSON = [];

function fetchAndStoreData() {
  fetch('products.json')
      .then ( response => response.json())
      .then ( data => {
          displayProducts(data);
          productJSON = data;
          console.log(productJSON);
          mainPage(data);
      })
}

fetchAndStoreData()


allProductsBtn.addEventListener('click', () => {

  if (productsLayouts.className === 'productsCategoryLayout'){

      productsLayouts.innerHTML = '';
      productsLayouts.className = 'productsLayouts';
      productsLayouts.innerHTML = 
      `
      <div class="bed">
                <h3 class="productCategory">Bedroom</h3>
                <div class="cardBed">
                   
                </div>
            </div>
            <div class="kitchen">
                <h3 class="productCategory">Kitchen</h3>
                <div class="cardKitchen">
                    
                </div>
            </div>
            <div class="bathroom">
                <h3 class="productCategory">Bathroom</h3>
                <div class="cardBath">
                    
                </div>
            </div>
            <div class="decorative">
                <h3 class="productCategory">Decorative</h3>
                <div class="cardDeco">
                    
                    </div>
                </div>
            </div>
      `;

     mainPage(productJSON);
 }
      
})

function mainPage (data) {

      const bedroom = document.querySelector('.cardBed');
      const kitchen = document.querySelector('.cardKitchen');
      const bathroom = document.querySelector('.cardBath');
      const decorative = document.querySelector('.cardDeco');

      const bedroomItems = data.filter(item => item.category === "Bedroom");
      console.log(bedroomItems);
      bedroomItems.forEach( prod => {
      bedroom.innerHTML += 
      `
              
              <div class="card">
                  <img src="./img/product-test.png" alt="Product Image" />
                  <div class="card-content">
                    <div class="card-title">${prod.name}</div>
                    <div class="card-description">${prod.description}</div>
                    <div class="price">$${prod.price}</div>
                    <button class="btn" onclick="addTocart(${prod.id})">Add to Cart</button>
                  </div>
              </div>
      ` ;
  })
  const kitchenItems = data.filter(item => item.category ===  'Kitchen')
  kitchenItems.forEach( prod => {
      kitchen.innerHTML += 
  `
          
          <div class="card">
              <img src="./img/product-test.png" alt="Product Image" />
              <div class="card-content">
                <div class="card-title">${prod.name}</div>
                <div class="card-description">${prod.description}</div>
                <div class="price">$${prod.price}</div>
                <button class="btn" onclick="addTocart(${prod.id})">Add to Cart</button>
              </div>
          </div>
  `
  })
  const bathroomItems = data.filter(item => item.category ===  'Bathroom')
  bathroomItems.forEach( prod => {
      bathroom.innerHTML += 
  `
          
          <div class="card">
              <img src="./img/product-test.png" alt="Product Image" />
              <div class="card-content">
                <div class="card-title">${prod.name}</div>
                <div class="card-description">${prod.description}</div>
                <div class="price">$${prod.price}</div>
                <button class="btn" onclick="addTocart(${prod.id})">Add to Cart</button>
              </div>
          </div>
  `
  })
  const decoItems = data.filter(item => item.category ===  'Decoratives')
  decoItems.forEach( prod => {
      decorative.innerHTML += 
  `
         
          <div class="card">
              <img src="./img/product-test.png" alt="Product Image" />
              <div class="card-content">
                <div class="card-title">${prod.name}</div>
                <div class="card-description">${prod.description}</div>
                <div class="price">$${prod.price}</div>
                <button class="btn" onclick="addTocart(${prod.id})">Add to Cart</button>
              </div>
          </div>
  `
  })
}

categoryBtn.addEventListener('click', () => {
    if (displayCategoryMenu.innerHTML !== '') {
        displayCategoryMenu.innerHTML = '';
    } else {
        displayCategoryMenu.innerHTML = 
    `
    <nav >
        <ul class="categoryMenu">
            <li><button id='displayBedroomProducts'>Bedroom</button></li>
            <li><button id='displayKitchenProducts'>Kitchen</button></li>
            <li><button id='displayBathroomProducts'>Bathroom</button></li>
            <li><button id='displayDecorativesProducts'>Decoratives</button></li>
        </ul>
    </nav>
    `;
    }
    
})

function displayProducts (data) {
document.body.addEventListener('click', (e) => {
    if (e.target.matches('#displayBedroomProducts')) {
      welcomingPage.innerHTML = '';
      productsLayouts.className = 'productsCategoryLayout'
      productsLayouts.innerHTML = 
        `
        <div class="productsBedroom">
            <h3>Bedroom</h3>
            <div class="cardbed">

            </div>
        `
    const cardDisplay = document.querySelector('.cardbed');

      const bedroomProducts = data.filter(products => products.category === "Bedroom");
      console.log(bedroomProducts);
      bedroomProducts.forEach(product => {
        cardDisplay.innerHTML += 
        `
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
      
    }
    else if (e.target.matches('#displayKitchenProducts')) {
        welcomingPage.innerHTML = '';
      productsLayouts.className = 'productsCategoryLayout'
      productsLayouts.innerHTML = 
        `
        <div class="productsKitchen">
            <h3>Kitchen</h3>
            <div class="cardbed">

            </div>
        `
    const cardDisplay = document.querySelector('.cardbed');

      const kitchenProducts = data.filter(products => products.category === "Kitchen");
      console.log(kitchenProducts);
      kitchenProducts.forEach(product => {
        cardDisplay.innerHTML += 
        `
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
    }
    else if (e.target.matches('#displayBathroomProducts')) {
        welcomingPage.innerHTML = '';
      productsLayouts.className = 'productsCategoryLayout'
      productsLayouts.innerHTML = 
        `
        <div class="productsBathroom">
            <h3>Bathroom</h3>
            <div class="cardbed">

            </div>
        `
    const cardDisplay = document.querySelector('.cardbed');

      const bathroomProducts = data.filter(products => products.category === "Bathroom");
      console.log(bathroomProducts);
      bathroomProducts.forEach(product => {
        cardDisplay.innerHTML += 
        `
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
    }
    else if (e.target.matches('#displayDecorativesProducts')) {
        welcomingPage.innerHTML = '';
        productsLayouts.className = 'productsCategoryLayout'
        productsLayouts.innerHTML = 
          `
          <div class="productsDecoratives">
              <h3>Decoratives</h3>
              <div class="cardbed">
  
              </div>
          `
      const cardDisplay = document.querySelector('.cardbed');
  
        const decorativesProducts = data.filter(products => products.category === "Decoratives");
        console.log(decorativesProducts);
        decorativesProducts.forEach(product => {
          cardDisplay.innerHTML += 
          `
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
    
}});
}

function addTocart (id) {

            const idProduct = productJSON.find(prod => prod.id === id);
            const existInCart = cart.find(item => item.id === id);
            if (existInCart) {
              existInCart.quantity++;
            } else {
              cart.push({...idProduct , quantity: 1});
            }
            console.log(cart);
    }

cartBtn.addEventListener('click', () => {
  
    if (cart.length === 0) {

    alert('cart is empty!')

  } else {

    mainSelect.className = 'main'

    const main = document.querySelector('.main');

    main.innerHTML = 
    `
    <div class="cart-container">
                

      <button class="checkout-btn" onclick="checkout()">Finalizar Compra</button>

    </div> 
    `;
    console.log(cart);
    cart.forEach ( product => {

      const cartContainer = document.querySelector('.cart-container');

      cartContainer.innerHTML += 
      `
        <div class="cart-item">
            <img src="./img/product-test.png" alt="Product">
            <div class="item-details">
                <div class="item-name">${product.name}</div>
                <div class="item-price">$${product.price * product.quantity}</div>
                <div class="item-price">${product.quantity}</div>
            </div>
        </div>
      `;
      })
  }
  
  
})
    


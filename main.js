const welcomingPage = document.querySelector('.welcomingPageLayout');
const productsLayouts = document.querySelector('.productsLayouts');

const bedroom = document.querySelector('.cardBed')
const kitchen = document.querySelector('.cardKitchen')
const bathroom = document.querySelector('.cardBath')
const decorative = document.querySelector('.cardDeco')

const displayCategoryMenu = document.querySelector('#displayCategoryMenu');
const categoryBtn = document.querySelector('#categoryBtn');
const allProductsBtn = document.querySelector('#allProductsBtn');

const displayKitchenProducts = document.querySelector('#displayKitchenProducts');
const displayDecorativesProducts = document.querySelector('#displayDecorativesProducts');
const displayBedroomProducts = document.querySelector('#displayBedroomProducts');
const displayBathroomProducts = document.querySelector('#displayBathroomProducts');

fetch('products.json')
    .then ( response => response.json())
    .then ( data => {
        displayProducts(data);
        mainPage(data)
        console.log(data);
    })

mainPage = (data) => {
        productsLayouts.className = 'productsLayouts'
        const bedroomItems = data.filter(prod => prod.category === 'Bedroom')
        console.log(bedroomItems)
            bedroomItems.forEach( prod => {
            bedroom.innerHTML += 
            `
                    
                    <div class="card">
                        <img src="./img/product-test.png" alt="Product Image" />
                        <div class="card-content">
                          <div class="card-title">${prod.name}</div>
                          <div class="card-description">${prod.description}</div>
                          <div class="price">$${prod.price}</div>
                          <a href="#" class="btn">Add to Cart</a>
                        </div>
                    </div>
            ` ;
        })
        const kitchenItems = data.filter (prod => prod.category === 'Kitchen')
        kitchenItems.forEach( prod => {
            kitchen.innerHTML += 
        `
                
                <div class="card">
                    <img src="./img/product-test.png" alt="Product Image" />
                    <div class="card-content">
                      <div class="card-title">${prod.name}</div>
                      <div class="card-description">${prod.description}</div>
                      <div class="price">$${prod.price}</div>
                      <a href="#" class="btn">Add to Cart</a>
                    </div>
                </div>
        `
        })
        const bathroomItems = data.filter (prod => prod.category === 'Bathroom')
        bathroomItems.forEach( prod => {
            bathroom.innerHTML += 
        `
                
                <div class="card">
                    <img src="./img/product-test.png" alt="Product Image" />
                    <div class="card-content">
                      <div class="card-title">${prod.name}</div>
                      <div class="card-description">${prod.description}</div>
                      <div class="price">$${prod.price}</div>
                      <a href="#" class="btn">Add to Cart</a>
                    </div>
                </div>
        `
        })
        const decoItems = data.filter (prod => prod.category === 'Decoratives')
        decoItems.forEach( prod => {
            decorative.innerHTML += 
        `
               
                <div class="card">
                    <img src="./img/product-test.png" alt="Product Image" />
                    <div class="card-content">
                      <div class="card-title">${prod.name}</div>
                      <div class="card-description">${prod.description}</div>
                      <div class="price">$${prod.price}</div>
                      <a href="#" class="btn">Add to Cart</a>
                    </div>
                </div>
        `
        })
    }

allProductsBtn.addEventListener('click', () => {
    productsLayouts.innerHTML = '',
    mainPage();
})

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
                          <a href="#" class="btn">Add to Cart</a>
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
                          <a href="#" class="btn">Add to Cart</a>
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
                          <a href="#" class="btn">Add to Cart</a>
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
                            <a href="#" class="btn">Add to Cart</a>
                          </div>
                      </div>
                        
          `;
        });
    
}});
}


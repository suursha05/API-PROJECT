const products = [
  {
    id: 1,
    name: "sweet-machine",
    price: 35000,
    description: "Rechargable",
    image: "/IMAGES/PRODUCTS/machine4.jpg"
  },
  {
    id: 2,
    name: "Popcorn - machine",
    price: 50000,
    description: "Durable",
    image: "/IMAGES/PRODUCTS/machine1.webp"
  },
  {
    id: 3,
    name: "Popcorn - machine",
    price: 12000,
    description: "Durable",
    image: "/IMAGES/PRODUCTS/machine2.avif"
  },
  {
    id: 4,
    name: "Popcorn - machine",
    price: 17000,
    description: "Rechargable",
    image: "/IMAGES/PRODUCTS/machine3.jpeg"
  },
  {
    id: 5,
    name: " Olive Popcorn kernel",
    price: 7000,
    description: "Fresh",
    image: "/IMAGES/PRODUCTS/kernel1.webp"
  },
  {
    id: 6,
    name: " Butterfly Popcorn kernel",
    price: 7000,
    description: "Fresh",
    image: "/IMAGES/PRODUCTS/kernel2.webp"
  },
  {
    id: 7,
    name: " Yellow Popcorn kernel",
    price: 6000,
    description: "Fresh",
    image: "/IMAGES/PRODUCTS/kernel3.webp"
  },
  {
    id: 8,
    name: " Home Popcorn kernels",
    price: 1200,
    description: "Fresh",
    image: "/IMAGES/PRODUCTS/kernel4.webp"
  },
  {
    id: 9,
    name: "carton package",
    price: 1200,
    description: "Strong",
    image: "/IMAGES/PRODUCTS/packaging 4.avif"
  },
  {
    id: 10,
    name: "Cinima-Package",
    price: 1500,
    description: "medium",
    image: "/IMAGES/PRODUCTS/packaging1.jpg"
  },
  {
    id: 11,
    name: "CInima Package",
    price: 1600,
    description: "Stronger",
    image: "/IMAGES/PRODUCTS/packaging3.jpg"
  },
  {
    id: 12,
    name: "Transperent-Packaging",
    price: 1500,
    description: "Good",
    image: "/IMAGES/PRODUCTS/packaging8.webp"
  },
  {
    id: 13,
    name: "Cheese-Flavour",
    price: 2000,
    description: "Cheesy treat",
    image: "/IMAGES/PRODUCTS/flavour2.jpg"
  },
  {
    id: 14,
    name: "Caramel-flavour",
    price: 2700,
    description: "Sweet treat",
    image: "/IMAGES/PRODUCTS/flavour3.jpg"
  },
  {
    id: 15,
    name: "Cheese-flavour",
    price: 2500,
    description: "Cheesy treat",
    image: "/IMAGES/PRODUCTS/gflavour1.jpg"
  },
  {
    id: 16,
    name: "Gournment-Flavour",
    price: 3000,
    description: "spicy treat",
    image: "/IMAGES/PRODUCTS/gflavour2.jpg"
  },
  {
    id: 17,
    name: "Storage Bucket",
    price: 1950,
    description: "stainless",
    image: "/IMAGES/PRODUCTS/storage1.png"
  },
  {
    id: 18,
    name: "Storage Bucket",
    price: 2000,
    description: "stainless",
    image: "/IMAGES/PRODUCTS/storage2.png"
  },
  {
    id: 19,
    name: "Storage cans",
    price: 1200,
    description: "Rubber",
    image: "/IMAGES/PRODUCTS/storage3.avif"
  },
  {
    id: 20,
    name: "Storage-container",
    price: 1200,
    description: "Glass",
    image: "/IMAGES/PRODUCTS/storage4.jpg"
  },
  {
    id: 21,
    name: "Butter-Popcorn",
    price: 1500,
    description: "Salty buttery treat",
    image: "/IMAGES/PRODUCTS/butter 1.jpg"
  },
  {
    id: 22,
    name: "Butter-Popcorn",
    price: 1800,
    description: "Sweet buttery treat",
    image: "/IMAGES/PRODUCTS/butter 2.jpg"
  },
  {
    id: 23,
    name: "Cheese-Popcorn",
    price: 2000,
    description: "Spicy treat",
    image: "/IMAGES/PRODUCTS/pop.jpg"
  },
  {
    id: 24,
    name: "Cheese-Popcorn",
    price: 1700,
    description: "Salty Cheesytreat",
    image: "/IMAGES/PRODUCTS/pop 1.jpeg"
  },
  {
    id: 24,
    name: "Cheese-Popcorn",
    price: 1500,
    description: "Sweet",
    image: "/IMAGES/sps1.jpg"
  },
  {
    id: 24,
    name: "Cheese and caramel-Popcorn",
    price: 2500,
    description: "Salty buttery treat",
    image: "/IMAGES/sps2.jpg"
  },
  {
    id: 24,
    name: "Butter-Popcorn",
    price: 1500,
    description: "Sweet treat",
    image: "/IMAGES/po1.jpg"
  },
  {
    id: 24,
    name: "Cheese-Popcorn",
    price: 1500,
    description: "Salty buttery treat",
    image: "/IMAGES/PRODUCTS/pop 1.jpeg"
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts() {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = " ";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p><strong>₦${product.price}</strong></p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productDiv.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <span>${item.name} - ₦${item.price}</span>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartDiv.appendChild(itemDiv);
  });

  totalDiv.textContent = `Total: ₦${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

renderProducts();
renderCart();

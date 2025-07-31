// get HTML elements
const storeItemsElement = document.getElementById("store-items");
const cartTotalElement = document.getElementById("cart-total");
const cartListElement = document.getElementById("cart");
// initialize variable for cart total
let cartTotal = 0;
// hold store items and their prices in an object
const inventory = {
  bread: 1.0,
  oreos: 2.0,
  coffee: 3.0,
};

// helper function for creating a new element with a text node
const createTextElement = (elementType, text) => {
  const newElement = document.createElement(elementType);
  const newTextNode = document.createTextNode(text);
  newElement.appendChild(newTextNode);
  return newElement;
};

const updateCartTotal = (item) => {
  cartTotal += inventory[item];
  cartTotalElement.innerHTML = cartTotal;
};

// add an item to the shopping cart list
const updateCart = (event) => {
  const buttonText = event.target.textContent;
  const newCartItem = createTextElement("li", buttonText);
  cartListElement.appendChild(newCartItem);
  updateCartTotal(buttonText);
};

// create store item HTML elements with event listeners
for (item in inventory) {
  const storeItem = createTextElement("button", item);
  storeItem.type = "button";
  storeItemsElement.appendChild(storeItem);
  storeItem.addEventListener("click", (event) => updateCart(event));
}

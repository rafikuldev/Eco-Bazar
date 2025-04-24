// increment and decrement quantity
const incrementButton = document.querySelector(`.quantityIncrement`);
const decrementButton = document.querySelector(`.quantityDecrement`);
const input = document.querySelector(`.quantity-control input`);

// increment quantity
function incrementQuantity() {
  input.value = Number(input.value) + 1;
}
incrementButton.addEventListener(`click`, incrementQuantity);

// decrement quantity
function decrementQuantity() {
  if (input.value > 1) {
    input.value = Number(input.value) - 1;
  }
}
decrementButton.addEventListener(`click`, decrementQuantity);

// reset quantity to 1 on page load

function resetQuantity() {
  if (input.value <= 0) {
    input.value = 1;
  }
}
input.addEventListener(`keyup`, resetQuantity);

// remove item from cart
const removeButton = document.querySelector(`.remove-btn`);
function removeItem() {
  const cartItem = document.querySelector(`.firstProduct`);
  cartItem.remove();
}
removeButton.addEventListener(`click`, removeItem);



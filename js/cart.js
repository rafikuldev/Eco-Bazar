/*
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


*/
/*
// make ai
document.addEventListener('DOMContentLoaded', function () {
  // Get all cart rows (tr elements in tbody)
  const cartItems = document.querySelectorAll('tbody tr');

  // Initialize for each cart item
  cartItems.forEach(item => {
    const decrementBtn = item.querySelector('.quantityDecrement');
    const incrementBtn = item.querySelector('.quantityIncrement');
    const quantityInput = item.querySelector('.quantity-input');
    const priceElement = item.querySelector('.price');
    const subtotalElement = item.querySelector('.subtotal');
    const removeBtn = item.querySelector('.remove-btn');

    // Parse price (remove $ sign and convert to number)
    const price = parseFloat(priceElement.textContent.replace('$', ''));

    // Update subtotal function
    function updateSubtotal() {
      const quantity = parseInt(quantityInput.value) || 0;
      const subtotal = (price * quantity).toFixed(2);
      subtotalElement.textContent = `$${subtotal}`;
    }

    // Increment quantity
    function incrementQuantity() {
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateSubtotal();
    }

    // Decrement quantity
    function decrementQuantity() {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateSubtotal();
      }
    }

    // Validate quantity input
    function validateQuantity() {
      let value = parseInt(quantityInput.value);
      if (isNaN(value) || value < 1) {
        value = 1;
      }
      quantityInput.value = value;
      updateSubtotal();
    }

    // Remove item
    function removeItem() {
      item.remove();
      // You might want to add code here to update cart total
    }

    // Event listeners
    incrementBtn.addEventListener('click', incrementQuantity);
    decrementBtn.addEventListener('click', decrementQuantity);
    quantityInput.addEventListener('change', validateQuantity);
    quantityInput.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') {
        validateQuantity();
      }
    });
    removeBtn.addEventListener('click', removeItem);

    // Initialize subtotal
    updateSubtotal();
  });
});
*/
// ai end

document.addEventListener('DOMContentLoaded', function () {
  // Main cart functionality
  function initializeCart() {
    const cartItems = document.querySelectorAll('tbody tr');
    let cartTotal = 0;

    // Update the entire cart totals
    function updateCartTotals() {
      let subtotal = 0;
      cartItems.forEach(item => {
        if (item.parentNode) {
          // Only count if item still exists in DOM
          const itemSubtotal = parseFloat(
            item.querySelector('.subtotal').textContent.replace('$', '')
          );
          subtotal += itemSubtotal;
        }
      });

      document.querySelector(
        '.cart-summary .subtotal span'
      ).textContent = `$${subtotal.toFixed(2)}`;
      document.querySelector(
        '.cart-summary .total span'
      ).textContent = `$${subtotal.toFixed(2)}`;
    }

    // Initialize each cart item
    cartItems.forEach(item => {
      const decrementBtn = item.querySelector('.quantityDecrement');
      const incrementBtn = item.querySelector('.quantityIncrement');
      const quantityInput = item.querySelector('.quantity-input');
      const priceElement = item.querySelector('.price');
      const subtotalElement = item.querySelector('.subtotal');
      const removeBtn = item.querySelector('.remove-btn');

      const price = parseFloat(priceElement.textContent.replace('$', ''));

      // Update individual item subtotal
      function updateSubtotal() {
        const quantity = parseInt(quantityInput.value) || 0;
        const subtotal = (price * quantity).toFixed(2);
        subtotalElement.textContent = `$${subtotal}`;
        updateCartTotals();
      }

      // Increment quantity
      incrementBtn.addEventListener('click', function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateSubtotal();
      });

      // Decrement quantity
      decrementBtn.addEventListener('click', function () {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
          updateSubtotal();
        }
      });

      // Validate quantity input
      quantityInput.addEventListener('change', function () {
        let value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
          value = 1;
        }
        this.value = value;
        updateSubtotal();
      });

      quantityInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
          this.blur(); // Triggers the change event
        }
      });

      // Remove item
      removeBtn.addEventListener('click', function () {
        item.remove();
        updateCartTotals();
      });

      // Initialize subtotal for this item
      updateSubtotal();
    });

    // Update Cart button
    const updateCartBtn = document.querySelector('.action-btn:last-child');
    updateCartBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Cart updated!');
      // Here you would typically send the updated quantities to your server
    });

    // Apply Coupon button
    const applyCouponBtn = document.querySelector('#cupon button');
    applyCouponBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const couponCode = document.querySelector('#cupon input').value;
      if (couponCode) {
        alert(
          `Coupon "${couponCode}" applied! (Note: This is a demo - no actual discount applied)`
        );
        // Here you would typically validate the coupon with your server
      } else {
        alert('Please enter a coupon code');
      }
    });
  }

  // Initialize the cart
  initializeCart();
});
var main = document.querySelector('body');
var cursor = document.querySelector('.cursor');

main.addEventListener('mousemove', function (dets) {
  gsap.to(cursor, {
    x: dets.clientX - 0, // Subtract half of cursor width (40px/2)
    y: dets.clientY - 0, // Subtract half of cursor height (40px/2)
    duration: 1,
    ease: 'back.out',
  });
});

// Example hover effect
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to('.cursor', { scale: 1.5 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to('.cursor', { scale: 1 });
  });
});
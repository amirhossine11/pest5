document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const cartCount = document.getElementById("cart-count");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartSection = document.getElementById("cart");

  let cart = [];

  // منوی همبرگری
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });

  // افزودن محصول به سبد خرید
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const title = button.dataset.title;
      const price = parseInt(button.dataset.price);
      const existing = cart.find(p => p.title === title);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ title, price, quantity: 1 });
      }
      updateCart();
    });
  });

  // به‌روزرسانی سبد خرید
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const div = document.createElement("div");
      div.innerHTML = 

      
      cartItemsContainer.appendChild(div);
    });
    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
    cartSection.classList.remove("hidden");
  }

  // تغییر تعداد
  window.changeQty = (index, delta) => {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateCart();
  };

  // حذف محصول
  window.removeItem = (index) => {
    cart.splice(index, 1);
    updateCart();
  };

  // تسویه حساب
  document.getElementById("checkout").addEventListener("click", () => {
    alert("تسویه حساب انجام شد ✅");
    cart = [];
    updateCart();
  });
});
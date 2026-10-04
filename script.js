document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");

  const getCart = () => {
    try {
      const raw = localStorage.getItem("llr-cart");
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  };

  const setCart = (items) => {
    localStorage.setItem("llr-cart", JSON.stringify(items));
    if (cartCount) {
      cartCount.textContent = String(items.length);
    }
  };

  const updateCartBadge = () => {
    const items = getCart();
    if (cartCount) {
      cartCount.textContent = String(items.length);
    }
  };

  const addItemToCart = (button) => {
    const item = {
      id: button.dataset.itemId,
      name: button.dataset.itemName,
      price: Number(button.dataset.itemPrice || 0),
      quantity: 1,
      image: button.dataset.itemImage || "",
      url: button.dataset.itemUrl || "index.html"
    };

    const current = getCart();
    const existingIndex = current.findIndex((entry) => entry.id === item.id);

    if (existingIndex >= 0) {
      current[existingIndex].quantity += 1;
    } else {
      current.push(item);
    }

    setCart(current);
  };

  document.querySelectorAll(".snipcart-add-item").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.Snipcart) {
        const item = {
          id: button.dataset.itemId,
          name: button.dataset.itemName,
          price: Number(button.dataset.itemPrice || 0),
          quantity: 1,
          url: button.dataset.itemUrl || "index.html",
          image: button.dataset.itemImage || ""
        };

        window.Snipcart.api.items.add(item);
        window.Snipcart.api.cart.open();
      } else {
        addItemToCart(button);
      }
    });
  });

  const cartButton = document.querySelector(".cart-button");
  if (cartButton) {
    cartButton.addEventListener("click", () => {
      if (window.Snipcart) {
        window.Snipcart.api.cart.open();
      } else {
        alert("Cart contains " + getCart().length + " item(s). Customize the Snipcart public key in index.html to enable live checkout.");
      }
    });
  }

  updateCartBadge();
});

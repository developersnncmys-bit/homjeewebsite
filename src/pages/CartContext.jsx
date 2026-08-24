import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

// Compare service names case-insensitively so the card (which uses the
// category key, e.g. "Book by room" / "Mini services") and the pop-up modal
// (which uses "Book By Room" / "Mini Services") are treated as the SAME
// service. Without this, a single-option service added from the card and
// from the pop-up became two separate cart items.
const svcEq = (a, b) => String(a).toLowerCase() === String(b).toLowerCase();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = sessionStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateCartItem = (
    name,
    price,
    delta,
    service,
    teamMembers,
    duration,
    coinsForVendor
  ) => {
    // const safeTeamMembers = teamMembers ?? 1;
    // Validate inputs
    if (!name || typeof price !== "number" || !service) {
      console.warn("Invalid input for updateCartItem:", {
        name,
        price,
        delta,
        service,
        teamMembers,
        duration,
        coinsForVendor,
      });
      return;
    }

    // Extract package prefix (e.g., "1 BHK Cleaning" from "1 BHK Cleaning - Premium")
    const prefix = name.split(" - ")[0];

    // Book By Room and Mini Services let a customer keep MULTIPLE different
    // sub-options of the same group at once (e.g. one Furnished bedroom AND
    // one Unfurnished bedroom, or several mini appliances). Apartment/Bungalow
    // tiers stay single-select — picking a new tier replaces the old one.
    const isMultiSelect = ["book by room", "mini services"].includes(
      String(service).toLowerCase()
    );

    setCartItems((prevCart) => {
      // Find existing item with the exact same name AND service
      const exactMatch = prevCart.find(
        (item) => item.name === name && svcEq(item.service, service)
      );

      // Find any item with the same prefix AND service
      const prefixMatch = prevCart.find(
        (item) =>
          item.name.split(" - ")[0] === prefix && svcEq(item.service, service)
      );

      if (exactMatch) {
        // If exact same item exists, update quantity
        const updatedQuantity = Math.max(exactMatch.quantity + delta, 0);
        if (updatedQuantity === 0) {
          console.log(`Removing item: ${name} for service: ${service}`);
          return prevCart.filter(
            (item) => !(item.name === name && svcEq(item.service, service))
          );
        }
        console.log(
          `Updating quantity for ${name} (${service}) to ${updatedQuantity}`
        );
        return prevCart.map((item) =>
          item.name === name && svcEq(item.service, service)
            ? { ...item, quantity: updatedQuantity }
            : item
        );
      } else if (prefixMatch && delta > 0 && !isMultiSelect) {
        // If a different item with the same prefix exists, replace it
        // (single-select groups only — Apartment/Bungalow tiers).
        console.log(
          `Replacing item with prefix: ${prefix} for service: ${service} with ${name} (₹${price})`
        );
        return [
          ...prevCart.filter(
            (item) =>
              !(
                item.name.split(" - ")[0] === prefix && svcEq(item.service, service)
              )
          ),
          {
            name,
            price,
            quantity: 1,
            service,
            teamMembers,
            duration,
            coinsForVendor,
          },
        ];
      } else if (delta > 0) {
        // Add new item if no item with this prefix exists
        console.log(`Adding new item: ${name} for service: ${service}`);
        return [
          ...prevCart,
          {
            name,
            price,
            quantity: 1,
            service,
            teamMembers,
            duration,
            coinsForVendor,
          },
        ];
      }
      // Return unchanged cart if no updates needed
      console.log("No cart update needed");
      return prevCart;
    });
  };

  const getQuantity = (name, service) => {
    if (!name || !service) {
      console.warn("Invalid input for getQuantity:", { name, service });
      return 0;
    }
    const quantity =
      cartItems.find((item) => item.name === name && svcEq(item.service, service))
        ?.quantity || 0;
    return quantity;
  };

  // const getQuantity = (name, service) => {
  //   const item = cartItems.find(
  //     (item) => item.name === name && svcEq(item.service, service)
  //   );
  //   return item ? item.quantity : 0;
  // };

  const getQuantityByPrefix = (prefix, service) => {
    return (
      cartItems.find(
        (item) =>
          item.name.split(" - ")[0] === prefix && svcEq(item.service, service)
      )?.quantity || 0
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        updateCartItem,
        getQuantity,
        getQuantityByPrefix,
        totalPrice,
        // getCoinToDeduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

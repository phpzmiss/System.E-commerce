import { useState } from "react";
import { createContext, useContext } from "react";

const CardContext = createContext();
// const response = ProductAPI.getAllProduct();
function CardProvider(props) {
  const [coffee, setCoffee] = useState([]);
  const [card, setCard] = useState([]);
  const [favorite, setFavorite] = useState([]);

  function addToCart(newItem) {
    setCard(newItem);
  }

  const value = { coffee, card, favorite, setCoffee, setCard, setFavorite };
  return <CardContext.Provider value={value} {...props}></CardContext.Provider>;
}

function useCard() {
  const context = useContext(CardContext);
  if (typeof context === "undefined")
    throw new Error("useCard must be used within a CardContext");
  return context;
}

export { useCard, CardProvider };

import { createContext, useContext, useState } from "react";
const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (property) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.title === property.title);
      if (exists) {
        return prev.filter((item) => item.title !== property.title);
      } else {
        return [...prev, property];
      }
    });
  };

  const isFavorite = (title) => {
    return favorites.some((item) => item.title === title);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);

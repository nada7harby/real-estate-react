import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // تحميل المفضلة من localStorage عند التحميل
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    console.log(saved);
    
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // حفظ المفضلة في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (property) => {
    setFavorites(prev => {
      const exists = prev.some(item => item.id === property.id);
      return exists 
        ? prev.filter(item => item.id !== property.id)
        : [...prev, property];
    });
  };

  const isFavorite = (id) => favorites.some(item => item.id === id);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
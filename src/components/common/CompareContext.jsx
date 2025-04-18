import { createContext, useContext, useEffect, useState } from "react";

const CompareContext = createContext();

const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem("compareList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);

  const addToCompare = (property) => {
    if (compareList.length < 4 && !compareList.some(p => p.title === property.title)) {
      setCompareList([...compareList, property]);
    }
  };

  const removeFromCompare = (title) => {
    setCompareList(compareList.filter(p => p.title !== title));
  };
  let  totalPrice = compareList.reduce((sum, item) => {
    const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + (priceNumber || 0)}, 0);

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare , totalPrice }}>
      {children}
    </CompareContext.Provider>
  );
};

const useCompare = () => useContext(CompareContext);

export { CompareProvider, useCompare };

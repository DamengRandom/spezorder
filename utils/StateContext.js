import React, { useEffect, useState, createContext } from 'react';
import Cookie from 'js-cookie';
import { useQuery } from 'react-query';
// functions
import productFetcher from '../utils/productFetcher';

const Contexts = createContext();

export default function StateContext({ children }) {
  const { data } = useQuery('products', () => productFetcher(Cookie.get('googleId')));
  const [darkmode, setDarkMode] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {
      // cleanup
    }
  }, [data]);

  const toggleMode = () => {
    setDarkMode(!darkmode);
  }

  return (
    <Contexts.Provider value={{
      state: {
        darkmode,
        products
      },
      toggleMode,
      setProducts
    }}>
      {children}
    </Contexts.Provider>
  )
}

const ContextsConsumer = Contexts.Consumer;
export { ContextsConsumer };
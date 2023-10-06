import { useState, useEffect } from 'react';

const useLocalStorage = (key = 'todos', initialValue = []) => {
   // retrieve the stored value from localStorage
   const storedValue = localStorage.getItem(key);
   // console.log(`local`, localStorage.getItem(key));
   // initialize the state with the stored value or the initial value
   const [value, setValue] = useState(
      storedValue !== null ? JSON.parse(storedValue) : initialValue
   );

   // update the localStorage whenever the value changes
   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
   }, [key, value]);

   // function to update the value in localStorage and state
   const updateValue = (newValue) => {
      setValue(newValue);
   };

   return [value, updateValue];
};

export default useLocalStorage;

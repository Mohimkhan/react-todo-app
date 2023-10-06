import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocaleStorage';

export const ThemeContext = createContext('dark');

const ThemeProvider = ({ children }) => {
   const [localTheme, setLocalTheme] = useLocalStorage('theme', 'dark');
   return (
      <ThemeContext.Provider
         value={{ theme: localTheme, setTheme: setLocalTheme }}
      >
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;

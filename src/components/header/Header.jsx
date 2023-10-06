import Button from '../button/Button';
import Image from '../image/Image';
import { useTheme } from '../../hooks/useTheme';
import { useEffect } from 'react';
import './Header.module.css';

export default function Header() {
   const [theme, setTheme] = useTheme();

   useEffect(() => {
      // add theme class to the body element
      document.body.classList.add(theme);
   }, [theme]);

   // function to switch between dark and light themes
   const switchTheme = () => {
      // determine the new theme based on the current theme
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      // remove the current theme class from the body element
      document.body.classList.remove(theme);
      // add the new theme class to the body element
      document.body.classList.add(newTheme);
      // update the theme state with the new theme
      setTheme(newTheme);
   };

   return (
      <header className={theme}>
         <div>
            <div className={`logo ${theme}`}>
               <h1>TODO</h1>
            </div>
            <Button onClick={switchTheme}>
               <Image
                  imgSrc={
                     theme === 'dark'
                        ? './images/icon-sun.svg'
                        : './images/icon-moon.svg'
                  }
                  altTag={theme === 'dark' ? 'sun' : 'moon'}
               />
            </Button>
         </div>
      </header>
   );
}

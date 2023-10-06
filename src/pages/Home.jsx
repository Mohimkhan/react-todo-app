import Header from '../components/header/Header';
import ThemeProvider from '../contexts/ThemeContext.jsx';
import '../styles/globalStyles/global.css';
import '../styles/themeStyles/dark.css';
import '../styles/themeStyles/light.css';

const Home = () => {
   return (
      <>
         <ThemeProvider>
            <Header />
         </ThemeProvider>
      </>
   );
};

export default Home;

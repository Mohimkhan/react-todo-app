import '../styles/globalStyles/global.css';
import '../styles/themeStyles/dark.css';
import '../styles/themeStyles/light.css';
import ThemeProvider from '../contexts/ThemeContext.jsx';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
   return (
      <>
         <ThemeProvider>
            <Header />
            <Footer />
         </ThemeProvider>
      </>
   );
};

export default Home;

const Logo = ({children, theme}) => {
   return <div className={`logo ${theme}`}>{children}</div>;
};

export default Logo;

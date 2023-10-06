const Input = ({ inputType, text, id, ...rest }) => {
   return <input type={inputType} placeholder={text} id={id} {...rest} />;
};

export default Input;

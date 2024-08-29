import './Button.css';

function Button({className, color, onClick, children}) {
  // background-color:CSS -> JSX backgroundColor
  const classNames = `Button ${color} ${className}`;
  return <button className={classNames} onClick={onClick}>{children}</button>
}

export default Button;
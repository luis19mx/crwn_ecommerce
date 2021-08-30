import './button.styles.scss';

const Button = ({ children, isBlue, inverted, ...otherProps }) => (
  <button
    className={`button
      ${inverted && 'inverted'}
      ${isBlue && 'is-blue'}
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;

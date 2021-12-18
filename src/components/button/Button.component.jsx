import { ButtonStyles } from './Button.styles';

export default function Button({ children, ...props }) {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
}

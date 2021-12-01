import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import { OptionStylesAsDiv } from '../header/header.styles';

async function handleClick() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error.stack);
  }
}

export default function SignOut({ children }) {
  return (
    <OptionStylesAsDiv onClick={handleClick}>
      {children}
    </OptionStylesAsDiv>
  );
}

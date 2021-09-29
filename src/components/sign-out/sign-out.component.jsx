import { signOut } from '@firebase/auth';

import { auth } from '../../firebase';
import { OptionStyles } from '../header/header.styles';

async function handleClick() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error.stack);
  }
}

export default function SignOut({ children }) {
  return (
    <OptionStyles as="div" onClick={handleClick}>
      {children}
    </OptionStyles>
  );
}

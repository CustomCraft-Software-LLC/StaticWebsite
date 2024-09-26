import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User logged in:', user);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
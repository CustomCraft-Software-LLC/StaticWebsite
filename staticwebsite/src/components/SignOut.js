import React from 'react';
import { handleSignOut } from '../auth/firebaseAuth'; 

const SignOut = () => {
  const handleLogout = async () => {
    try {
      await handleSignOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default SignOut;
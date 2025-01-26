import Link from 'next/link';
import React from 'react';

const ButtonLogin = ({ isLoggedIn, name }) => {
  // Comments: This is a simple button component that changes based on whether the user is logged in or not.
  if (isLoggedIn) {
    return (
      <>
        <Link href='/dashboard' className='btn btn-primary'>
          Welcome back {name}
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href='/login'>Login</Link>
    </>
  );
};

export default ButtonLogin;

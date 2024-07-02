import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Error= () => {
  return (
    <>
    <div className='mt-[10em]' >
      <h1 className='header-h1 mb-[0]'>404 Not Found</h1>
    </div>
       <div className='container px-[10px]'>
       <img src="./sad-veggies.webp" height="500em" width="500em" alt="" />
      <p>Sorry, the page you are looking for does not exist.</p>

       </div>
    </>
  );
}

export default Error;
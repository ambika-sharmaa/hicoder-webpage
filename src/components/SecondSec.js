import React from 'react';
import './SecondSec.css';

function SecondSec({
  lightBg,
  topLine,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
            <div className='top-line-s'>{topLine}</div>
        </div>
      </div>
    </>
  );
}

export default SecondSec;
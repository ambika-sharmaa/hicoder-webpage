import React from 'react';
import FirstSec from '../../FirstSec';
import SecondSec from '../../SecondSec';
import ThirdSec from '../../ThirdSec';
import FourthSec from '../../FouthSec';
import Footer from '../../Footer';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, secObjOne, thirdObjOne, fourthObjOne } from './Data';

function Home() {
  return (
    <>
      <FirstSec {...homeObjOne} />
      <SecondSec {...secObjOne} />
      <FirstSec {...homeObjTwo} />
      <FirstSec {...homeObjThree} />
      <ThirdSec {...thirdObjOne} />
      <FourthSec {...fourthObjOne}/>
      <FirstSec {...homeObjFour} />
      <Footer/>
    </>
  );
}

export default Home;
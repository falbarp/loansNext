
import React from 'react';
import {HomeButton} from '../components/ui';
import Image from 'next/image';
import 'app/globals.css'; 

const HomePage: React.FC = () => {
  return (
    <div>

      <h1 className='title'>Tu comparador de préstamos</h1>
      <div className='subtitle'>
      <HomeButton  />
      </div>
    <div className="image-container">
      <Image src="/bg.png" alt="Background" width={0} height={0} />
    </div>
    </div>
  );
};

export default HomePage;
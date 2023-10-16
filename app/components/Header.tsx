import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between p-3 px-5  shadow-md z-90">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import Image from 'next/image';

function Table() {
  return (
    <div className="relative w-full">
      <div>
        <Image
          src="/S.png"
          alt="Hero"
          width={1440}
          height={704}
          className="w-full h-auto object-cover"
          priority 
        />
      </div>
    </div>
  );
}

export default Table; 
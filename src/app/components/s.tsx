import React from 'react';
import Image from 'next/image';

function Section() {
  return (
    <div className="relative w-full">
      <div>
        <Image
          src="/s.png"
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

export default Section;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MegaMenu = ({ title, megaMenuLinks, HandleNavShowParent }: any) => {
  return (
    <div className='container mx-auto w-full lg:mt-0 mt-3 bg-white left-0'>
      <div className='lg:px-4 lg:py-10'>
        <div className='lg:flex gap-10'>
          {megaMenuLinks.map((values: any, index: any) => (
            <div className='lg:w-1/3 transition-transform duration-300 ease-in-out transform' key={index}>
              <div className='flex flex-col gap-4 justify-center items-center bg-white hover:bg-green-400 text-black hover:text-white p-3 rounded-lg'>
                <Link href={values.href}>
                  {values.Title}
                </Link>
                {/* <div className='text-gray-500'>{values.icons}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

import React, { useState ,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const MegaMenu = ({ title, className, megaMenuLinks ,ContentMegaLink,TestLinksContents , HandleNavShowParent} : any ) => {

  const [TitleIndex , getTitleIndex] = useState(1);

 
 


  return (
    <>
    <div className='  container mx-auto w-full lg:mt-0 mt-3 bg-white left-0'  onMouseEnter={()=>HandleNavShowParent(true)
}onMouseLeave={()=>HandleNavShowParent(false)}>
      <div className=' lg:px-4 lg:py-10  '>
        <div className='lg:flex gap-10'>{
          megaMenuLinks.map((values : any,index : any)=>(
            <>
            <div className='lg:block hidden' key={index}>
              <div className='flex gap-4 justify-center items-center bg-white hover:bg-green-400 text-black  hover:text-white p-3 rounded-lg'>
                <Link className='text-[20px] font-bold ' href={values.href}>{values.Title}</Link>
                <div className='text-gray-500'>
                {values.icons}
                </div>
              </div>
            </div>
            {megaMenuLinks.length - 1 != index  && <span className='p-[0.5px] bg-gray-400'> </span> }

            </>
          ))
          }</div>
      </div>
    
     
    </div>
    
  </>
  );
};

export default MegaMenu;

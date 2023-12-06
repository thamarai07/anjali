import React, { useState ,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const MegaMenu = ({ title, className, megaMenuLinks ,ContentMegaLink,TestLinksContents , HandleNavShowParent} : any ) => {

  const [TitleIndex , getTitleIndex] = useState(1);

 
 


  return (
    <>
    <div className='  container mx-auto w-full lg:mt-0 mt-3 bg-white '  onMouseEnter={()=>HandleNavShowParent(true)
}onMouseLeave={()=>HandleNavShowParent(false)}>
      <div className=' lg:px-4 lg:py-10  '>
        <p className='font-light text-[18px] lg:block hidden'>Course Categories </p>
        <div className=''>{
          megaMenuLinks.map((values : any,index : any)=>(
            <>
            <div className='lg:block hidden' key={index}>
            <p className=' group transition-all duration-300 ease-in-out cursor-pointer text-[#1E1E1E] hover:text-black text-[15px] font-normal '>
              
              <span className={`bg-left-bottom bg-gradient-to-r from-[#ED1C24] to-[#ED1C24] bg-[length:0%_2px] bg-mb-10 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-[#000] font-medium`}>
              {values.Title}
              </span>
            </p>
            </div>
            </>
          ))
          }</div>
      </div>
    
     
    </div>
    
  </>
  );
};

export default MegaMenu;

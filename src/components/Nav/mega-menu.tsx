import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {CourseList} from "../../../utils/courses"
const MegaMenu = ({ title, megaMenuLinks, HandleNavShowParent ,handleShow}: any) => {
  const [Show,setShow] = useState(false)
  useEffect(()=>{
    handleShow(Show)
   
  },[Show])
  return (
    <>
      <div className='flex'>
      {
        CourseList.map((values)=>(
          <>
          <div className=' border rounded m-2 w-[220px]'>
          <div className='text-black  text-[16px] font-semibold w-[110px] p-2'>{values.stream}</div>
            <div className=''>
          <div className='flex flex-wrap'>{ values.course.map((v)=>(
            <Link href={"/course/"+v.slug} className='text-black hover:text-white w-[160px] p-2 text-[13px] bg-white hover:bg-green-500 ' onClick={()=>handleShow(false)}>
            {v.course}
            </Link>
            ))}</div>
          </div>
          </div>
          </>
        ))
      }
      </div>
    </>
    
  );
};

export default MegaMenu;


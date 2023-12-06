import React from 'react'
import { CourseContentTypeing } from '@/types'
import { LiaDotCircle } from "react-icons/lia";
function IdealFor({CourseContent}:CourseContentTypeing) {
  return (
    <div className='mt-20'>
        <p className='text-3xl font-semibold'>We Design This Course For:  </p>
        <div className='flex flex-wrap mt-8 justify-center items-center'>
        {CourseContent.IdealFor.map((values)=>(
            <div key={values.id} className='flex gap-1 m-4 items-center border px-4 py-2 rounded shadowBox font-medium bg-slate-100 hover:bg-white' >
            <LiaDotCircle size={25}/>
            <p>{values.ideal}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default IdealFor
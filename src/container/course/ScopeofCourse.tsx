import React from 'react'
import { CourseContentTypeing } from '@/types'
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";


function ScopeofCourse({CourseContent}:CourseContentTypeing) {
  return (
    <div className='lg:px-0 px-4'>
        <p className='text-3xl font-semibold lg:mt-20 mt-10 '>Scope:</p>

        <p className='font-medium text-[18px] mt-8'>{CourseContent.ScopeofCourseContent}</p>
        <div className='lg:flex gap-10 items-center'>
        <div className='grid lg:grid-cols-2  border px-6 py-4 mt-5 shadow-xl mb-10 rounded-lg w-[80%]'>
            {
            CourseContent.ScopeofCourse.map((values)=>(
                <div key={values.id} className='p-2 text-[18px] font-medium flex items-center gap-4'><VscDebugBreakpointData className="text-gray-500"/>{values.scope}</div>
            ))    
            }
        </div>
        <FaJava size={160} className="text-green-500"/>
        </div>
    </div>
  )
}

export default ScopeofCourse

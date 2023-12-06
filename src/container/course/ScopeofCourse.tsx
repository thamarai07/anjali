import React from 'react'
import { CourseContentTypeing } from '@/types'

function ScopeofCourse({CourseContent}:CourseContentTypeing) {
  return (
    <div className='lg:px-0 px-4'>
        <p className='text-3xl font-semibold lg:mt-20 mt-10 '>Scope:</p>

        <p className='font-medium text-[18px] mt-8'>{CourseContent.ScopeofCourseContent}</p>
        <div className='grid lg:grid-cols-2  border px-6 py-4 mt-5 shadow-xl mb-10 rounded-lg'>
            {
            CourseContent.ScopeofCourse.map((values)=>(
                <div key={values.id} className='p-2 text-[18px] font-medium flex items-center'>{values.scope}</div>
            ))    
            }
        </div>
    </div>
  )
}

export default ScopeofCourse

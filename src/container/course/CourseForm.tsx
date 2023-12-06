import React from 'react'
import { CourseContentTypeing } from '@/types'
import Form from './Form'
import InnerCoursesTrend from '../InnerCourseTrandingS'

function CourseForm({CourseContent}: CourseContentTypeing) {
  return (
    <>
    <div className='mt-10'>
    <h2 className='text-3xl font-semibold'>Course Overview</h2>
    <div className='flex mt-4 gap-24' >
        <div className='w-[60%]'>
            <p className='font-medium text-[18px]'>
        {
            CourseContent.Introduction
        }</p>
          <InnerCoursesTrend/>
        
        </div>
        <div className='w-[40%]'>
            <Form/>
        </div>
    </div>
    </div>
    </>
  )
}

export default CourseForm
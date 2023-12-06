import React from 'react';
import { CourseContentTypeing } from '@/types'
import Image from 'next/image';
export default function CourseHero({CourseContent}: CourseContentTypeing) {
  return (
    <>
        <div className='flex gap-10  items-center shadow-md'>
            <Image src={CourseContent.image} alt={CourseContent.courseTitle} height={300} width={600} />
            <div className='text-center'>
            <h1 className=' text-5xl font-bold mb-4'>{CourseContent.courseTitle}</h1>
            <span className='text-2xl font-semibold'>{CourseContent.Slogan}</span>
            </div>
        </div>
    </>
  );
}

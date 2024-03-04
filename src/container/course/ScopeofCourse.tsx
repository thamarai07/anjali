import React from 'react'
import { CourseContentTypeing } from '@/types'
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import { TbBrandOffice } from "react-icons/tb";
import { SiAdobedreamweaver } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import { TbAssembly } from "react-icons/tb";
import { MdOutlineAccountTree } from "react-icons/md";
import { CgTally } from "react-icons/cg";


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
        {/* <FaJava size={160} className="text-green-500"/> */}
        {CourseContent.id == 1 && <TbBrandOffice size={160} className="text-green-500"/>}
        {CourseContent.id == 22 && <SiAdobedreamweaver size={160} className="text-green-500"/>}
        {CourseContent.id == 20 && <DiIllustrator size={160} className="text-green-500"/>}
        {CourseContent.id == 19 && <SiAdobephotoshop size={160} className="text-green-500"/>}
        {CourseContent.id == 18 && <SiAdobeindesign size={160} className="text-green-500"/>}
        {CourseContent.id == 15 && <GiNetworkBars size={160} className="text-green-500"/>}
        {CourseContent.id == 13 && <TbAssembly size={160} className="text-green-500"/>}
        {CourseContent.id == 10 && <MdOutlineAccountTree size={160} className="text-green-500"/>}
        {CourseContent.id == 9 && <CgTally size={160} className="text-green-500"/>}

        
        
        </div>
    </div>
  )
}

export default ScopeofCourse

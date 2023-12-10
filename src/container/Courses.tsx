import Link from 'next/link'
import React, { useState } from 'react'
import { GiMaterialsScience } from "react-icons/gi";
import { TbTallymarks } from "react-icons/tb";
import { SiSap } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiDotnet } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiPhp , } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { GrMultimedia } from "react-icons/gr";
import { GrCloudComputer } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import Image from 'next/image';
function Courses() {

    const [Hover,setHover] = useState(false)
    console.log(Hover)
    const Course = [
        
       
        {
            id : 7,
            course : "C, C++",
            herf : "#",
            thumpnail : "/courseimages/c_c++/c1.avif",
            content : "Unlock the power of programming with C and C++, where innovation meets efficiency in the world of code!",


        },
        {
            id : 8,
            course : "JAVA",
            herf : "#",
            thumpnail : "/courseimages/java/java1.avif",
            content : "Dive into the world of endless possibilities with Java programming – where your dreams of digital brilliance come to life!"
        },
        {
            id : 12,
            course : "PYTHON",
            herf : "#",
            thumpnail : "/courseimages/python/python01=2.avif",
            content : "Unlock the power of programming with Python: Where simplicity meets versatility!"

        },
        {
            id : 5,
            course : "ANGULAR JS",
            herf : "#",
            content : "Unlock the power of dynamic web applications with AngularJS – where innovation meets seamless user experiences!",
            thumpnail : "/courseimages/angularjs/angularjs.jpg",
        }
       
    ]
  return (
    <>
    <p className='text-center md:text-[40px] text-[30px] font-extrabold mb-5 mt-16'>
            Our Courses <span className={`text-[20px] ${Hover == true && "text-red-500"}`}>(ISO Certified)</span>
          </p>
            {/* <div className='flex justify-center flex-wrap px-4 ' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        {
            Course.map((values)=>(
                <>
                <div className='bg-green-700 hover:bg-yellow-500 text-white px-4 py-2  m-5 rounded text-[22px] font-medium '>
                <div className='flex justify-center py-4 px-2'>
                {values.id == 1 && <GiMaterialsScience size={40}/>}
                {values.id == 2 && <TbTallymarks size={40}/>}
                {values.id == 3 && <SiSap size={40}/>}
                {values.id == 4 &&  <FaNetworkWired size={40}/>}
                {values.id == 5 && <FaAngular size={40}/>}
                {values.id == 6 && <SiMicrosoftoffice size={40}/>}
                {values.id == 7 && <SiCplusplus size={40}/>}
                {values.id == 8 && <FaJava size={40}/>}
                {values.id == 9 && <DiDotnet size={40}/>}
                {values.id == 10 &&<GrMysql size={40}/>}
                {values.id == 11 &&<SiPhp size={40}/>}
                {values.id == 12 &&<SiPython size={40}/>}
                {values.id == 13 &&<GrMultimedia size={40}/>}
                {values.id == 14 &&<GrCloudComputer size={40}/>}
                {values.id == 15 &&<IoHardwareChip size={40}/>}
                {values.id == 16 && <Image src={"/assets/autocad.svg"} height={40} width={40} alt='autocad' className='text-white'/>}                
                </div>
                <Link href={values.herf} key={values.id} className='text-centre'>{values.course}</Link>
                </div>

                </>
            ))
        }
    </div> */}
    <div className='flex lg:flex-row flex-col justify-center items-center gap-10 w-[100%]'>

    {
        Course.map((values)=>(
            <>
            <div className='border rounded-[20px] w-[240px]'>
                    <Image src={values.thumpnail} width={300} height={120} alt={values.course} className='rounded-t-md'/>
                    <div className='px-4 mt-4'>
                    <p className='text-[24px] pt-4 font-extrabold text-green-500 '>{values.course}</p>
                    <p className='text-[14px] mt-4 h-[80px]'>{values.content}</p>
                    </div>
                    <Link href={values.herf} className='bg-blue-500 hover:bg-green-500 text-[16px] font-semibold text-white px-4 py-1 m-auto block text-center mt-4 w-[50%] rounded mb-6'>KnowMore</Link>
            </div>
            </>
        ))
    }
    </div>
    </>
  )
}

export default Courses

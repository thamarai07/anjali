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
            id : 1,
            course : "Data science",
            herf : "#"
        },
        {
            id : 2,
            course : "Tally Prime",
            herf : "#"

        },
        {
            id : 3,
            course : "SAP",
            herf : "#"

        },
        {
            id : 4,
            course : "CCNA",
            herf : "#"

        },
        {
            id : 5,
            course : "ANGULAR JS",
            herf : "#"

        },
        {
            id : 6,
            course : "MS OFFICE",
            herf : "#"

        },
        {
            id : 7,
            course : "C, C++",
            herf : "#"

        },
        {
            id : 8,
            course : "JAVA",
            herf : "#"

        },
        {
            id : 9,
            course : ".NET",
            herf : "#"

        },
        {
            id : 10,
            course : "MS MYSQL",
            herf : "#"

        },
        {
            id : 11,
            course : "PHP WITH MYSQL",
            herf : "#"

        }
        ,
        {
            id : 12,
            course : "PYTHON",
            herf : "#"

        },
        {
            id : 13,
            course : "MULTIMEDIA",
            herf : "#"

        },
        {
            id : 14,
            course : "CLOUD ACCOUNTING",
            herf : "#"

        },
        {
            id : 15,
            course : "HARDWARE NETWORKING",
            herf : "#"

        },
        {
            id : 16,
            course : "AUTOCAD",
            herf : "#"

        }
    ]
  return (
    <>
    <p className='text-center md:text-[40px] text-[30px] font-extrabold mb-5 mt-16'>
            Our Courses <span className={`text-[20px] ${Hover == true && "text-red-500"}`}>(ISO Certified)</span>
          </p>
    <div className='flex justify-center flex-wrap px-4 ' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
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
    </div>
    </>
  )
}

export default Courses

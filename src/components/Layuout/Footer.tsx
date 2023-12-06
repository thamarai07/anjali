import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className='m-auto  lg:mt-10 mt-6'>
    <div className='shadow-md md:w-[100%]  bg-[#002b17] md:flex lg:px-24 px-4 lg:py-10 py-8 gap-24'>
        <div>
            <Image src={"/anjalilogo.png"} width={160} height={120} alt='anjalicomputereducation-logo'/>
        </div>
        <div>
          
          <ul className='md:mt-10 mt-6 text-white font-medium'>
            <li><Link href="#">Home</Link></li>
            <li className='mt-1'><Link href="#">AboutUs</Link></li>
            <li className='mt-1'><Link href="#">ContactUs</Link></li>
            <li className='mt-1'><Link href="#">Gallery</Link></li>
          </ul>
        </div>
        <div className='lg:mt-0 mt-10'>
          <span className='text-[24px] font-bold text-white '>Our Courses</span>
          <div className='w-[100%] bg-white p-[1px]'></div>
          <ul className='md:mt-10 mt-2 text-white font-medium'>
            <li><Link href="#">C, C++</Link></li>
            <li className='mt-1'><Link href="#">Java</Link></li>
            <li className='mt-1'><Link href="#">Python</Link></li>
            <li className='mt-1'><Link href="#">AngularJs</Link></li>
            <li className='mt-1'><Link href="#">.Net</Link></li>
            <li className='mt-1'><Link href="#">MSMYSQL</Link></li>
            <li className='mt-1'><Link href="#">PHP With MYSQL</Link></li>
          </ul>
        </div>
        <div>
          <span className='text-[24px] font-bold  p-1 lg:block hidden'></span>
          <div className='w-[100%] p-[1px] lg:block hidden'></div>
          <ul className='md:mt-10 mt-2 text-white font-medium'>
            <li className='mt-1'><Link href="#">Data Science</Link></li>
          </ul>
          <ul className='md:mt-10 mt-2 text-white font-medium'>
            <li className='mt-1'><Link href="#">Tally Prime</Link></li>
            <li className='mt-1'><Link href="#">MS OFFICE</Link></li>
            <li className='mt-1'><Link href="#">SAP</Link></li>
            <li className='mt-1'><Link href="#">CCNA</Link></li>
          </ul>
        
        </div>
        <div>
          <span className='text-[24px] font-bold  p-1'></span>
          <div className='w-[100%] p-[1px]'></div>
            <ul className='md:mt-4 mt-2 text-white font-medium'>
              <li className='mt-1'><Link href="#">MultiMedia</Link></li>
            </ul>
            <ul className='md:mt-4 mt-2 text-white font-medium'>
              <li className='mt-1'><Link href="#">Cloud Accounting</Link></li>
            </ul>
            <ul className='md:mt-4 mt-2 text-white font-medium'>
              <li className='mt-1'><Link href="#">HardWare Networking</Link></li>
            </ul>
            <ul className='md:mt-4 mt-2 text-white font-medium'>
              <li className='mt-1'><Link href="#">AutoCad</Link></li>
            </ul>
          </div>
    </div>
    </div>
  )
}

export default Footer

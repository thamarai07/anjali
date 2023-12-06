import React from 'react'
import PropTypes from 'prop-types'
import { UnicOfanjali } from '../../utils/links'
import Image from 'next/image'
function Unic() {
  return (
    <div className='mt-20'>
        <div className='lg:grid grid-cols-3 gap-10 m-auto justify-items-center'>
        {
            UnicOfanjali.map((values)=>(
                <>
                    <div className='border-[1px] border-gray-300 p-3 '>
                        <div className=''>
                        <Image src={values.image} alt={values.title} width={300} height={80}/>
                        </div>
                        <div className='flex gap-10 '>
                        <p className='mt-4 text-[24px] text-[#004e29] font-semibold'>{values.title}</p>
                        </div>
                        <div className='flex justify-center '>
                        <p className='mt-4 text-[16px] font-semibold'>{values.content}</p>
                        </div>
                    </div>      
                </>
            ))
        }
        </div>
    </div>
  )
}

Unic.propTypes = {}

export default Unic

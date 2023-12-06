import React from 'react'

function Form() {
  return (
    <div className='border border-green-500 p-5 w-[100%] m-auto rounded shadow-md shadow-green-500'>
        <p className=' text-3xl mb-8 font-semibold'>Enquery Now </p>
        <form action="" method="post">  
            <div className='w-[100%]'>
                <label className="text-[19px] font-semibold" htmlFor='name'>Name</label>
                <br />
                <input type="text" className='shadowBox w-[100%] border py-2 mt-1 rounded' />
            </div>
            <div className='w-[100%] mt-4'>
                <label className="text-[19px] font-semibold" htmlFor='name'>Email</label>
                <br />
                <input type="text" className='shadowBox w-[100%] border py-2 mt-1 rounded' />
            </div>
            <div className='w-[100%] mt-4'>
                <label className="text-[19px] font-semibold" htmlFor='name'>Mobile</label>
                <br />
                <input type="text" className='shadowBox w-[100%] border py-2 mt-1 rounded' />
            </div>
            <div className='w-[100%] mt-4'>
                <label className="text-[19px] font-semibold" htmlFor='name'>Qualification</label>
                <br />
                <input type="text" className='shadowBox w-[100%] border py-2 mt-1 rounded' />
            </div>
            <div className='mt-4 flex justify-center'>
                <button className='px-6 py-2 border font-semibold bg-fuchsia-600 text-white rounded '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form
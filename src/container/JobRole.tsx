import { CourseContentTypeing } from '@/types'


const JobRole = ({CourseContent}: CourseContentTypeing) =>{
    console.log(CourseContent)
    return(
        <>
           <div className=' mt-10 lg:px-0 px-4'>
        <p className='lg:text-3xl text-xl text-center font-bold text-green-400'>Job's for {CourseContent.courseTitle} </p>
        <div className='flex flex-wrap mt-8 justify-center items-center'>
        {CourseContent.CareerProspectsJobRolesContent}
        </div>
        <div className=' text-[16px] mt-10'>
            <ul className='grid grid-cols-3'>
                {CourseContent.CareerProspectsJobRoles.map((values)=>(
                <li className='mt-2 mb-2 font-semibold'>{values.jobrole}</li>
                ))}
            </ul>
        </div>
    </div>
        </>
    )
}
export default JobRole
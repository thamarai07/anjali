import Head from 'next/head';
import MainLayout from '@/components/Layuout/MainLayout';
import HomeSlider from '@/container/HomeSlider';
import Unic from '@/container/Unic';
import AnjaliStats from '@/container/AnjaliStats';
import Courses from '@/container/Courses';
import Testimonial from '@/container/Testimonial';
import Certificate from '@/container/Certificate';
export default function Home() {
  return (
    <>
      <Head>
        <title>Anjali Computer Education | ISO Certified</title>
        <meta
          name="description"
          content="Begin your career journey with Anjali Computer Education, offering world-class training and advanced courses to help you excel in the ever-evolving tech industry."
        />
        <meta
          name="keywords"
          content="Anjali Computer Education, ISO Certified, programming courses, coding classes, software development, web development, Python, Java, C++, soft skills, communication training, leadership skills, data science, machine learning, artificial intelligence, Tally ERP 9, accounting software, hardware repair, multimedia design, graphic design, video editing, animation, IT certification, networking, cybersecurity, database management, IT project management, software engineering, job-oriented courses, industry-ready skills"
        />
      </Head>

      <MainLayout>
        <div className='lg:max-w-[1200px] m-auto px-10 mt-10'>
          <p className='text-center md:text-[40px] text-[30px] font-extrabold mb-5 mt-10'>
            Our Advanced Courses Can Help You Advance Your Career
          </p>
          <HomeSlider />
          
          <Courses/>
          <Certificate/>
          {/* <Content/> */}
          <p className='text-center md:text-[40px] text-[30px] font-extrabold mb-5 md:mt-20 mt-10'>
          
          </p>
          <AnjaliStats/>
          <p className='text-center md:text-[40px] text-[30px] font-extrabold mb-5 md:mt-20 mt-10'>
          Features Of Anjali Computer
          </p>
          <Unic/>
          <Testimonial/>
        </div>
      </MainLayout>
    </>
  );
}

import Head from 'next/head';
import MainLayout from '@/components/Layuout/MainLayout';
import HomeSlider from '@/container/HomeSlider';
import Unic from '@/container/Unic';
import AnjaliStats from '@/container/AnjaliStats';
import Courses from '@/container/Courses';
import Testimonial from '@/container/Testimonial';
import Certificate from '@/container/Certificate';
import InfiniteScroll from '@/components/SmoothSlider';
import InfiniteLooper from '@/container/Infinity';
import { CompanyLogos } from '../../utils/logos';
import Image from 'next/image';
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
          <p className="text-center md:text-[35px] text-[30px] font-semibold mb-5 mt-24">
          Get chances to work at top companies
          </p>
          <div className='w-4xl'>
          <InfiniteLooper speed={200} direction="left">
          <div className="flex gap-10 bg-gray-100 mb-5">
              {CompanyLogos.map((values, index) => (
                <Image
                  key={index}
                  alt={values.name}
                  src={values.logo}
                  className="object-contain p-4"
                  width={140}
                  height={40}
                />
              ))}
            </div>
          </InfiniteLooper>
          </div>
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

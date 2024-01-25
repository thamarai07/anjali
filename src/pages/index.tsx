import Head from "next/head";
import MainLayout from "@/components/Layuout/MainLayout";
import HomeSlider from "@/container/HomeSlider";
import Unic from "@/container/Unic";
import AnjaliStats from "@/container/AnjaliStats";
import Courses from "@/container/Courses";
import Testimonial from "@/container/Testimonial";
import Certificate from "@/container/Certificate";
import InfiniteLooper from "@/components/infinitiLooper";
import Image from "next/image";
export default function Home() {

  const CompanyLogo = [
    {
      id : 1,
      campany : "/company/7611770.png",
      comapanyName :"google"
    },
    {
      id : 2,
      campany : "/company/CGI_Inc.-Logo.wine.png",
      comapanyName :"CGI_Inc"

    },
    {
      id : 3,
      campany : "/company/cisco_logo-1000px.png",
      comapanyName :"cisco_logo"

    },
    {
      id : 4,
      campany : "/company/Cognizant_logo_2022.svg.png",
      comapanyName :"Cognizant_logo"
      
    },
    {
      id : 5,
      campany : "/company/Dell_logo.png",
      comapanyName :"Dell_logo"
      
    },  
    {
      id : 6,
      campany : "/company/hp-logo.com.png",
      comapanyName :"hp-logo"

    },
    {
      id : 7,
      campany : "/company/IBM_logo.svg.png",
      comapanyName :"IBM_logo"

    },
    {
      id : 8,
      campany : "/company/Infosys_logo.svg.png",
      comapanyName :"Infosys_logo"
    },
    {
      id : 9,
      campany : "/company/Intel-logo-2022.png",
      comapanyName :"Intel"

    },
    {
      id : 10,
      campany : "/company/png-transparent-microsoft-logo-microsoft-thumbnail.png",
      comapanyName :"microsoft"
    },
    {
      id : 11,
      campany : "/company/sutherland-global-services.png",
      comapanyName :"sutherland"

    },
    {
      id : 12,
      campany : "/company/Tata_Consultancy_Services_Logo.svg.png",
      comapanyName :"Tata_Consultancy_Services_Logo"
      
    }
  ]
  


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
        <div className="lg:max-w-[1200px] m-auto px-10 mt-10">
          <p className="text-center md:text-[35px] text-[25px] font-bold mb-10 mt-10">
            Our Advanced Courses Can Help You Advance Your Career
          </p>
          <HomeSlider />

          <p className="text-center md:text-[35px] text-[30px] font-semibold mb-5 mt-24">
          Get chances to work at top companies
          </p>
          <InfiniteLooper speed={200} direction="left">
            <div className="flex gap-10 bg-gray-100 mb-5">
              {
                CompanyLogo.map((values)=>(
                  <Image alt={values.comapanyName} src={values.campany} style={{
                    objectFit : "contain"
                  }} width={140} className="p-4" height={40}/>      
                ))
              }
                 
            </div>
          </InfiniteLooper>
          <Courses />
          <Certificate />
          {/* <Content/> */}
          <p className="text-center md:text-[40px] text-[30px] font-extrabold mb-5 md:mt-20 mt-10"></p>
          <AnjaliStats />
          <p className="text-center md:text-[40px] text-[30px] font-extrabold mb-5 md:mt-20 mt-10">
            Features Of Anjali Computer
          </p>
          <Unic />
          <Testimonial />
        </div>
      </MainLayout>
    </>
  );
}

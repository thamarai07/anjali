import Head from "next/head";
import { CourseContent } from "../../../utils/courseContent";
import MainLayout from "@/components/Layuout/MainLayout";
import CourseHero from "@/container/course/hero";
import IdealFor from "@/container/course/IdealFor";
import CourseForm from "@/container/course/CourseForm";
import ScopeofCourse from "@/container/course/ScopeofCourse";
import JobRole from "@/container/JobRole";
import AnjaliStats from "@/container/AnjaliStats";
import Testimonial from "@/container/Testimonial";

export async function getStaticPaths() {
  const paths = CourseContent.map((post) => ({
    params: { course: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const course = CourseContent.find((values) => values.slug === params.course);

  return { props: { course } };
}

const Course = ({ course }) => {
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
        <div className="lg:max-w-[1200px] m-auto lg:px-10 ">
          <CourseHero CourseContent={course} />
          <IdealFor CourseContent={course} />
          <CourseForm CourseContent={course} />
          <ScopeofCourse CourseContent={course} />
          <JobRole CourseContent={course} />
          <div className="mt-20 mb-20">
            <AnjaliStats />
          </div>
          <Testimonial />
        </div>
      </MainLayout>
    </>
  );
};

export default Course;

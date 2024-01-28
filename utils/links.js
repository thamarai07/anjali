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

export const navLinks = [
    
    {
        id : 1,
        title : "Home",
        href : "/",
        isMegaMenu :  true
    },{
        id : 3,
        title : "Courses",
        href : "/courese/",
        isMegaMenu :  true
    },
    
    {
        id : 2,
        title : "About Us",
        href : "/aboutus",
        isMegaMenu :  true
    },
  
    
    {
        id : 4,
        title : "Contact Us",
        href : "/contactus",
        isMegaMenu :  true
    }
] 



export const TestLinks =[
    {
        id: 1,
        Title  : "C, C++",
        href: "c_c_plus_plus",
        icons : <SiCplusplus size={40} />

    },
    {
        id: 2,
        Title  : "Java",
        href: "java",
        icons : <FaJava size={40}/>

    },
    {
        id: 3,
        Title  : "Python",
        href :"python",
        icons : <SiPython size={40}/>
    },
    {
        id: 4,
        Title  : "AngularJs",
        href : "AngularJs",
        icons : <FaAngular size={40}/>
    }
]


export const TestLinks2=[
    {
        id: 1,
        Title  : "C, C++",
        href: "c_c_plus_plus",
        icons : <SiCplusplus size={20} />

    },
    {
        id: 2,
        Title  : "Java",
        href: "java",
        icons : <FaJava size={20}/>

    },
    {
        id: 3,
        Title  : "Python",
        href :"python",
        icons : <SiPython size={20}/>
    },
    {
        id: 4,
        Title  : "AngularJs",
        href : "AngularJs",
        icons : <FaAngular size={20}/>
    }
]

export const megaMenuLinks = [
    {
        id : 1,
        title : "test"
    }
]
export const TestLinksContent = [

    {
        id : 1,
        name : "asdfs"
    }

]
export const TestLinksContents = [
    {
        id :1,
        Content : [
            {
                id : 1,
                slug : "#",
                Title : "Testt",
                image : "../../public/next.svg"
            }
        ]
    }
]

export const CourseArray = [

    {
        id : 1,
        title : "Java",
        "sub" : "Master Java Programming Excellence:",
        "subTwo" : " Unlock the Power of Code with Our ISO Certified Training for Students and Professionals!",
        "img" : "/courseimages/java/java10.jpg"
    },
    {
        id : 2,
        title : "Multimedia",
        "sub" : "Unlocking Creativity:",
        "subTwo" : "Multimedia Excellence with ISO Certification for Students and Professionals.",
        "img" : "/courseimages/multimedia/multimedia.avif"
    },
    {
        id : 3,
        title : "Datascience",
        "sub" : "Unlock Insights, Drive Excellence: ",
        "subTwo" : "Data Science Mastery with ISO-Certified Training for Students and Professionals.",
        "img" : "/courseimages/datascience/datascience.jpg"
    },

]

export const UnicOfanjali = [
    {
        id : 1,
        title  : "Part Time Job Oppurtunity",
        "content" : "Unlock Your Potential with Anjali Computer Education! Explore Exciting Part-Time Job Opportunities – Join Us and Build Your Future Today! Flexible Hours, Valuable Skills, and a Thriving Career Awaits. Apply Now!",
        "image" : "/unic/part-time.jpg",
        "icon" : "/unic/icons/parttimejob.png" 
    },
    {
        id : 2,
        title  : "Experienced & Expert Trainers",
        "content" : "Elevate your skills with Anjali Computer Education, where we bring together seasoned industry experts for a transformative learning experience. Our courses, led by experienced trainers, ensure career-ready proficiency and success. Join us in shaping your future today!",
        "image" : "/unic/expert-trainer.jpg",
        "icon" : "/unic/icons/expert-trainner.png" 
    },
    {
        id : 3,
        title  : "Easy installments",
        "content" : "Embark on your learning journey hassle-free with Anjali Computer Education. Unlock knowledge through easy installments, making career-enhancing courses accessible to all aspiring students. Enroll today and empower your future!",
        "image" : "/unic/easy-installment.jpg",
        "icon" : "/unic/icons/installment.png" 
    },
    {
        id : 4,
        title  : "Flexible Timings",
        "content" : "Unlock the power of flexible learning with Anjali Computer Education. Our courses cater to your schedule, providing convenient, personalized training with adaptable timings. Shape your future at your pace!",
        "image" : "/unic/flexible-timing.jpg",
        "icon" : "/unic/icons/flexiable-time.png" 
    },
    {
        id : 5,
        title  : "Online class",
        "content" : "Embark on a journey of digital mastery with Anjali Computer Education! Join our online classes for expert-led training, advancing your career from the comfort of your home. Unlock the power of knowledge with industry-focused courses, personalized guidance, and flexible schedules. Elevate your skills online with us!",
        "image" : "/unic/online-class.jpg",
        "icon" : "/unic/icons/onlineclasss.png" 
    },
    {
        id : 6,
        title  : "Hightech Computer Lab",
        "content" : "Step into the Future of Learning at Anjali Computer Education. Our Hightech Computer Lab offers cutting-edge technology, fostering an immersive and innovative environment for hands-on, skill-driven education. Join us for an unparalleled learning experience where technology meets expertise, empowering you for a successful career journey.",
        "image" : "/unic/hightech-computer-lap.jpg",
        "icon" : "/unic/icons/computerlab.png" 
    },
    {
        id : 7,
        title  : "Regular & Weekend Classes",
        "content" : "Elevate your skills with Anjali Computer Education! Experience flexible learning with our Regular & Weekend Classes, expertly designed for your success. Join us on a journey of professional growth!",
        "image" : "/unic/regular-class-and-weekend-classs.jpg",
        "icon" : "/unic/icons/flexiable-time.png" 
    },
    {
        id : 8,
        title  : "Special Timing in School / College Student's & House Wifes",
        "content" : "Unlock new opportunities with Anjali Computer Education! Tailored courses with special timings for students and housewives. Elevate your skills at your convenience. Join us for a transformative learning experience!",
        "image" : "/unic/courses-for-housewife.jpg",
        "icon" : "/unic/icons/speacial-timing.png" 
    }
]

// Franchise Opportunities: Join our network of successful educational centers.
// Career Guidance: We guide and mentor students to shape their future.
// Skill Development: Tailored courses for freshers and skill enhancement.
// ISO Certification: Ensuring quality education and recognized qualifications.


export const CourseContent = {
    id: 1,
    courseTitle : "ADVANCED DIPLOMA IN JAVA TECHNOLOGY (ADJT)",
    duration : "3 Month",
    CoreTopics :[
        {
            id :1,
            Content : "Java Technology (Core Java, Adv. Java, J2EE & XML)"
        },
        {
            id :2,
            Content : "MS-SQL Server"
        }
    ],
    iso : "ISO Certified",
    image : "/courseimages/java/java1.avif",
    Slogan : "Unlock the Power of Code with Our ISO Certified Training for Students and Professionals!",
    Introduction: <>A Master Diploma in Java Technology is an advanced-level program focusing on in-depth learning and mastery of the Java programming language and its associated technologies. It's designed to provide comprehensive knowledge and skills in various aspects of Java development, preparing individuals for careers in software development, enterprise applications, and more. 
    <br/> 
    <br/> 

    These programs typically cover advanced Java concepts such as multithreading, networking, advanced data structures, design patterns, frameworks like Spring or Hibernate, database connectivity (JDBC), web development with Servlets and JSP (Java Server Pages), and Enterprise JavaBeans (EJB) for building scalable applications. 
    <br/>
    <br/> 

    A Master Diploma in Java Technology aims to equip individuals with the expertise needed to develop robust, scalable, and enterprise-level applications using Java, preparing them for roles as Java developers, software architects, system analysts, or other positions within the software development industry.    
        </>,
        ScopeofCourseContent : "Our course is designed to empower you with essential skills and knowledge in Java. Whether you're a beginner or looking to enhance your expertise, our carefully crafted curriculum covers everything you need to succeed. From practical hands-on experience to theoretical foundations, we've got you covered. By the end of the course, you'll be equipped with the tools to excel in Information Technology, setting you on a path to professional growth and success.",
    ScopeofCourse: [
        {
            id : 1,
            scope : 'Comprehensive Java Programming Skills'
        },
        {
            id : 2,
            scope : "Advanced Java Technologies"
        },
        {
            id : 3,
            scope : "Web Development with Java"
        },
        {
            id : 4,
            scope : "Enterprise Application Development"
        },
        {
            id : 5,
            scope : "Database Integration"
        },
        {
            id : 6,
            scope : "Mobile Application Development"
        },
        {
            id : 7,
            scope : "Cloud Computing with Java"
        },
        {
            id : 8,
            scope : "Security in Java Applications"
        },
        {
            id : 9,
            scope : "Performance Optimization"
        },
        {
            id : 10,
            scope : "Project Management and Collaboration"
        },
    ],
    CareerProspectsJobRoles: [
        {
            id : 1,
            jobrole : "Java Developer"
        },
        {
            id : 2,
            jobrole : "Software Architect"
        },
        {
            id : 3,
            jobrole : "Java Development Lead"
        },
        {
            id : 4,
            jobrole : "Java Development Manager"
        },
        {
            id: 5,
            jobrole : "Java Full Stack Developer"
        },
        {
            id: 6,
            jobrole : "Big Data Developer (with Java)"
        },
        {
            id: 7,
            jobrole : "Enterprise Java Application Developer"
        },
        {
            id: 8,
            jobrole : "Cloud Solutions Architect (Java Cloud)"
        },
        {
            id: 9,
            jobrole : "Mobile Application Developer (using Java for Android)"
        },
        {
            id: 10,
            jobrole : "Java Technical Consultant"
        }
    ],
    IdealFor : [
        {
            id : 1,
            ideal : "Beginners",
        },
        {
            id : 2 ,
            ideal : "Students/College Graduates"
        },
        {
            id : 3,
            ideal : "Web Developers"
        },
        {
            id : 4,
            ideal : "Mobile App Developers"
        },
        {
            id : 5,
            ideal : "Experienced Programmers from Other Languages"
        },
        {
            id : 6,
            ideal : "Enterprise Developers"
        },
        {
            id : 7,
            ideal : "Data Scientists"
        },
        {
            id : 8,
            ideal : "Automation Testers"
        },
        {
            id : 9,
            ideal : "Automation Testers"
        }
        ,{
            id : 10 ,
            ideal : "Game Developers"
        },
        {
            id  : 11,
            ideal : "IT Professionals and System Administrators:"
        }
    ],
    BenefitsoftheCourse : [
        {
            id : 1,
            Benefit : " Expert-Level Mastery: Gain a deep understanding of the Java programming language and its advanced features. Master complex concepts such as multithreading, networking, design patterns, and advanced data structures."
        },
        {
            id : 2 ,
            Benefit : "Framework Proficiency: Learn to leverage powerful Java frameworks like Spring and Hibernate to streamline development and build robust, scalable applications."
        }, 
        {
            id : 3 ,
            Benefit : "Database Connectivity: Acquire expertise in database connectivity using JDBC, enabling you to seamlessly integrate Java applications with various databases."
        }
        ,  
        {
            id : 4 ,
            Benefit : "Web Development Prowess: Explore the intricacies of web development with Servlets and JSP (Java Server Pages). Develop the skills to create dynamic and interactive web applications."
        }
        ,
        {
            id : 5,
            Benefit : "Enterprise-Grade Applications: Dive into the world of Enterprise JavaBeans (EJB) to understand how to build scalable, enterprise-level applications that meet the demands of modern businesses."
        }
    ]

    

}

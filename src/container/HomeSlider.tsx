import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseArray } from "../../utils/links";
import Image from "next/image";
import CourseIcon from "../../utils/icons";
import Link from "next/link";
const SimpleSlider = () => {
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
  };

  return (
    <div className="mt-14">
        <div className="grid grid-cols-4 m-auto justify-items-center gap-14 gap-y-24">
          {
            CourseIcon.map((values)=>(
              <>
              <Link href={"#"} className="bg-green-500 hover:bg-blue-500 hover:text-white hover:font-semibold p-4 rounded text-center w-[60%] m-auto">
                {values.icons}   
                <span className="text">{values.name}</span>
              </Link>
              </>
            ))
          }
        </div>
      {/* <Slider {...settings}>
       {CourseArray.map((values)=>(
        <div className="lg:!flex" key={values.id}>
            <div className="">
                <Image src={values.img} alt={values.title} width={600} className=" lg:p-10 p-5 rounded"  height={300}/>
            </div>
            <div className="m-auto">
              <div className="flex lg:gap-32 gap-10 items-center">
                <p className="titleMain lg:text-[44px] text-[20px]">{values.title}</p>
                <Image src={"/ISO-certification-scaled.webp"} width={80} height={80} alt="iso-certificate" className="lg:w-[80px] w-[60px]"/>
              </div>
                <p className="text-green-600 font-extrabold lg:text-[34px] text-[24px]">{values.sub}</p>
                <p className="lg:text-[25px] text-[18px] font-semibold">{values.subTwo}</p>
                <button className="KnowMoreBtn ">Know more</button>
            </div>
        </div>
       ))}
      </Slider> */}
    </div>
  );
};

export default SimpleSlider;
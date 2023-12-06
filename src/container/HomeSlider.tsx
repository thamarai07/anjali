import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseArray } from "../../utils/links";
import Image from "next/image";

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
    <div className="">
        <div></div>
      <Slider {...settings}>
       {CourseArray.map((values)=>(
        <div className="lg:!flex" key={values.id}>
            <div className="">
                <Image src={values.img} alt={values.title} width={600} className=" lg:p-10 p-5 rounded"  height={300}/>
            </div>
            <div className="m-auto">
              <div className="lg:flex gap-52 items-center">
                <p className="titleMain">{values.title}</p>
                <Image src={"/ISO-certification-scaled.webp"} width={80} height={80} alt="iso-certificate"/>
              </div>
                <p className="title">{values.sub}</p>
                <p className="titleTwo ">{values.subTwo}</p>
                <button className="KnowMoreBtn ">Know more</button>
            </div>
        </div>
       ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
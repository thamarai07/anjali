import React from "react";
import PropTypes from "prop-types";
import { UnicOfanjali } from "../../utils/links";
import Image from "next/image";
import { Limiting } from "@/functions/stringLimit";
function Unic() {
  return (
    <div className="mt-20">
      <div className="lg:grid grid-cols-3 gap-10 m-auto justify-items-center">
        {UnicOfanjali.map((values) => (
          <>
            <div className="border-[1px] border-gray-300 p-3 ">
              <div className="">
                <Image
                  src={values.image}
                  alt={values.title}
                  width={300}
                  height={80}
                />
              </div>
              <div className="flex gap-10 ">
                <p className="mt-4 text-[18px] text-[#004e29] font-semibold">
                  {values.title}
                </p>
              </div>
              <div className="flex  ">
                <p className="mt-2 text-[16px] font-semibold">
                  {Limiting(values.content, 10)}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

Unic.propTypes = {};

export default Unic;

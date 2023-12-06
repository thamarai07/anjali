import { useEffect, useState } from "react";
interface OnmeObjInterFace {
  starting: number;
  speed: number;
}
export const GlobalIncrement = (Starting: OnmeObjInterFace) => {
  const [GlobalNumber, SetNumber] = useState(0);
  const [Active, setActive] = useState(false);
  const [CurrentPosition, GetCurrentPosition] = useState(0);
  //   const []

  useEffect(() => {
    if (Active == true) {
      let i = 0;
      while (i < Starting.starting) {
        Functionss1(i);
        i++;
      }
    }
  }, [Active]);
  console.log(CurrentPosition,"CurrentPosition")
  useEffect(() => {
    if (CurrentPosition && CurrentPosition >= 120 && CurrentPosition <= 130) {
      setActive(true);
    }
  }, [CurrentPosition]);
  const Functionss1 = async (St: number) => {
    setTimeout(function () {
      SetNumber(St);
    }, Starting.speed * St);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset >= 100) {
        GetCurrentPosition(window.pageYOffset);
      }
    });
  }
  return { GlobalNumber };
};

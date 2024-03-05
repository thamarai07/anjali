import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavLink from "../Nav/nav-link";
import {
  navLinks,
  TestLinks,
  TestLinks2,
  TestLinksContent,
  TestLinksContents,
} from "../../../utils/links";
import { Transition } from "@headlessui/react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [NavOpen, setNavOpen] = useState(true);

  const HanldeSVGClosed = () => {
    setIsMenuOpen(false);
    setNavOpen(false);
  };

  const HanldeSVGOpen = () => {
    setIsMenuOpen(true);
    setNavOpen(true);
  };

  const { adpage } = router.query;
  const { ad } = router.query;
  const { cm } = router.query;
  const course1 = "/course/python-software-training-course/";

  return (
    <nav>
      <div className="md:w-[100%]  bg-[#002b17] shadow-md relative z-10">
        <div className="">
          {router.pathname == "/" && (
            <Link href={"/"}>
              <Image
                src="/assets/anjali/banfirst.jpg"
                className="m-auto pt-10"
                alt=""
                width={800}
                height={100}
              />
            </Link>
          )}
        </div>
        <div className="flex justify-between md:px-20 px-2 align-center items-center text-white">
          <div>
            {router.pathname != "/" && (
              <Link href={"/"}>
                <Image
                  src="/anjalilogo.png"
                  className="m-auto "
                  alt=""
                  width={200}
                  height={100}
                />
              </Link>
            )}
          </div>

          <NavLink/>
         
        
        </div>
      </div>
    </nav>
  );
};

export default Header;

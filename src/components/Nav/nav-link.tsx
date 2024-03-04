import Link from "next/link";
import React, { useState } from "react";
import MegaMenu from "./mega-menu";

const NavLink = ({ title, href, isMegaMenu, megaMenuLinks, ContentMegaLink, TestLinksContents }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleShow = (data : boolean) =>{
    setIsHovered(data)
  }

  return isMegaMenu && megaMenuLinks ? (
    <div
      className="relative group transition-transform duration-300 ease-in-out transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className="m-10 font-semibold">
        {title}
      </Link>
      {title == "Courses" && 
      <div
        className={`absolute top-full bg-white p-4  -right-[530px] w-[1200px] ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"
        }`}
      >
          <MegaMenu title={title} megaMenuLinks={megaMenuLinks} ContentMegaLink={ContentMegaLink} TestLinksContents={TestLinksContents} handleShow={handleShow} />
      </div>}
    </div>
  ) : null;
};

export default NavLink;

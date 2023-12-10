import Link from "next/link";
import React, { useState, useCallback } from "react";
import MegaMenu from "./mega-menu";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavLink = ({ title, href, isMegaMenu, megaMenuLinks, ContentMegaLink, TestLinksContents, className, id,Show } : any) => {
    const [isMegaMenuShown, setIsMegaMenuShown] = useState(false);
    const [ShowingIndex, setShowingIndex] = useState(0);
    const [DropDown, showDropDown] = useState(false);
    const [Title, setTitle] = useState(title);
    const [ArrowTouched, setArrowTouched] = useState(false);
    const [Hover, setHover] = useState(false);

    const handleTitleIndex = useCallback((data : any) => {
        setShowingIndex(data);
        setArrowTouched((pre) => !pre);
    }, []);
    const HandleDropdown = useCallback(() => {
        if (DropDown == false) {
            showDropDown(true);
        } else {
            showDropDown(false);
        }
    }, [DropDown]);

    const HandleNavShowParent = useCallback((data : any) => {
        setHover(data);
    }, []);


    return isMegaMenu && megaMenuLinks ? (
        <>
            <div className={` ${Hover == true ? "hoverable" : ""} lg:w-[100%] w-[90%] m-auto`}>
                <div className={" lg:cursor-pointer lg:mx-10 pb-1"}>
                    <div
                        className={`lg:text-[15px] text-[16px] lg:font-semibold lg:px-0 px-3 lg:py-0 py-2 lg:border-0  lg:block flex justify-between lg:text-black font-semibold ${
                            id == ShowingIndex ? "text-red-600 border-b-2 border-dashed border-red-600" : " border-b-2 border-dashed border-gray-400"
                        }`}
                    >
                        <div onClick={HandleDropdown} onMouseEnter={() => setHover(true)} 
                          className="text-white">
                            {Title}
                        </div>

                        <div className={"lg:hidden block toggle-btn" + " " + `${DropDown === true ? "active" : ""}`} onClick={HandleDropdown}>
                            <div className={"arrow-top"}></div>
                        </div>
                    </div>
                    {DropDown && (
                        <div className={"lg:hidden block drop-down-menu-items" + " " + `${DropDown === true ? "droped" : ""}`}>
                            {ContentMegaLink.map((value : any, indexs: any) => (
                                <div key={indexs} className="text-[18px] lg:hidden block lg:px-0 px-4 lg:py-0 py-1 lg:mt-0 mt-0 lg:mb-0  menu-items-down">
                                    <div className="lg:font-bold lg:block hidden font-semibold">{value.Content} </div>

                                    <div className="lg:font-bold lg:hidden flex items-center text-[14px] font-semibold border-b border-solid border-gray-300 lg:mt-4 mt-2 p-3" onClick={() => handleTitleIndex(value.id)}>
                                        {value.Content}
                                        <div className={"arrow-bottom"}>{ArrowTouched == true ? <MdKeyboardArrowDown /> : <MdKeyboardArrowDown />}</div>
                                    </div>

                                    {TestLinksContents.map((valuess : any) => (
                                        <>
                                            <div className="lg:block hidden">
                                                {valuess.Content.map((val : any, index : any) => (
                                                    <div className="grid" key={index}>
                                                        {val.Title}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="lg:hidden block ">
                                                {valuess.Content.map((val : any, index : any) => (
                                                    <>
                                                        {ShowingIndex === value.id && valuess.id === ShowingIndex  ? (
                                                            <Link href={"/course/" + val.slug} onClick={()=>Show((pre: any) => !pre)}>
                                                                <div className="p-1 grid items-center">
                                                                    <div className="flex items-center gap-4 ">
                                                                        <Image src={val.image} height={100} width={25} className=" align-center"  alt="one"/>
                                                                        <h6 className="text-[13px]  align-center">{val.Title}</h6>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </>
                                                ))}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={`sm:mb-0 mega-menu absolute left-[25%] top-24`} onMouseOver={() => setIsMegaMenuShown(true)} onMouseOut={() => setIsMegaMenuShown(false)}>
                    {
                        Hover && 
                    <MegaMenu title={Title} megaMenuLinks={megaMenuLinks} ContentMegaLink={ContentMegaLink} TestLinksContents={TestLinksContents} HandleNavShowParent={HandleNavShowParent} />
                    }
                </div>
            </div>
            <div className={`sm:mb-0 lg:hidden block`} onMouseOver={() => setIsMegaMenuShown(true)} onMouseOut={() => setIsMegaMenuShown(false)}>
                <MegaMenu title={Title} megaMenuLinks={megaMenuLinks} ContentMegaLink={ContentMegaLink} TestLinksContents={TestLinksContents} />
            </div>
        </>
    ) : (
        
        <>
        </>
    );
};

export default NavLink;

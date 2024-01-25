import { SiPython } from 'react-icons/si';
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
import { SiPhp } from "react-icons/si";
import { GrMultimedia } from "react-icons/gr";
import { GrCloudComputer } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import Image from "next/image"
const pythonIcon = <SiPython size={70} className={"text-gray-100 w-[100%]"} />;
const GiMaterialsScienceIcon = <GiMaterialsScience size={70} className={"text-gray-100 w-[100%]"} />;
const TbTallymarksIcon = <TbTallymarks size={70} className={"text-gray-100 w-[100%]"} />;
const FaJavaIcon = <FaJava size={70} className={"text-gray-100 w-[100%]"} />;
const DiDotnetIcon = <DiDotnet size={70} className={"text-gray-100 w-[100%]"}  />;
const FaAngularIcon = <FaAngular size={70} className={"text-gray-100 w-[100%]"} />;
const FaNetworkWiredIcon = <FaNetworkWired size={70} className={"text-gray-100 w-[100%]"} />;
const SiSapIcon = <SiSap size={70} className={"text-gray-100 w-[100%]"}/>;
const SiMicrosoftofficeIcon = <SiMicrosoftoffice size={70} className={"text-gray-100 w-[100%]"}/>;
const SiCplusplusIcon = <SiCplusplus size={70} className={"text-gray-100 w-[100%]"} />;
const GrMysqlIcon = <GrMysql size={70} className={"text-gray-100 w-[100%]"}/>;
const SiPhpIcon = <SiPhp size={70} className={"text-gray-100 w-[100%]"}/>;
const GrMultimediaIcon = <GrMultimedia size={70} className={"text-gray-100 w-[100%]"}/>;
const GrCloudComputerIcon = <GrCloudComputer size={70} className={"text-gray-100 w-[100%]"}/>
const IoHardwareChipIcon = <IoHardwareChip size={70} className={"text-gray-100 w-[100%]"}/>
const autocadIcon = <Image src={"/assets/autocad.svg"} height={70} width={70} alt='autocad' className='text-white  w-[50%] m-auto'/> 

const CourseIcon = [
    {
        id: 7,
        icons: pythonIcon,
        name : "python"
    },
    {
        id: 7,
        icons: GiMaterialsScienceIcon,
        name : "Data Science"

    },
    {
        id: 7,
        icons: TbTallymarksIcon,
        name :"Tally Prime"
    },
    {
        id : 8,
        icons : FaJavaIcon,
        name :"Java"
    },
    {
        id : 12,
        icons : DiDotnetIcon,
        name : ".Net"
    },
    {
        id : 5,
        icons : FaAngularIcon,
        name : "AngularJS"
    },
    {
        id : 6,
        icons : FaNetworkWiredIcon,
        name : "NetWorking"
    },
    {
        id : 6,
        icons : SiSapIcon,
        name : "SAP"
    },
    {
        id : 6,
        icons : SiMicrosoftofficeIcon,
        name : "MicroSoftOffice"
    },
    {
        id : 6,
        icons : GrMysqlIcon,
        name : "MySQL"
    },
    {
        id : 6,
        icons : SiPhpIcon,
        name : "PHP"
    },
    {
        id : 6,
        icons :autocadIcon,
        name :"AutoCAD"
    }
    
];
export default CourseIcon




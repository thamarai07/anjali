import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
  HomeIcon,
  PhotoIcon,
  UserGroupIcon,
  PhoneIcon
} from "@heroicons/react/24/solid";
import { BiLogoPython } from "react-icons/bi";
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title} className="">
      <MenuItem>
        <Typography variant="h6"  className="mb-1 lg:text-black text-white flex" >
          {title} <BiLogoPython size={24}/>
        </Typography>
        <Typography variant="small" color="gray" className="font-normal lg:text-black text-white">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-[18px] font-medium text-white lg:flex ">
              <Square3Stack3DIcon className="h-[20px] w-[20px] " />
              Courses
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden grid-cols-7 gap-3 overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]  font-medium" />{" "}
        Courses{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "Gallery",
    icon: PhotoIcon,
  },
  {
    label: "About Us",
    icon: UserGroupIcon,
  },
  {
    label: "Contact Us",
    icon: PhoneIcon,
  },
  
];

function NavList() {
  return (
    <ul className=" flex flex-col gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-white">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          className="font-medium text-white text-[18px]"
        >
          <MenuItem className="flex items-center gap-2 text-white">
            {React.createElement(icon, {
              className: "h-[18px] w-[18px]",
            })}{" "}
            <span className="text-white"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const NavLink = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className=" lg:p-4  border-none bg-[#002b17]">
      <div className="relative mx-auto flex items-center justify-end text-white">
        <div className="hidden lg:block text-white">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll " >
        <NavList />
      </MobileNav>
    </Navbar>
  );
};
export default NavLink;

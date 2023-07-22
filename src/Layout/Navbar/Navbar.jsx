import { CgSearch } from "react-icons/cg";
import Select from "react-select";
import {
  BiSupport,
  BiPhoneCall,
  BiLogIn,
  BiImage,
  BiMessageAltError,
} from "react-icons/bi";
import {
  TfiLayoutAccordionList,
  TfiLayoutGrid2Thumb,
  TfiLayoutSlider,
  TfiViewListAlt,
} from "react-icons/tfi";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { TbBrandBlogger, TbListDetails } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLayout,
} from "react-icons/ai";
import { MdOutlineReviews, MdOutlineMail } from "react-icons/md";
import { RiContactsLine, RiPagesLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import logo from "../../assets/ProductImage/logo.png";

import {
  BsArrowUpCircle,
  BsFilterLeft,
  BsGrid1X2,
  BsInfoSquare,
  BsLayoutSidebarReverse,
  BsReverseLayoutSidebarReverse,
  BsReverseLayoutTextSidebarReverse,
  BsShop,
} from "react-icons/bs";
import blogPage from "../../assets/Mega-Menu-img/BlogPage.png";
import image1 from "../../assets/Mega-Menu-img/tables.jpg";
import gif from "../../assets/Mega-Menu-img/image_processing20200518-20352-9jxr3y.gif";
import { FaQuestion } from "react-icons/fa";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import { useEffect, useState } from "react";
import SelectOption from "../../Components/SelectOption/SelectOption";
import blog from "../../assets/ProductImage/blog.jpg";
import sofa3 from "../../assets/ProductImage/sofa3.jpg";

export const navItem =
  "md:ml-4 flex justify-between items-center mb-1  px-3 py-1 rounded-md cursor-pointer font-semibold transition duration-500";

const Navbar = () => {
  const [homeVisible, setHomeVisible] = useState(false);
  const [shopVisible, setShopVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [vendorVisible, setVendorVisible] = useState(false);
  const [pagesVisible, setPagesVisible] = useState(false);

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle the menu visibility
  const HomeMenu = () => {
    setHomeVisible(!homeVisible);
  };
  const ShopMenu = () => {
    setShopVisible(!shopVisible);
  };
  const BlogMenu = () => {
    setBlogVisible(!blogVisible);
  };
  const VendorMenu = () => {
    setVendorVisible(!vendorVisible);
  };
  const PagesMenu = () => {
    setPagesVisible(!pagesVisible);
  };
  // Function to hide the menu items and menu itself
  const hideHomeMenu = () => {
    setHomeVisible(false);
  };
  const hideShopMenu = () => {
    setShopVisible(false);
  };
  const hideBlogMenu = () => {
    setBlogVisible(false);
  };
  const hideVendorMenu = () => {
    setVendorVisible(false);
  };
  const hidePagesMenu = () => {
    setPagesVisible(false);
  };
  const scrollBottomToTop = () => {
    window.scrollTo(0, 0);
  };

  const [navbarOptions, setNavbarOptions] = useState([]);

  useEffect(() => {
    fetch('jsonData/navbar.json')
      .then(res => res.json())
      .then(data => setNavbarOptions(data))
  }, [])

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };
  return (
    <div className="">
      <div className="flex justify-between px-5 md:px-10 py-1 bg-primary relative text-secondary z-[9999]">
        <div className="text-secondary">
          <ul className="flex items-center">
            <Link to="/contact">
              <li className="mr-5 font-semibold flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md">
                <RiContactsLine className="mr-1" /> Contact
              </li>
            </Link>
            <li className="mr-5 font-semibold flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md cursor-pointer">
              <MdOutlineReviews className="mr-1" /> Reviews
            </li>
            <li className="mr-5 font-semibold hidden lg:block hover:bg-white hover:text-primary px-1 duration-300 rounded-md cursor-pointer">
              <div className="flex items-center">
                <BiSupport className="mr-1" /> Support
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="mr-5 font-semibold  hidden lg:block">
              <div className="flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md">
                <BiPhoneCall className="mr-1" />
                <a href="callto:+8801765896545">+8801765896545</a>
              </div>
            </li>
            <li className="mr-5 font-semibold hidden lg:block">
              <div className="flex items-center hover:bg-white hover:text-primary px-1 duration-300 rounded-md">
                <MdOutlineMail className="mr-1" />
                <a href="mailto:weero@furniture.com">weero@furniture.com</a>
              </div>
            </li>
            <Link to="/wishlist">
              <li className="mr-5 font-semibold hover:bg-white hover:text-primary rounded-full duration-300 px-0.5">
                <AiOutlineHeart className=" text-3xl mx-auto" />
              </li>
            </Link>
            <Link to="/cart">
              <li className="font-semibold flex hover:bg-secondary hover:text-primary rounded-full duration-300 px-0.5">
                <AiOutlineShoppingCart className="text-3xl" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Marquee className=" ">
        <p className="py-0.5 font-semibold text-primary">
          Exclusive limited-time offer: Upgrade your living space with our
          stylish and versatile furniture collection, designed to enhance
          comfort and elevate your home decor.
        </p>
      </Marquee>
      <div className=" w-full transition duration-700">
        {/* for Big Device */}
        <div
          className={`${isNavbarFixed ? "lg:fixed w-full top-0 shadow-md" : ""
            } bg-secondary py-2 z-50 hidden lg:block`}
        >
          {/* here alignment fixed for whole nav looks like */}
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex justify-center items-center">
              <Link to="/">
                <h1 className="text-lg font-semibold flex items-center">
                  <img className="w-12 mr-1" src={logo} alt="" />
                  WEERO <span className="text-primary">FURNITURE</span>
                </h1>
              </Link>
            </div>
            {/* for mega menu range */}
            <div className="flex items-center relative">
              <div className="flex items-center">
                <div className="bg-white flex justify-between items-center">
                  <input
                    className="py-1 px-1 hidden lg:block focus:outline-none focus:border border-primary"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="text-2xl p-2">
                    <CgSearch />
                  </span>
                </div>
                <SelectOption />
              </div>
              <div>
                {/* home menu */}
                <ul className="flex items-center">
                  <nav>
                    <div
                      className=" cursor-pointer"
                      onMouseEnter={HomeMenu}
                      onMouseLeave={HomeMenu}
                    >
                      <div className="flex">
                        {navbarOptions.map((option) => (

                          <li
                            key={option._id}
                            className={`${activeMenu === option._id ? "active" : ""
                              }`}
                            onMouseEnter={() => toggleMenu(option._id)}
                            onMouseLeave={() => toggleMenu(option._id)}
                          >
                            <span className="py-5 ml-4 flex justify-between items-center">
                              <Link to={`/${option.url}`}>
                                {option.name}
                              </Link>
                              <span className={`ml-2 ${ option.cetegory ? "visible" : "invisible"}`}><IoIosArrowDown/></span>
                            </span>
                            {option.cetegorys && activeMenu === option._id && (
                              <div className={`absolute top-16 ${option.subcetegory && "left-0"} z-50 bg-white p-3`}>
                                {/* Mega menu dynamic */}
                                {
                                  option.subcetegory ? (
                                    <div>
                                      <div className=" bg-white rounded-md space-y-1 p-2">
                                        <div className="grid grid-cols-2 gap-3">
                                          <div>
                                            <div className="overflow-hidden">
                                              <img
                                                src={option?.img}
                                                alt=""
                                                className="w-full h-64 object rounded-md"
                                              />
                                            </div>
                                            <div className={`space-y-5 text-black mt-5 text-center p-1 ${option.name === "Blog" && "hidden"}`}>
                                              <h1 className={`uppercase text-primary font-semibold text-2xl`}>
                                                Decorate Your Home
                                              </h1>
                                              <p>
                                                Homes that differ in terms of style,
                                                concept and architectural solutions have
                                                been furnished by Furniture Factory. These
                                                spaces tell of an international lifestyle
                                                that expresses modernity, research and a
                                                creative spirit.
                                              </p>
                                              <button className="bg-primary hover:bg-gray-800 duration-300 px-3 py-2 rounded-md text-white">
                                                <a href="tel:+880171095593">
                                                  Call Us: +880 1710 095593
                                                </a>
                                              </button>
                                            </div>
                                          </div>
                                          <div className="grid grid-cols-2 text-black p-3 rounded-md">
                                            {option.cetegorys.map((category) => (
                                              <div key={category._id}>

                                                <Link to={`/${category.url}`}>
                                                  <div>
                                                    <h1 className="text-primary flex items-center justify-center space-x-1 text-xl font-semibold">
                                                      <AiOutlineLayout />
                                                      <span>{category.name}</span>
                                                    </h1>
                                                    <div
                                                      onClick={hideShopMenu}
                                                      className="p-3 hover:scale-110 duration-300"
                                                    >
                                                    </div>
                                                  </div>

                                                </Link>
                                                {category.subCetegorys && (
                                                  <div>
                                                    {category.subCetegorys.map((subCategory) => (

                                                      <Link
                                                        key={subCategory._id}
                                                        to={`/${subCategory.url}`}
                                                      >
                                                        <div
                                                          onClick={hideShopMenu}
                                                          className="p-3 hover:scale-110 duration-300"
                                                        >
                                                          <div className="grid justify-items-center">
                                                            <img className="w-12 h-12" src={subCategory.img} alt="" />
                                                            <div>
                                                              <h1 className="font-semibold text-sm">
                                                                {subCategory.name}
                                                              </h1>
                                                            </div>
                                                          </div>
                                                        </div>

                                                      </Link>
                                                    ))}
                                                  </div>
                                                )}
                                              </div>
                                            ))}

                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  )
                                    : (
                                      
                                        <ul className="bg-white rounded-lg">
                                          {
                                            option.cetegorys.map(cetegory => <li key={cetegory._id} className="text-black py-2 px-2 hover:translate-x-1 hover:text-primary duration-300">
                                            <Link
                                              to={cetegory.url}
                                            >
                                              {cetegory.name}
                                            </Link>
                                          </li>)
                                          }
                                        </ul>
                                  
                                    )
                                }


                              </div>
                            )}
                          </li>
                        ))}
                      </div>
                    </div>
                  </nav>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile device */}
        <MobileNavbar />
      </div>
    </div>
    // <div className="navbar">
    //   <ul className="navbar-menu">
    //    <div className="flex justify-between py-3 max-w-6xl mx-auto">
    //    {navbarOptions.map((item) => (
    //       <li
    //         key={item._id}
    //         className={`navbar-item ${
    //           activeMenu === item._id ? "active" : ""
    //         }`}
    //         onMouseEnter={() => toggleMenu(item._id)}
    //         onMouseLeave={() => toggleMenu(item._id)}
    //       >
    //         <span className="navbar-link">
    //           <Link to={`/${item.url}`} className="navbar-title">
    //             {item.name}
    //           </Link>
    //         </span>
    //         {item.cetegorys && activeMenu === item._id && (
    //           <div className="navbar-submenu absolute top-9 z-50 bg-white p-3">
    //             {item.cetegorys.map((category) => (
    //               <div key={category._id} className="navbar-subitem">
    //                 <Link to={`/${category.url}`}>{category.name}</Link>
    //                 {category.subCetegorys && (
    //                   <div className="navbar-submenu">
    //                     {category.subCetegorys.map((subCategory) => (
    //                       <Link
    //                         key={subCategory._id}
    //                         to={`/${subCategory.url}`}
    //                         className="navbar-subitem"
    //                       >
    //                         {subCategory.name}
    //                       </Link>
    //                     ))}
    //                   </div>
    //                 )}
    //               </div>
    //             ))}
    //           </div>
    //         )}
    //       </li>
    //     ))}
    //    </div>
    //   </ul>
    // </div>
  );
};

export default Navbar;

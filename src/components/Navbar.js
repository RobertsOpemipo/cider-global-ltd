// Navbar.js
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import Cider from '../assets/cider.png';
import './styles/Navbar.css';
import Routes from '../Routes';

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Expertise", hasDropdown: true, dropdownLinks: [
      { name: "Migration to Public Cloud", link: "/subpage1" },
      { name: "Analytics and Data Management", link: "/subpage2" },
      { name: "Business Integration and Automation", link: "/subpage2" },
    ] },
    { name: "Services", hasDropdown: true, dropdownLinks: [
      { name: "Business Solution Services", link: "/subpage3" },
      { name: "High-End Software Sales & Deployment", link: "/subpage3" },
      { name: "Functional IT Designs", link: "/subpage3" },
      { name: "Business/IT Consultancy", link: "/subpage3" },
      { name: "Software Services", link: "/subpage3" },
      { name: "Networking Products/Services", link: "/subpage4" },
    ] },
    { name: "Application", hasDropdown: true, dropdownLinks: [
      { name: "HCM", link: "/subpage5" },
      { name: "SCM", link: "/subpage5" },
      { name: "ERP-9", link: "/subpage5" },
      { name: "Custom Applications", link: "/subpage6" },
    ] },
    { name: "Company", hasDropdown: true, dropdownLinks: [
      { name: "Who We Are", link: "/subpage7" },
      { name: "Leadership Team", link: "/subpage7" },
      { name: "Careers", link: "/subpage7" },
      { name: "Our Customers", link: "/subpage8" },
    ] },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [svgTransform, setSvgTransform] = useState('rotate(180 720 160)');

  const handleDropdownClick = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));

    // Update SVG transform based on whether a dropdown is open
    setSvgTransform(prevTransform => prevTransform === 'rotate(180 720 160)' ? 'rotate(180 720 160)' : 'rotate(180 720 160)');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 text-white z-50">
        <div className="flex justify-between items-center h-full m-w-[1240px] mx-auto px-4">
          <div className="flex items-center">
            <a href="#">
              <img
                src={Cider}
                alt=""
                className="w-full h-auto max-h-16 object-contain transition-transform transform hover:scale-110"
              />
            </a>
          </div>

          <div onClick={() => setOpen(!isOpen)} className="block cursor-pointer">
            {isOpen ? <AiOutlineClose size={40} color="#fff" /> : <AiOutlineMenu size={40} color="#fff" />}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-75 w-full overflow-x-hidden transition-transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <div onClick={() => setOpen(false)}>
            <AiOutlineClose size={50} color="#fff" />
          </div>
        </div>
        <div className="bg-blue-600 text-white w-full relative overflow-hidden">
          <ul className="py-4">
            {Links.map((link, index) => (
              <li key={link.name} className="text-xl my-3">
                <a
                  href={link.link}
                  className={`text-white font-bold bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded flex items-center ${
                    link.hasDropdown ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleDropdownClick(index)}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <span className="ml-2">
                      {openDropdown === index ? <AiOutlineUp /> : <AiOutlineDown />}
                    </span> 
                  )}
                </a>
                {link.hasDropdown && (
                  <div className={`ml-4 ${openDropdown === index ? 'block' : 'hidden'}`}>
                    <ul className="ml-4 list-disc">
                      {link.dropdownLinks.map((dropdownLink, subIndex) => (
                        <li key={dropdownLink.name} className="text-white font-bold border-b border-white">
                          <a href={dropdownLink.link} className="block py-2 px-4 hover:bg-blue-700">
                            {dropdownLink.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* Add SVG wave-like design at the end of the navbar with dynamic transform */}
          <svg xmlns="http://www.w3.org/2000/svg" className="mySvg w-full h-auto transition-transform duration-500" viewBox="0 0 1440 320" style={{ transform: svgTransform }}>
            <path fill="#3498db" fillOpacity="1" d="M0,256L16,256C32,256,64,256,96,224C128,192,160,128,192,117.3C224,107,256,149,288,186.7C320,224,352,256,384,250.7C416,245,448,203,480,202.7C512,203,544,245,576,250.7C608,256,640,224,672,229.3C704,235,736,277,768,293.3C800,309,832,299,864,282.7C896,267,928,245,960,245.3C992,245,1024,267,1056,250.7C1088,235,1120,181,1152,138.7C1184,96,1216,64,1248,53.3C1280,43,1312,53,1344,90.7C1376,128,1408,192,1424,224L1440,256L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
              transform={svgTransform}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;

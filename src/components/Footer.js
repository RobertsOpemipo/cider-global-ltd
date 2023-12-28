import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
} from 'react-icons/fa';
import Cider from '../assets/cider.png';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-[#0400ff]'>
        <div className='mb-8 lg:mb-0'>
            <a href='#'>
            <img
                src={Cider}
                alt=''
                className='w-150 h-auto max-h-20 object-contain transition-transform transform hover:scale-110'
            />
            </a>
            <p className='mt-4'>
            Block 176, Flat3, Zone B.
            Iba Housing Estate,
            Iba Lagos
            </p>
            <div className='flex justify-between mt-6'>
            <a href='#'>
                <FaLinkedin size={30} />
            </a>
            <a href='#'>
                <FaFacebookSquare size={30} />
            </a>
            <a href='#'>
                <FaGithubSquare size={30} />
            </a>
            <a href='#'>
                <FaInstagram size={30} />
            </a>
            <a href='#'>
                <FaTwitterSquare size={30} />
            </a>
            </div>
        </div>

        <div className='lg:col-span-3 lg:flex justify-between flex-wrap mt-6'>
            <div className='mb-8 lg:mb-0'>
            <h6 className='font-medium text-gray-400'>Expertise</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Migration to Public Cloud</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Analytics and Data Management</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Business Integration and Automation</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Managed Services</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>On Premise Applications</a>
                </li>
            </ul>
            </div>

            <div className='mb-8 lg:mb-0'>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Who We Are</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Leadership Team</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Careers</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Our Customers</a>
                </li>
            </ul>
            </div>

            <div className='mb-8 lg:mb-0'>
            <h6 className='font-medium text-gray-400'>Applications</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>HCM</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>SCM</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>EPM</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Custom Applications</a>
                </li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-gray-400'>Services</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Business Solution Services</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>High-End Software</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Sales & Deployment</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Functional IT Designs</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Business/IT Consultancy</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Software Services</a>
                </li>
                <li className='py-2 text-sm hover:text-[#f5d7db]'>
                <a href='#'>Networking Products/Services</a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Footer;

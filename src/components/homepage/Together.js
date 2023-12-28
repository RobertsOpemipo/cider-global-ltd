import React from 'react';
import { Link } from 'react-scroll';

const Together = () => {
    return (
        <div className="BodyTogetherness relative overflow-hidden text-blue-700 bg-white text-center p-16 flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mySvg absolute top-0 left-0 w-full h-auto" viewBox="0 0 1440 320">
            <path fill="#3498db" fillOpacity="1" d="M0,256L16,256C32,256,64,256,96,224C128,192,160,128,192,117.3C224,107,256,149,288,186.7C320,224,352,256,384,250.7C416,245,448,203,480,202.7C512,203,544,245,576,250.7C608,256,640,224,672,229.3C704,235,736,277,768,293.3C800,309,832,299,864,282.7C896,267,928,245,960,245.3C992,245,1024,267,1056,250.7C1088,235,1120,181,1152,138.7C1184,96,1216,64,1248,53.3C1280,43,1312,53,1344,90.7C1376,128,1408,192,1424,224L1440,256L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path>
        </svg>
        <div className="Togetherness relative z-10 pt-60">
            <h3 className="text-4xl font-bold text-blue-700 mb-4">Together.</h3>
            <p className="text-lg text-blue-700 mb-8">
                In 2021, strategic technology investment spending will rebound, a notable departure from the call to unilaterally cut IT expenses for the past decade. Born of necessity and a focus on growth and business continuity, executive leadership will push forward technology agendas designed to support a distributed workforce, adopt a customer-first mindset, and retain employees.
                <br/><br/>
                A trusted enterprise application services leader, Apps Associates ensures your investments yield measurable results. With more than two decades of experience aligning business and technology imperatives, we serve as an extension of your leadership and operations teams, helping you drive forward digital transformation while simultaneously running critical business operations.
            </p>
            <Link to="services" smooth={true} duration={500}>
                <div className="arrow-down mt-4">
                    <span className="block w-4 h-4 border-b-2 border-r-2 transform rotate-45 border-blue-700 mx-auto"></span>
                </div>
            </Link>
        </div>
        {/* <div className="ntn absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded">
            <h4 className="text-lg">2</h4>
        </div> */}
        </div>
    );
};

export default Together;

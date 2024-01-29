import React from 'react';
import { useSpring, animated } from 'react-spring';
import BigTree from '../../assets/big-tree.width-1500.jpg';

const AboutUs = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideIn = useSpring({ marginLeft: 0, from: { marginLeft: -1000 } });
  const popOut = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0)' } });

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center">
        <animated.h1 className="text-4xl md:text-6xl lg:text-8xl text-blue-700 mb-8" style={popOut}>
          About Us
        </animated.h1>
        <animated.div className="max-w-3xl px-4" style={slideIn}>
          <animated.p className="text-md md:text-lg text-center" style={fadeIn}>
            About Cider Global. We are a team of IT professionals with decades of technology experience. We are based in Ontario, Canada, and we are dedicated to helping Canadian small to medium businesses develop their technology capital while achieving corporate objectives and maximizing wealth.
          </animated.p>
          <animated.p className="text-md md:text-lg mt-4 text-center pb-4" style={fadeIn}>
            With over 10 years of technology experience, we have managed several successful projects for multiple companies in various verticals within Canada.
          </animated.p>
        </animated.div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full h-auto transform rotate-180" viewBox="0 0 1440 200">
        <path fill="#3498db" fillOpacity="1" d="M0,256L16,256C32,256,64,256,96,224C128,192,160,128,192,117.3C224,107,256,149,288,186.7C320,224,352,256,384,250.7C416,245,448,203,480,202.7C512,203,544,245,576,250.7C608,256,640,224,672,229.3C704,235,736,277,768,293.3C800,309,832,299,864,282.7C896,267,928,245,960,245.3C992,245,1024,267,1056,250.7C1088,235,1120,181,1152,138.7C1184,96,1216,64,1248,53.3C1280,43,1312,53,1344,90.7C1376,128,1408,192,1424,224L1440,256L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path>
      </svg> */}
    </div>
  );
};

export default AboutUs;

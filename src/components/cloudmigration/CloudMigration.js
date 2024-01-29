import React, { useState } from 'react';
import {
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import {
  AiFillDollarCircle,
  AiFillSafetyCertificate,
  AiOutlineClockCircle,
  AiOutlineDeploymentUnit,
  AiOutlineAntDesign
} from 'react-icons/ai';
import './styles/CloudMigration.css'

const CloudMigrationSection = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const cardData = [
    { title: 'Lower Total Cost of Ownership (TCO)', icon: <AiFillDollarCircle size={30} color="#3498db" /> },
    { title: 'Documented Security & Compliance', icon: <AiFillSafetyCertificate size={30} color="#3498db" /> },
    { title: 'Increased Efficiency', icon: <AiOutlineClockCircle size={30} color="#3498db" /> },
    { title: 'Ability to Scale Up or Out', icon: <AiOutlineDeploymentUnit size={30} color="#3498db" /> },
    { title: 'Flexibility & Agility', icon: <AiOutlineAntDesign size={30} color="#3498db" /> },
  ];

  return (
    <section className="py-16">
      

      {/* Faster Time-to-Cloud */}
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 toCloud_left aos-init aos-animate" data-aos="flip-up">
          <h3 className="text-2xl font-bold mb-4">FASTER TIME-TO-CLOUD</h3>
        </div>
        <div className="lg:w-1/2 toCloud_right aos-init aos-animate" data-aos="fade-up">
          <h4 className="text-xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
            Cloud Migration accelerates your cloud adoption journey with a seamless,
            low-risk, security-centric, and cost-optimized approach that addresses your migration challenges
          </h4>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="400">
            Cloud Migration services help you implement your cloud strategy with a structured,
            risk-mitigated approach for full-stack migration—while laying a solid security
            foundation for continuous performance improvements and DevOps.
          </p>
        </div>
      </div>

      {/* What About Public Cloud */}
      <div
        className="migr_sht_info aos-init aos-animate bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-md mb-8 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold">What About Public Cloud?</h2>
      </div>

      {/* Public Cloud Cards */}
      <div className="why_public_cloud grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 aos-init aos-animate" data-aos="fade-up">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl"
          >
            {item.icon}
            <h2 className="text-lg text-gray-800 mt-4">{item.title}</h2>
          </div>
        ))}
      </div>

      {/* Tools, Frameworks, and Accelerators */}
      <div className="bg-blue-500 text-white shadow-lg rounded-lg p-8 m-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 toCloud_left aos-init aos-animate" data-aos="flip-up">
          <h4 className="text-2xl font-bold">TOOLS, FRAMEWORKS AND ACCELERATORS</h4>
        </div>
        <div className="lg:w-1/2">
          <p className="text-gray-100 mb-8" data-aos="fade-up" data-aos-delay="200">
            Cider Global Cloud Migration is powered by automation, security and tools that
            ensure a seamless migration of your applications, data and workloads to a cloud-based environment.
          </p>
        </div>
      </div>

      {/* Vertical Line Separator */}
      <div className="bg-blue-500 w-2 h-full mx-auto" />

      {/* Capabilities */}
      <div id="Prevention" className="AddressDiv tablesec text-center">
        <h2 data-aos="flip-up" className="aos-init aos-animate text-2xl font-bold">CAPABILITIES</h2>
        <p>
          Cider Global Cloud Migration is powered by automation, security and tools that ensure a
          seamless migration of your applications, data and workloads to a cloud-based environment.
        </p>
        <div className="scamPrevention aos-init" data-aos="fade-up">
          {/* ... (Your other content goes here) */}
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationSection;

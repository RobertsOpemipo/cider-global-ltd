import React from 'react';
import styled from 'styled-components';
import People from '../../assets/people-development.jpg';
import Consult from '../../assets/tech-consulting.jpg';
import Tech from '../../assets/technology-investment.jpg';
import Enterprise from '../../assets/enterprise-solutions.jpg';

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  padding: 5px;
`;

const ServiceContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 5px;
  width: calc(33.333% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  @media (max-width: 768px) {
    width: calc(100% - 90px); /* Adjusted width for smaller screens */
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

const ServiceContent = styled.div`
  padding: 5px;
  text-align: center;
  background-color: #fff;
`;

const ServiceTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #3498db;
`;

const ServiceDescription = styled.p`
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const Spacer = styled.div`
  height: 20px;
`;
const Services = () => {
  const services = [
    { image: People, title: 'Cloud Migration', description: 'Cloud Migration services help you implement your cloud strategy with a structured, risk-mitigated approach for full-stack migration- while laying a solid security foundation for continuous performance improvement and DevOps.' },
    { image: Consult, title: 'Analytics and Data Management ', description: 'Data management requirements are a moving target and change is a given. They are driven by regulatory demands for more granular reporting, by an increased focus on strength of integration process, business needs for faster access to more data to improve decision making.' },
    { image: Consult, title: 'Business Integration and Automation', description: 'Managing a business is no easy task and sometimes you need multiple systems just to keep track, but using different solutions can become an obstacle to effective growth. We understand the problems with multiple separate tools and no or little connection between them as well as issues with security, data duplication and many others.' },
    { image: People, title: 'Functional IT', description: 'Are you looking to build a system, product or service from scratch or to overhaul an existing one? Our functional design(FD) team will focus on actions and flows to ensure you optimize your process flow and maximize your earned value. Our functional design specification(FDS) identifies what its design object is to do and is more concerned with what is to be done and less with how it happens' },
    { image: Tech, title: 'Business Solution services', description: 'Business solutions services with cutting edge ideas in Business Process Management, Management Consulting, Accounting Services and HR Planning/Outsourcing. We deliver holistic and integrated solutions built from scratch to client specifications or bought off-the-shelve and customized to meet client requirements.' },
    { image: Enterprise, title: 'ERP 9', description: 'We offer experience and talent needed to accelerate your digital transformation initiatives. Plus, our proprietary suite of diagnostics tools provides a holistic view of Oracle investment. Apps Associates helps you evaluate future technology investments while extracting value from your current footprint.' },
  ];

  return (
    <div>
      <header>
        <h1 className="text-4xl font-bold text-center text-blue-700 p-5">Services</h1>
      </header>

      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceContainer key={index}>
            <ServiceImage src={service.image} alt={`Service Image ${index + 1}`} />
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ReadMoreButton>Read More</ReadMoreButton>
            </ServiceContent>
          </ServiceContainer>
        ))}
      </ServicesContainer>

      <Spacer />
    </div>
  );
};

export default Services;

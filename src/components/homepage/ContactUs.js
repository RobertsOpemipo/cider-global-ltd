import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define animations
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
`;

// Styled components
const ContactContainer = styled.div`
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top: -20px;
  border-top: 1px solid transparent; /* Make the line at the top invisible */
`;

const ContactCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 90%;
  max-width: 600px; /* Adjust the max-width as needed for responsiveness */
  text-align: center;
  animation: 1s ${fadeInAnimation};

  &:hover {
    animation: 5s ${hoverEffect};
  }
`;

const ContactHeading = styled.h2`
  color: #3498db;
  margin-bottom: 10px;
`;

const ContactText = styled.p`
  color: #3498db;
  margin-bottom: 20px;
`;

const ContactButton = styled.button`
  background-color: #2c3e50;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a252f;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactText>Have questions or feedback? Reach out to us!</ContactText>
        {/* Your contact form or information can go here */}
        <ContactButton>Contact Us</ContactButton>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactPage;

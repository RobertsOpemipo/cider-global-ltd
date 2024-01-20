  import React from 'react';
  import './css/TeamPage.css'; // Make sure you have a corresponding CSS file

  // Placeholder SVG import - replace with your actual SVG file path
  // import TeamBackground from './team-background.svg'; 

  const TeamPage = () => {
    const teamMembers = [
      {
        name: "John Doe",
        role: "CEO",
        bio: "John has over 20 years of experience...",
        image: "url-to-image1.jpg" // Replace with actual image URLs
        // Add other team members here
      },
      {
        name: "John Doe",
        role: "CEO",
        bio: "John has over 20 years of experience...",
        image: "url-to-image1.jpg" // Replace with actual image URLs
        // Add other team members here
      },
      {
        name: "John Doe",
        role: "CEO",
        bio: "John has over 20 years of experience...",
        image: "url-to-image1.jpg" // Replace with actual image URLs
        // Add other team members here
      },
      {
        name: "John Doe",
        role: "CEO",
        bio: "John has over 20 years of experience...",
        image: "url-to-image1.jpg" // Replace with actual image URLs
        // Add other team members here
      },
      // ... other team members
    ];

    return (
      <div className="team-page-container">
        {/* SVG Background */}
        {/* <img src={TeamBackground} alt="Team Background" className="team-svg-background"/> */}

        {/* Team Content */}
        <div className="team-content-container">
          <h2 className="team-heading">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default TeamPage;

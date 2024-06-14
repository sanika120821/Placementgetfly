import React, { useState } from 'react';
import './NotificationPage.css';

const NotificationPage = () => {
  const [applied, setApplied] = useState({});

  const handleApplyClick = (index, applyLink) => {
    window.open(applyLink, '_blank');
    setTimeout(() => {
      setApplied({ ...applied, [index]: true });
    }, 1000);
  };

  const notifications = [
    {
      companyName: 'Google',
      jobDescription: 'Software Engineer - Bangalore, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfOMskodHlQVZao1lYhluGXXnKqFQNxHufocxeqX_F-cne2tw/viewform?usp=sf_link'
    },
    {
      companyName: 'Microsoft',
      jobDescription: 'Program Manager - Chennai, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe8Iiz4LrUp0OBoTp5wQbCIa4QBu2ASBpbEFBoAJNj8mEVo-A/viewform?usp=sf_link'
    },
    {
      companyName: 'JPMorgan Chase',
      jobDescription: 'Financial Analyst - Hyderabad, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSflpIAqLWhyPFy5thWgpRVZQ-vK4YEBGuTirwmL6Tz_NUYkmw/viewform?usp=sf_link'
    },
    {
      companyName: 'Capgemini',
      jobDescription: 'Consultant - Mumbai, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link'
    },
    {
      companyName: 'Accenture',
      jobDescription: 'SASA Roles - Mumbai, Bangalore, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdoQ1iGz9Bx61WTbQqM29PhLQlaYdO8dnQKJK2XLXqdfdgexg/viewform?usp=sf_link'
    },
  ];

  return (
    <div className="notification-page">
      <h1>Latest Placement Drives</h1>
      <div className="notifications">
        {notifications.map((notification, index) => (
          <div className="notification" key={index}>
            <h2>{notification.companyName}</h2>
            <p>{notification.jobDescription}</p>
            <div className="notification-links">
              <a href={notification.docLink} target="_blank" rel="noopener noreferrer">Document</a>
              <button
                onClick={() => handleApplyClick(index, notification.applyLink)}
                className="apply-button"
                disabled={applied[index]}
              >
                {applied[index] ? 'Applied' : 'Apply'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;

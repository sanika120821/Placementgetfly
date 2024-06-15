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
    // Latest Placement Drives
    {
      section: 'placement',
      companyName: 'Google',
      jobDescription: 'Software Engineer - Bangalore, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfOMskodHlQVZao1lYhluGXXnKqFQNxHufocxeqX_F-cne2tw/viewform?usp=sf_link',
      date: 'June 10, 2024',
      mailNotification: 'Please check your email for further instructions from Google.'
    },
    {
      section: 'placement',
      companyName: 'Microsoft',
      jobDescription: 'Program Manager - Chennai, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe8Iiz4LrUp0OBoTp5wQbCIa4QBu2ASBpbEFBoAJNj8mEVo-A/viewform?usp=sf_link',
      date: 'June 12, 2024',
      mailNotification: 'Microsoft has sent an email regarding the next steps in the recruitment process.'
    },
    {
      section: 'placement',
      companyName: 'JPMorgan Chase',
      jobDescription: 'Financial Analyst - Hyderabad, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSflpIAqLWhyPFy5thWgpRVZQ-vK4YEBGuTirwmL6Tz_NUYkmw/viewform?usp=sf_link',
      date: 'June 15, 2024',
      mailNotification: 'You should have received an email from JPMorgan Chase with further details.'
    },
    {
      section: 'placement',
      companyName: 'Capgemini',
      jobDescription: 'Consultant - Mumbai, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'June 18, 2024',
      mailNotification: 'Capgemini has sent instructions via email. Please check your inbox.'
    },
    {
      section: 'placement',
      companyName: 'Accenture',
      jobDescription: 'SASA Roles - Mumbai, Bangalore, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdoQ1iGz9Bx61WTbQqM29PhLQlaYdO8dnQKJK2XLXqdfdgexg/viewform?usp=sf_link',
      date: 'June 20, 2024',
      mailNotification: 'Accenture has sent an email with further instructions. Please check your inbox.'
    },
    // Recruitment Process Updates
    {
      section: 'recruitment',
      companyName: 'Deloitte',
      jobDescription: 'Business Analyst - New Delhi, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'June 22, 2024',
      mailNotification: 'Deloitte has emailed candidates regarding the interview schedule.'
    },
    {
      section: 'recruitment',
      companyName: 'IBM',
      jobDescription: 'Software Developer - Pune, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'June 25, 2024',
      mailNotification: 'IBM has provided feedback on initial screening. Check your inbox for details.'
    },
    {
      section: 'recruitment',
      companyName: 'Amazon',
      jobDescription: 'Cloud Architect - Bengaluru, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'June 28, 2024',
      mailNotification: 'Amazon has sent follow-up details regarding the onsite interview process.'
    },
    {
      section: 'recruitment',
      companyName: 'Tata Consultancy Services',
      jobDescription: 'System Engineer - Mumbai, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'July 1, 2024',
      mailNotification: 'TCS has sent information about the next round of interviews via email.'
    },
    {
      section: 'recruitment',
      companyName: 'Infosys',
      jobDescription: 'Business Consultant - Bengaluru, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'July 5, 2024',
      mailNotification: 'Infosys has emailed candidates regarding the assessment center details.'
    },
    {
      section: 'recruitment',
      companyName: 'Wipro',
      jobDescription: 'Software Developer - Hyderabad, India',
      docLink: 'https://drive.google.com/drive/folders/1CYu-Ttqmv4_ByGQqpAqq6-obfGLYMSmj?usp=sharing',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezk8B2jnqVeUYFIeoowR7dGrO5zzywgztkAdlu-r6h2HO2AA/viewform?usp=sf_link',
      date: 'July 8, 2024',
      mailNotification: 'Wipro has provided instructions for the technical interview round.'
    },
  ];

  const placementNotifications = notifications.filter(notification => notification.section === 'placement');
  const recruitmentNotifications = notifications.filter(notification => notification.section === 'recruitment');

  return (
    <div className="notification-page">
      <div className="section placement-updates">
        <h2>Latest Placement Drives</h2>
        {placementNotifications.map((notification, index) => (
          <div className="notification" key={index}>
            <h3>{notification.companyName}</h3>
            <p>{notification.jobDescription}</p>
            <p className="notification-date">{notification.date}</p>
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
      <div className="section recruitment-updates">
        <h2>Recruitment Process Updates</h2>
        {recruitmentNotifications.map((notification, index) => (
          <div className="notification" key={index}>
            <h3>{notification.companyName}</h3>
            <p>{notification.mailNotification}</p>
            <p className="notification-date">{notification.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;

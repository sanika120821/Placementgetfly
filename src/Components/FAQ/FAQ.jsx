import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [faqData, setFaqData] = useState(data);
  const [isInputVisible, setIsInputVisible] = useState(false); // State to manage input visibility

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const addQuestion = () => {
    if (newQuestion.trim() !== '') {
      const updatedData = [
        ...faqData,
        { question: newQuestion, answer: 'Placeholder answer for new question' }
      ];
      setFaqData(updatedData);
      setNewQuestion('');
      setIsInputVisible(false); 
    }
  };

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible); 
    setNewQuestion('');
  };

  return (
    <div className='wrapper'>
      <div className='page-title'>
        Frequently Asked Questions
      </div>
      <div className='accordion'>
        {faqData.map((item, i) => (
          <div className='item' key={i} onClick={() => toggle(i)}>
            <div className='title'>
              <h2>{item.question}</h2>
              <span className={selected === i ? 'active' : ''}>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      
      {!isInputVisible && (
        <button className="add-question-button" onClick={toggleInput}>Raise a Question</button>
      )}
      {isInputVisible && (
        <div className="add-question-form">
          <input
            type="text"
            placeholder="Enter your question"
            value={newQuestion}
            onChange={handleInputChange}
          />
          <button onClick={addQuestion}>Add Question</button>
          <button onClick={toggleInput}>Cancel</button>
        </div>
      )}
    </div>
  );
};

const data = [
  {
    question: 'Is competitive programming enough for placements?',
    answer: 'Competitive Programming plays a very important role in boosting problem-solving skills and ability to perform under time pressure. But obviously, it is not at all enough to get you prepared from placement perspective. This is because companies focus on core data structures and algorithm concepts along with other important CS subjects. You need to have a good grasp of concepts with good problem-solving abilities (as you are required to solve some of the real-life problems during your job), good coding practice.',
  },
  {
    question: 'How do I register on the Placements Management System?',
    answer: 'Students can register using their university-issued email address. Follow the registration link provided by your placement coordinator, fill in the necessary details, and create a password.',
  },
  {
    question: 'How do I apply for a job?',
    answer: 'Navigate to the Job Listings section, select the job you are interested in, and click the Apply button. Make sure your profile is complete and your resume is up-to-date before applying.',
  },
  {
    question: 'How can I track my application status?',
    answer: 'Go to the My Applications section to view the status of your applications. Status updates such as Applied, Shortlisted, Interview Scheduled, and Offer Received will be displayed.',
  },
  {
    question: 'How will I be notified about interview schedules?',
    answer: 'Notifications about interviews will be sent via email and can also be found in the Notifications section of your account. Ensure your contact information is accurate and check your notifications regularly.',
  },
  {
    question: 'What should I do if I forget my password?',
    answer: 'Use the Forgot Password link on the login page. Enter your registered email address, and you will receive instructions to reset your password.',
  },
  {
    question: 'How should I prepare for technical interviews during placements?',
    answer: 'Preparing for technical interviews involves understanding core data structures, algorithms, and practicing coding problems. It\'s essential to also review key computer science concepts such as object-oriented programming, databases, and system design. Additionally, practicing mock interviews and solving problems on platforms like LeetCode or HackerRank can help improve your problem-solving skills and boost your confidence.',
  },
];

export default FAQ;

import React, { useState, useEffect } from 'react';

export default function Quiz({ topic }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Define your quiz questions here based on the 'topic' prop
  const questions = {
    dos_ddos: [
      {
        text: 'What does DoS stand for in cybersecurity?',
        options: [
          { id: 0, text: 'Denial-of-Service', isCorrect: true },
          { id: 1, text: 'Data-over-Satellite', isCorrect: false },
          { id: 2, text: 'Digital Operating System', isCorrect: false },
          { id: 3, text: 'Distributed Online Security', isCorrect: false },
        ],
      },
      {
        text: 'What is the primary goal of a DDoS attack?',
        options: [
          { id: 0, text: 'Disrupt normal website functionality', isCorrect: true },
          { id: 1, text: 'Steal data', isCorrect: false },
          { id: 2, text: 'Gain unauthorized access', isCorrect: false },
          { id: 3, text: 'Encrypt data', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following is a type of DDoS attack?',
        options: [
          { id: 0, text: 'UDP flood', isCorrect: true },
          { id: 1, text: 'Phishing', isCorrect: false },
          { id: 2, text: 'SQL injection', isCorrect: false },
          { id: 3, text: 'Brute force', isCorrect: false },
        ],
      },
      {
        text: 'What does the "Distributed" in DDoS stand for?',
        options: [
          { id: 0, text: 'Multiple sources', isCorrect: true },
          { id: 1, text: 'Single source', isCorrect: false },
          { id: 2, text: 'Data distribution', isCorrect: false },
          { id: 3, text: 'Network distribution', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following can help mitigate DDoS attacks?',
        options: [
          { id: 0, text: 'Using a Content Delivery Network (CDN)', isCorrect: true },
          { id: 1, text: 'Using weak passwords', isCorrect: false },
          { id: 2, text: 'Disabling firewalls', isCorrect: false },
          { id: 3, text: 'Using HTTP instead of HTTPS', isCorrect: false },
        ],
      },
    ],
    mitm: [
      {
        text: 'What does MITM stand for?',
        options: [
          { id: 0, text: 'Man-in-the-Middle', isCorrect: true },
          { id: 1, text: 'Machine-in-the-Middle', isCorrect: false },
          { id: 2, text: 'Malware-in-the-Middle', isCorrect: false },
          { id: 3, text: 'Monitor-in-the-Middle', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following is a common type of MITM attack?',
        options: [
          { id: 0, text: 'Wi-Fi Eavesdropping', isCorrect: true },
          { id: 1, text: 'Phishing', isCorrect: false },
          { id: 2, text: 'SQL Injection', isCorrect: false },
          { id: 3, text: 'Brute Force', isCorrect: false },
        ],
      },
      {
        text: 'What is the primary goal of a MITM attack?',
        options: [
          { id: 0, text: 'Intercept and manipulate communication', isCorrect: true },
          { id: 1, text: 'Steal physical hardware', isCorrect: false },
          { id: 2, text: 'Destroy data', isCorrect: false },
          { id: 3, text: 'Create backups', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following can help prevent MITM attacks?',
        options: [
          { id: 0, text: 'Using HTTPS', isCorrect: true },
          { id: 1, text: 'Using HTTP', isCorrect: false },
          { id: 2, text: 'Disabling firewalls', isCorrect: false },
          { id: 3, text: 'Using weak passwords', isCorrect: false },
        ],
      },
      {
        text: 'What is SSL stripping?',
        options: [
          { id: 0, text: 'Downgrading HTTPS to HTTP', isCorrect: true },
          { id: 1, text: 'Upgrading HTTP to HTTPS', isCorrect: false },
          { id: 2, text: 'Encrypting data', isCorrect: false },
          { id: 3, text: 'Decrypting data', isCorrect: false },
        ],
      },
    ],
    phishing: [
      {
        text: 'What is phishing?',
        options: [
          { id: 0, text: 'A type of cyberattack to steal sensitive information', isCorrect: true },
          { id: 1, text: 'A method to improve website performance', isCorrect: false },
          { id: 2, text: 'A technique to enhance user experience', isCorrect: false },
          { id: 3, text: 'A way to encrypt data', isCorrect: false },
        ],
      },
      {
        text: 'What is spear-phishing?',
        options: [
          { id: 0, text: 'A targeted phishing attack on specific individuals or organizations', isCorrect: true },
          { id: 1, text: 'A phishing attack on random individuals', isCorrect: false },
          { id: 2, text: 'A method to improve email security', isCorrect: false },
          { id: 3, text: 'A way to encrypt emails', isCorrect: false },
        ],
      },
      {
        text: 'What is whale-phishing?',
        options: [
          { id: 0, text: 'A phishing attack targeting high-profile individuals', isCorrect: true },
          { id: 1, text: 'A phishing attack on random individuals', isCorrect: false },
          { id: 2, text: 'A method to improve email security', isCorrect: false },
          { id: 3, text: 'A way to encrypt emails', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following is a common sign of a phishing email?',
        options: [
          { id: 0, text: 'Suspicious emails with urgent requests', isCorrect: true },
          { id: 1, text: 'Emails from known contacts', isCorrect: false },
          { id: 2, text: 'Emails with familiar content', isCorrect: false },
          { id: 3, text: 'Emails with no links or attachments', isCorrect: false },
        ],
      },
      {
        text: 'How can you protect yourself from phishing attacks?',
        options: [
          { id: 0, text: 'Enable multi-factor authentication', isCorrect: true },
          { id: 1, text: 'Click on all links in emails', isCorrect: false },
          { id: 2, text: 'Share your passwords with others', isCorrect: false },
          { id: 3, text: 'Ignore security updates', isCorrect: false },
        ],
      },
    ],
    sql_injection: [
      {
        text: 'What is SQL Injection?',
        options: [
          { id: 0, text: 'A code injection technique used to attack data-driven applications', isCorrect: true },
          { id: 1, text: 'A method to improve database performance', isCorrect: false },
          { id: 2, text: 'A technique to enhance user experience', isCorrect: false },
          { id: 3, text: 'A way to encrypt data', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following is a common sign of an SQL Injection attack?',
        options: [
          { id: 0, text: 'Unexpected database errors', isCorrect: true },
          { id: 1, text: 'Slow website performance', isCorrect: false },
          { id: 2, text: 'Increased network traffic', isCorrect: false },
          { id: 3, text: 'Frequent server crashes', isCorrect: false },
        ],
      },
      {
        text: 'What is the primary goal of an SQL Injection attack?',
        options: [
          { id: 0, text: 'To gain unauthorized access to database information', isCorrect: true },
          { id: 1, text: 'To improve database performance', isCorrect: false },
          { id: 2, text: 'To encrypt database data', isCorrect: false },
          { id: 3, text: 'To create database backups', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following can help prevent SQL Injection attacks?',
        options: [
          { id: 0, text: 'Using prepared statements and parameterized queries', isCorrect: true },
          { id: 1, text: 'Using weak passwords', isCorrect: false },
          { id: 2, text: 'Disabling firewalls', isCorrect: false },
          { id: 3, text: 'Using HTTP instead of HTTPS', isCorrect: false },
        ],
      },
      {
        text: 'What is a common method used in SQL Injection attacks?',
        options: [
          { id: 0, text: 'Inserting malicious SQL code into input fields', isCorrect: true },
          { id: 1, text: 'Encrypting database data', isCorrect: false },
          { id: 2, text: 'Creating database backups', isCorrect: false },
          { id: 3, text: 'Improving database performance', isCorrect: false },
        ],
      },
    ],
    dns_spoofing: [
      {
        text: 'What is DNS Spoofing?',
        options: [
          { id: 0, text: 'A cyber attack where DNS records are altered to redirect traffic', isCorrect: true },
          { id: 1, text: 'A method to improve DNS performance', isCorrect: false },
          { id: 2, text: 'A technique to enhance user experience', isCorrect: false },
          { id: 3, text: 'A way to encrypt DNS data', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following is a common sign of a DNS Spoofing attack?',
        options: [
          { id: 0, text: 'Unexpected redirection to malicious websites', isCorrect: true },
          { id: 1, text: 'Slow website performance', isCorrect: false },
          { id: 2, text: 'Increased network traffic', isCorrect: false },
          { id: 3, text: 'Frequent server crashes', isCorrect: false },
        ],
      },
      {
        text: 'What is the primary goal of a DNS Spoofing attack?',
        options: [
          { id: 0, text: 'To redirect traffic to malicious websites', isCorrect: true },
          { id: 1, text: 'To improve DNS performance', isCorrect: false },
          { id: 2, text: 'To encrypt DNS data', isCorrect: false },
          { id: 3, text: 'To create DNS backups', isCorrect: false },
        ],
      },
      {
        text: 'Which of the following can help prevent DNS Spoofing attacks?',
        options: [
          { id: 0, text: 'Using DNSSEC (Domain Name System Security Extensions)', isCorrect: true },
          { id: 1, text: 'Using weak passwords', isCorrect: false },
          { id: 2, text: 'Disabling firewalls', isCorrect: false },
          { id: 3, text: 'Using HTTP instead of HTTPS', isCorrect: false },
        ],
      },
      {
        text: 'What is a common method used in DNS Spoofing attacks?',
        options: [
          { id: 0, text: 'Altering DNS records to redirect traffic', isCorrect: true },
          { id: 1, text: 'Encrypting DNS data', isCorrect: false },
          { id: 2, text: 'Creating DNS backups', isCorrect: false },
          { id: 3, text: 'Improving DNS performance', isCorrect: false },
        ],
      },
    ],
  };

  useEffect(() => {
    console.log('Topic:', topic);
    console.log('Questions:', questions[topic]);
  }, [topic]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[topic].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  if (!questions[topic] || questions[topic].length === 0) {
    return <div className="text-black">No questions available for this topic.</div>;
  }

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="results">
          <h2 className="text-2xl font-bold text-black">Quiz Results</h2>
          <p className="text-black">You scored {score} out of {questions[topic].length}</p>
        </div>
      ) : (
        <div className="question-card">
          <h2 className="text-2xl font-bold text-black">{questions[topic][currentQuestion].text}</h2>
          <div className="options mt-4">
            {questions[topic][currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerClick(option.isCorrect)}
                className="block w-3/4 p-2 mb-2 text-black bg-white border border-gray-300 rounded hover:bg-gray-100 text-left"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
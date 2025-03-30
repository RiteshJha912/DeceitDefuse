import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaCheckCircle, 
  FaTimesCircle,
  FaArrowRight,
  FaRedo,
  FaTimes
} from 'react-icons/fa';
import { 
  BsLightningChargeFill,
  BsCheckCircleFill,
  BsXCircleFill
} from 'react-icons/bs';
import '../styles/Quiz.css';

const Quiz = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  // Scroll to top when difficulty is selected
  useEffect(() => {
    if (difficulty) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [difficulty]);

  // Scroll to top when moving to next question
  useEffect(() => {
    if (currentQuestion > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [currentQuestion]);

  const basicQuestions = [
    {
      question: "What is the most common type of cyber attack?",
      options: [
        "Phishing",
        "Nuclear attack",
        "Earthquake",
        "Flood"
      ],
      correct: 0
    },
    {
      question: "Which of these is a strong password?",
      options: [
        "password123",
        "12345678",
        "P@ssw0rd!2024",
        "qwerty"
      ],
      correct: 2
    },
    {
      question: "What should you do if you receive a suspicious email?",
      options: [
        "Click all links to check",
        "Delete it immediately",
        "Forward it to friends",
        "Reply to the sender"
      ],
      correct: 1
    },
    {
      question: "What is two-factor authentication?",
      options: [
        "Using two passwords",
        "Using two different devices",
        "Using two different browsers",
        "Using password plus a code from your phone"
      ],
      correct: 3
    },
    {
      question: "What is the purpose of a firewall?",
      options: [
        "To keep your computer warm",
        "To block unauthorized access",
        "To speed up your internet",
        "To store your files"
      ],
      correct: 1
    }
  ];

  const advancedQuestions = [
    {
      question: "What is a Man-in-the-Middle (MITM) attack?",
      options: [
        "A physical attack on a person",
        "An attack where the attacker secretly intercepts communication",
        "A type of computer virus",
        "A network speed issue"
      ],
      correct: 1
    },
    {
      question: "What is the difference between symmetric and asymmetric encryption?",
      options: [
        "Symmetric is faster but less secure",
        "Asymmetric uses more colors",
        "Symmetric is only for text files",
        "Asymmetric is only for images"
      ],
      correct: 0
    },
    {
      question: "What is a zero-day vulnerability?",
      options: [
        "A bug that only appears at midnight",
        "A vulnerability that is unknown to the vendor",
        "A type of computer virus",
        "A network configuration error"
      ],
      correct: 1
    },
    {
      question: "What is the purpose of a honeypot in cybersecurity?",
      options: [
        "To store honey",
        "To attract and study attackers",
        "To speed up your computer",
        "To protect your files"
      ],
      correct: 1
    },
    {
      question: "What is the principle of least privilege?",
      options: [
        "Giving everyone admin access",
        "Giving users only the access they need",
        "Using the simplest password possible",
        "Sharing all files with everyone"
      ],
      correct: 1
    }
  ];

  const questions = difficulty === 'basic' ? basicQuestions : advancedQuestions;

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setDifficulty(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleQuit = () => {
    if (window.confirm('Are you sure you want to quit? Your progress will be lost.')) {
      navigate('/');
    }
  };

  if (!difficulty) {
    return (
      <div className="quiz-container">
        <div className="quiz-hero">
          <h1>Cybersecurity Quiz</h1>
          <p>Test your knowledge and learn about cybersecurity</p>
        </div>

        <div className="difficulty-selector">
          <div className="difficulty-card basic" onClick={() => setDifficulty('basic')}>
            <div className="difficulty-icon">
              <FaShieldAlt />
            </div>
            <h2>Basic Level</h2>
            <p>Perfect for beginners and general knowledge</p>
            <ul>
              <li>5 simple questions</li>
              <li>Basic concepts</li>
              <li>Common threats</li>
              <li>Essential security practices</li>
            </ul>
            <button className="start-btn">Start Basic Quiz</button>
          </div>

          <div className="difficulty-card advanced" onClick={() => setDifficulty('advanced')}>
            <div className="difficulty-icon">
              <BsLightningChargeFill />
            </div>
            <h2>Advanced Level</h2>
            <p>For those with some cybersecurity knowledge</p>
            <ul>
              <li>5 complex questions</li>
              <li>Technical concepts</li>
              <li>Advanced threats</li>
              <li>Security mechanisms</li>
            </ul>
            <button className="start-btn">Start Advanced Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-section">
          <h2>Quiz Complete!</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <p className="score-message">
              {score === questions.length 
                ? "Perfect! You're a cybersecurity expert!" 
                : score >= questions.length * 0.7
                ? "Great job! You have a good understanding!"
                : "Keep learning! You're on the right track!"}
            </p>
          </div>
          <button className="restart-btn" onClick={handleRestart}>
            <FaRedo /> Try Another Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="question-section">
        <div className="question-header">
          <button className="quit-btn" onClick={handleQuit}>
            <FaTimes /> Quit Quiz
          </button>
          <div className="quiz-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              ></div>
            </div>
            <div className="progress-text">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options-grid">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedAnswer === index ? 'selected' : ''} ${
                selectedAnswer !== null && index === questions[currentQuestion].correct ? 'correct' : ''
              } ${
                selectedAnswer === index && index !== questions[currentQuestion].correct ? 'incorrect' : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="option-icon">
                {selectedAnswer !== null && (
                  index === questions[currentQuestion].correct ? (
                    <BsCheckCircleFill />
                  ) : selectedAnswer === index ? (
                    <BsXCircleFill />
                  ) : null
                )}
              </span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>
        <button 
          className="next-btn"
          onClick={handleNext}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Quiz; 
/** @format */

import React, { useState } from 'react';
import './Qa.css';
import { useNavigate } from 'react-router-dom';
export default function Qa() {
  const questions = [
    {
      questionText: 'What is Ross’ profession?',
      answerOptions: [
        { answerText: 'Geologist', isCorrect: false },
        { answerText: 'Astronomer', isCorrect: false },
        { answerText: 'Palaeontologist', isCorrect: true },
        { answerText: 'Museum tour guide', isCorrect: false },
      ],
    },
    {
      questionText:
        'What instrument did Ross intend to play at Monica and Chandler’s wedding?',
      answerOptions: [
        { answerText: 'Keyboard', isCorrect: false },
        { answerText: 'Drunks', isCorrect: true },
        { answerText: 'Saxophone', isCorrect: false },
        { answerText: 'Bagpipes', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name of Chandler’s favourite Baywatch star?',
      answerOptions: [
        { answerText: 'Kelly Slater', isCorrect: false },
        { answerText: 'Pamela Anderson', isCorrect: false },
        { answerText: 'Nancy Valen', isCorrect: false },
        { answerText: 'Yasmine Bleeth', isCorrect: true },
      ],
    },
    {
      questionText:
        'What is the next line in the song, “Monica, Monica, have a happy Hanukkah”:',
      answerOptions: [
        {
          answerText: '“And please tell Joey, Christmas will be snowy”',
          isCorrect: false,
        },
        {
          answerText: 'Saw Santa Claus, he said hello to Ross',
          isCorrect: false,
        },
        { answerText: 'Spin the dreidel, Rachel', isCorrect: false },
        {
          answerText: 'Went to the store, sat on Santa’s lap',
          isCorrect: true,
        },
      ],
    },
    {
      questionText: 'Which city did Phoebe’s boyfriend, David, move to?',
      answerOptions: [
        { answerText: 'Tulsa', isCorrect: false },
        { answerText: 'Yemen', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Minsk', isCorrect: true },
      ],
    },
    {
      questionText: 'Who was Monica’s first kiss ever?',
      answerOptions: [
        { answerText: 'Chandler', isCorrect: false },
        { answerText: 'Pete', isCorrect: false },
        { answerText: 'Richard', isCorrect: false },
        { answerText: 'Ross', isCorrect: true },
      ],
    },
    {
      questionText: 'Who said this: You will always be the guy who peed on me,',
      answerOptions: [
        { answerText: 'Phoebe', isCorrect: false },
        { answerText: 'Monica', isCorrect: false },
        { answerText: 'Bonnie', isCorrect: false },
        { answerText: 'Susan', isCorrect: true },
      ],
    },
    {
      questionText: 'Who taught yeniifer magic ,',
      answerOptions: [
        { answerText: 'Ciri', isCorrect: false },
        { answerText: 'Witcher', isCorrect: false },
        { answerText: 'Tess', isCorrect: false },
        { answerText: 'Vesemir', isCorrect: true },
      ],
    },
    {
      questionText: 'Whose name was Geralt repeating in his sleep?',
      answerOptions: [
        { answerText: 'Ciri', isCorrect: false },
        { answerText: 'Yennifer', isCorrect: false },
        { answerText: 'Renfre', isCorrect: false },
        { answerText: 'Vesemir', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowscore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const handelAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowscore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          {score == 4 ? navigate('/Th') : alert('Fail')}
          <button
            onClick={() => {
              window.location.reload(false);
            }}>
            Play Again !!
          </button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() =>
                  handelAnswerButtonClick(answerOptions.isCorrect)
                }>
                {answerOptions.answerText}
              </button>
            ))}
            {/* <button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button> */}
          </div>
        </>
      )}
    </div>
  );
}

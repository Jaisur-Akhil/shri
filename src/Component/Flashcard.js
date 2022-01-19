/** @format */

import React, { useState } from 'react';
import '../Style/app.css';
export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`} //dynamic classes
      onClick={() => setFlip(!flip)}>
      <div className='front'>{flashcard.question}</div>
      <div className='back'>{flashcard.hint}</div>
      {/* {flip ? flashcard.Hint :flashcard.question} */}
    </div>
  );
}

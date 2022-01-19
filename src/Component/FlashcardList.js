/** @format */

import React from 'react';
import Flashcard from './Flashcard';
import '../Style/app.css';

export default function FlashcardList({ flashcards }) {
  return (
    <div className='card-gird'>
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

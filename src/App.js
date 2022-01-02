/** @format */
import React, { useState } from 'react';
import FlashcardList from './Component/FlashcardList';
import './Style/app.css'

function App() {
  const [flashcards, setFlashcards] = useState(Sample_flashcards);
  return (
    <div className='App'>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const Sample_flashcards = [
  {
    id: 1,
    question:
      'What is red and has a tail above , 1st aplhabet in your Alphabet books ',
    Hint: 'Hint is yet to be descide ',
  },
  {
    id: 2,
    question:
      'What is so colorful and also famed up mix, Its impossible to solve every face at once .  ',
    Hint: 'Its always been there in your maths testbook also 9 std textbook has its picture on it ',
  },
  {
    id: 3,
    question:
      'Some thing which is missing dial and something which now has screens',
    Hint: 'Hint is yet to be descide ',
  },
];
console.log(Sample_flashcards)

export default App;

/** @format */
import React, { useState, useEffect } from 'react';
import FlashcardList from './Component/FlashcardList';
import './Style/app.css';
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(Sample_flashcards);
  useEffect(() => {
    axios.get('http://127.0.0.1:3002/sample').then((res) => {
      setFlashcards(
        res.data.map((data, index) => {
          return {
            id: `${index}`,
            question: data.question,
            hint: data.hint,
          };
        })
      );
      console.log(res.data + 'this is from console');
    });
  }, []);
  return (
    <div className='app'>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

// const Sample_flashcards = [
//   {
//     id: 6,
//     question:
//       'What is red and has a tail above , 1st aplhabet in your Alphabet books ',
//     hint: 'Hint is yet to be descide ',
//   },
//   {
//     id: 7,
//     question:
//       'What is so colorful and also famed up mix, Its impossible to solve every face at once .  ',
//     hint: 'Its always been there in your maths testbook also 9 std textbook has its picture on it ',
//   },
//   {
//     id: 8,
//     question:
//       'Some thing which is missing dial and something which now has screens',
//     hint: 'Hint is yet to be descide ',
//   },
// ];
// console.log(Sample_flashcards);

export default App;

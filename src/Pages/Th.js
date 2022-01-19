/** @format */

import React, { useState, useEffect } from 'react';
import FlashcardList from '../Component/FlashcardList';
import '../Style/app.css';
import axios from 'axios';
export default function TH() {
  const [flashcards, setFlashcards] = useState(Sample_flashcards);
  useEffect(() => {
    axios.get('http://127.0.0.1:3002/samplle').then((res) => {
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

const Sample_flashcards = [
  {
    id: 1,
    question: 'Riddle 1 ',
    hint: 'What is the one thing that all wise men, regardless of their religion or politics, agree is between heaven and earth? What is it?',
  },
  {
    id: 2,
    question: 'Riddle 2 ',
    hint: 'It occurs once in a minute, twice in a moment, but never in an hour ',
  },
  {
    id: 3,
    question: 'Riddle 3',
    hint: 'Is it correct to say "the yolk of eggs is white" or "the yolk of eggs are white',
  },
  {
    id: 3,
    question: 'Riddle 3',
    hint: 'Is it correct to say "the yolk of eggs is white" or "the yolk of eggs are white',
  },
  {
    id: 4,
    question: 'Riddle 4',
    hint: 'Is it legal for a man to marry his widows sister?',
  },
  {
    id: 5,
    question: 'Riddle 5',
    hint: 'You hear me once, you heard me again, and then I die until I am called again',
  },
  {
    id: 6,
    question: 'Riddle 6',
    hint: 'Is it correct to say "the yolk of eggs is white" or "the yolk of eggs are white',
  },
  {
    id: 7,
    question: 'Riddle 7',
    hint: 'Four legs up, four legs down, soft in the middle, Hard all around.',
  },
  {
    id: 8,
    question: 'Riddle 8',
    hint: 'If you feed it, it lives, If you water it-it dies!',
  },
];
console.log(Sample_flashcards);

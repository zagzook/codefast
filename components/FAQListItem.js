'use client';

import { useState } from 'react';

const FAQListItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={question}>
      {/* 1. Question (clickable) */}
      <button
        className='py-5 font-semibold border-b w-full text-left flex items-center justify-between'
        onClick={() => setIsOpen(!isOpen)}>
        <p>{question}</p>
        <p>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          )}
        </p>
      </button>

      {/* 2. Answer */}
      <div className={`${isOpen ? 'block' : 'hidden'} mt-3 mb-6 opacity-90`}>
        {answer}
      </div>
    </li>
  );
};

export default FAQListItem;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

export default function ChaptersScreen({ chap, ChapHandler }) {
  let [activeID, setActiveID] = useState('');

  return (
    <div className='min-vh-100 shadow-lg p-3 bg-red text-center'>
      <h1 className='fs-5 fw-bold text-center'>Chapter</h1><hr />
      <ul className='list-group text-end'>
        {chap.length ? chap.map((sower) => (
          <div key={sower.id}>
            <div onClick={() => {
                ChapHandler(sower);
                setActiveID(sower.id);
              }} className={`${activeID === sower.id && 'active'}reciterDetles`}>
            <li
              
              className={`list-group-item bg-transparent border-0 text-light p-0 d-flex justify-content-between align-items-center cursor fs-5 `}
            >
              <span>{sower.id}</span>
              <span>{sower.name_arabic}</span>
            </li>
            <hr />
            </div>
          
          </div>
        )) : (
       
          <Oval
            height={80}
            width={80}
            radius={9}
            color='white'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
          />
        )}
      </ul>
    </div>
  );
}

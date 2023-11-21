import axios from 'axios';
import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

export default function RecitersScreen({reciter,reciterHandler}) {
  let [activeId, setActiveId] = useState('');

 

  return (
    <div className='min-vh-100 shadow-lg bg-red p-3 '>
      <h1 className='text-center fw-bold fs-5 '>Reciter</h1> <hr />
      <div>
        {reciter.length ? reciter.map((molana) => (
          <div key={molana.id}>
            <div
              onClick={(e) => {
                reciterHandler(molana);
                setActiveId(molana.id);
              }}
              className={`d-flex algin-items-center py-0 cursor ${molana.id === activeId && 'active'}`}
            >
              <i className="fa-solid fa-circle-user fs-4 p-2"></i>
              <span className='fs-5 p-1'>{molana.name}</span>
            </div>
            <hr />
          </div>
        )) : <>
          <Oval
            height="80"
            width="80"
            radius="9"
            color='white'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
          />
        </>}
      </div>
    </div>
  );
}

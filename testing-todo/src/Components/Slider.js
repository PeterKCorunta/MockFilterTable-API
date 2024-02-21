import React from 'react'
import { SlideContext } from './SlideContext'
import { useContext } from 'react'


function Slider({slidepic, val, index, slideNo, quote}) {

   const imgbackgroundPic = useContext(SlideContext)

  return (
    <div key={val-1} className='container_slide'>

      <p className='quote'>{quote}</p>
      <h1>{slideNo}</h1>
      
        <img
        key={val-1}
        loading='lazy'
        src={imgbackgroundPic}//{slidepic}//{pics[no - 1]} 
        alt={`${val-1}`}
      />
      
    </div>
  );
}


export default Slider
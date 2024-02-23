import React from 'react'
import { SlideContext } from './SlideContext'
import { useContext } from 'react'

function Slider({slidepic, val, index, slideNo, quote}) {

   const contextPic = useContext(SlideContext)

  return (
    <div key={val-1} className='container_slide'>

      <p className='quote'>{quote}</p>
      <h1>{slideNo}</h1>
      
      {/* <Suspense key={val-1} fallback={<div>Loading...</div>}>
        <LazyComponent key={val-1} load={'lazy'} src={slidepic} alt={`${val-1}`} />
      </Suspense> */}

      <img
        key={val-1}
        loading='lazy'
        src={contextPic}//{slidepic}//{pics[no - 1]} 
        alt={`${val-1}`}
      />
      
    </div>
  );
}


export default Slider
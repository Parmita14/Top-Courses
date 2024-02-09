import React from 'react'
import './Spinner.css';

export default function Spinner() {
  return (
    <div>
        <div className='spinner'></div>
        <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}

import React from 'react'
import './Spinner.css'
// use the loader package from react
import {Circles} from 'react-loader-spinner'
const Spinner = ({message}) => {
  return (
    <div className='spinn'>
      {/* just render the loader */}
      <Circles color='#00BFFF' height={50} width={200} className='spinnCirles'/>
      <p>{message}</p>
    </div>
  )
}

export default Spinner
import React from 'react'
import ReactPlayer from 'react-player'
import './PlayMovie.css'
import { useParams } from 'react-router-dom'
const PlayMovie = ({url}) => {
  const {id}=useParams();
  return (
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      width='100%'
      height='100%'
    />
  </div>
  )
}

export default PlayMovie
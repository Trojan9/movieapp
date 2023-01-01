import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './PlayMovie.css'
import { useParams } from 'react-router-dom'
import { fetchMoviesLocal, fetchMoviesLocalNaija, fetchMoviesLocalTopRated } from '../utils/fetchUser'
import Spinner from './Spinner';
const PlayMovie = () => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const {id,type}=useParams();
  useEffect(() => {
    const fetchData = async () => {
    if(type==='topRated'){
      let movies=await fetchMoviesLocalTopRated();
      let single=movies?.filter((element)=>element.id===id)
      if(single.length>0){
      setMovie(single);
    }
    }else if(type==='naija'){
      let movies=await fetchMoviesLocalNaija();
      
      let single=movies?.filter((element)=>element.id===id)
     
     
      setMovie(single);
    
    
    }else{
    let movies=await fetchMoviesLocal();
    let single=movies?.filter((element)=>element.id===id)
    if(single.length>0){
    setMovie(single);
  }
  // console.log(movie);
   
    
  }}
  fetchData()
  // make sure to catch any error
  .catch(console.error);
  Promise.resolve()
  console.log(movie)
  setLoading(false)
  }, []);
  if(loading) return <Spinner message="Loading Pin..."/>
  if(!movie?.length>0)return <h2 className='nullvalue'>No pins available</h2>
  return (
    <div className='player-wrapper'>
      {movie[0]?.videourl !==""?(
      <video controls autoPlay   className='react-player'>
                <source src={movie[0]?.videourl===""?movie[0]?.videotrailerurl:movie[0]?.videourl} type="video/mp4"></source>
            </video>):(
            <ReactPlayer
            controls
      className='react-player'
      url={movie[0]?.videourl===""?movie[0]?.videotrailerurl:movie[0]?.videourl}
      width='100vw'
      height='100vh'
    />)}
    
    
  </div>
  )
}

export default PlayMovie
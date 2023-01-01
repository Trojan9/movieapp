
import { Spinner } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { db, getNaijaMovies } from '../utils/api'
import './HomePage.css'
import Movie from './Movie'
const Naija = () => {

    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      // declare the data fetching function
      const fetchData = async () => {
        var getMoviesArray=  await getNaijaMovies();
        setMovies(getMoviesArray);
        setLoading(false)
        toast.dismiss();
      }
    
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
        Promise.resolve()
    }, [])
    if(loading)return <Spinner message='we are adding new ideas to your spinner'/>
    // if(!movies?.length>0)return <h2 className='flex mt-10 items-center justify-center'>No pins available</h2>
    return (
      <div>
      <div className='Home'>
      {/* i.e every component in this div will take full width and full height */}
      <div className='Home-innerdiv'>
      {/* <img src={movies[0].imageurl} className='hero-banner-image' alt="headPhones"></img> */}
              <img
                  src={movies[0].imageurl}
                   
                  // object cover will make video take the whole width and height specified
                   className='Home-innerdiv-img'>
  
               </img>
               {/* this will make the div absolutely placed at the ceter */}
              <div className='Home-innerdiv-float'>
      
               <div className='hero-banner-container'>
              
        
        
          <h3 className='beats-solo'> </h3>
          <h3>{movies[0].title}</h3>
         <div className='rating'> <Rating  onClick={()=>{
            console.log();
          }}
          onPointerEnter={()=>{
            console.log();
          }}
          onPointerLeave={()=>{
            console.log();
          }}
          onPointerMove={()=>{
            console.log();
          }}
           allowHover={false} initialValue={4} />
           <p>(60,000)</p>
           </div>
          {/* <h1>{}</h1> */}
          
          <div>
            <Link href={`/play`}>
              <button type='button'>Play</button>
            </Link>
            <div className='desc'>
              <h5>Description</h5>
              <p>{movies[0].description}</p>
            </div>
          </div>
        </div>
      </div>
       
       </div>
      
        </div> 
        <div className="products-heading">
        <h2>Top Movies 2022</h2>
        <p></p>
      </div>   
         <div className="products-container">
         {movies?.map((movie) => <Movie key={movie.id} movie={movie} />)}
       </div>
        </div>
       
    )
  
}

export default Naija
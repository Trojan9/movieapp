import React,{useState,useEffect} from 'react'
import Spinner from './Spinner';
import Movie from './Movie';
import './Search.css'
import { fetchMoviesLocal } from '../utils/fetchUser';
const Search = ({searchTerm}) => {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
   if(searchTerm){
    let movies=await fetchMoviesLocal();
    let single=movies?.filter((element)=>element.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
    setMovies(single);
  
   }else{
    let movies=await fetchMoviesLocal();
    setMovies(movies);
   }}
   console.log(searchTerm)
   fetchData()
  // make sure to catch any error
  .catch(console.error);
  Promise.resolve()
  }, [searchTerm])
  return (
    <div>
      {loading&&(<Spinner message="Searching for pins..."/>)}
      {movies?.length>0 &&( <div className="products-container">
         {movies?.map((movie) => <Movie key={movie.id} movie={movie} type="movie" />)}
       </div>)}
      {movies?.length===0 && searchTerm!=='' && !loading && 
      (<div className='nullvalue'>
        No Movie found
      </div>)}

    </div>
  )
}

export default Search
import React, {useEffect} from 'react'
import { fetchUser } from '../utils/fetchUser';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import PlayMovie from '../components/PlayMovie';
import MovieDetail from '../components/MovieDetail';
const Home = () => {
    const navigate=useNavigate();
  useEffect(() => {
    const user=fetchUser();
    // navigate to login if user is null
    if(!user)navigate('/login')
  }, [])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<HomePage/>}></Route>
        <Route path='play' element={<PlayMovie/>}></Route>
        <Route path='moviedetails' element={<MovieDetail/>}></Route>
   </Routes>
      <Footer/>
    </div>
  )
}

export default Home
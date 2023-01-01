import React, {useEffect, useState} from 'react'
import { fetchUser } from '../utils/fetchUser';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import PlayMovie from '../components/PlayMovie';
import MovieDetail from '../components/MovieDetail';
import Browse from '../components/Browse';
import TopRated from '../components/TopRated';
import Naija from '../components/Naija';
const Home = () => {
    const navigate=useNavigate();
    const [searchTerm, setSearchTerm] = useState('')
    const [user, setUser] = useState(null)
  useEffect(() => {
    const userget=fetchUser()
    setUser(userget);
    // navigate to login if user is null
    if(!userget)navigate('/login')
  }, [])
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}/>
      <Routes>
        <Route path='/*' element={<HomePage/>}></Route>
        <Route path='play' element={<PlayMovie/>}></Route>
        <Route path='moviedetails' element={<MovieDetail/>}></Route>
        <Route path='browse' element={<Browse/>}></Route>
        <Route path='naija' element={<Naija/>}></Route>
        <Route path='topRated' element={<TopRated/>}></Route>
   </Routes>
      <Footer/>
    </div>
  )
}

export default Home
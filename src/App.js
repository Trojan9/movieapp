import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Login from './components/Login';
import Home from './container/Home';
import SignUp from './components/SignUp';
import PlayMovie from './components/PlayMovie';
// note evry variable in your .env file must start with REACT_APP_ else it won't work or see it to access
const App = () => {
  
  return (
    // so we need to wrap our application with googleOAuth in order to use goole signIn and googleSignOut
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE_AUTH}`}>
   <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='play/:type/:id' element={<PlayMovie/>}></Route>
        <Route path='/*' element={<Home/>}></Route>
   </Routes>
   </GoogleOAuthProvider>
  )
}

export default App
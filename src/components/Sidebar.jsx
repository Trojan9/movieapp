import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import {RiHomeFill} from 'react-icons/ri';
import {IoIosArrowForward} from 'react-icons/io';
import logo from '../assets/logo1.png';
import './Sidebar.css'
import { ImVideoCamera } from 'react-icons/im';
import { VscSignOut, VscTelescope } from 'react-icons/vsc';
// we destryctured the props coming
const Sidebar = ({user,closeToggle}) => {
  const categories=[{
    name:"Movie",
  },{name:"Browse"},{name:"Tv Shows"}]
    const isNotActiveStyle='isNotActive';
    const isActiveStyle='isActive';
    const handleCloseSidebar=()=>{
        // this comes from the home..the setToggleSidebar useState
        if(closeToggle)closeToggle(false);
    }
   
  return (
    <div className='sidebarWrapper'>
        <div >
            <Link
            to="/"
            onClick={handleCloseSidebar}
            className='sidebarlogo'>
                 <Link to="/">
                <p className="logo">
                <Link href="/">VIBEZ</Link>
              </p>
                </Link>
            </Link>
            <div className='sidebarMenu'>
                {/* so here if we are on home..the style will change */}
                <NavLink
                to='/'
                onClick={handleCloseSidebar}
                // the is active comes from the NavLink ..we just need to access it
                className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}>
                    <RiHomeFill/>
                    Home

                </NavLink>
                {/* <h3 className='sidebarCategory'>Discover Categories</h3> */}
                {/* {categories.slice(0,categories.length-1).map((category)=>( */}
                    <NavLink
                    to={`/browse`}
                    onClick={handleCloseSidebar}
                    // the is active comes from the NavLink ..we just need to access it
                    className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                        // add a key cause we are looping and each needs to be unique
                    key='Browse'
                    >
                       <ImVideoCamera/>
                        Browse
                    </NavLink>
                    <NavLink
                    to={`/naija`}
                    onClick={handleCloseSidebar}
                    // the is active comes from the NavLink ..we just need to access it
                    className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                        // add a key cause we are looping and each needs to be unique
                    key='Naija'
                    >
                       <VscTelescope/>
                        Naija
                    </NavLink>
                    <NavLink
                    to={`/topRated`}
                    onClick={handleCloseSidebar}
                    // the is active comes from the NavLink ..we just need to access it
                    className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                        // add a key cause we are looping and each needs to be unique
                    key='Top Rated'
                    >
                       <VscTelescope/>
                        Top Rated
                    </NavLink>
                    <NavLink
                    to={`/login`}
                    onClick={()=>{localStorage.clear();}}
                    // the is active comes from the NavLink ..we just need to access it
                    className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                        // add a key cause we are looping and each needs to be unique
                    key='Log Out'
                    >
                       <VscSignOut/>
                        Log Out
                    </NavLink>
            
            </div>
        </div>
        {user && (
        <Link
        to={`userProfile/${user?._id}`}
        className='sidebaruser'
        onClick={handleCloseSidebar}
        >
             <div className='menus-pics' ><p>BO</p></div>
            <p className='sidebaruserp'>{user?.email}</p>
        </Link>)}
    </div>
  )
}

export default Sidebar
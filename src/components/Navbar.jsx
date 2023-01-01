import React, { useState ,useRef,useEffect} from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link ,useNavigate} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai'
import logo from '../assets/logo1.png'
import './Navbar.css';
import {IoMdAdd,IoMdSearch} from 'react-icons/io'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import { VscSignOut } from "react-icons/vsc";
import { ImUser } from "react-icons/im";
import Sidebar from './Sidebar';
const Navbar = ({searchTerm,setSearchTerm,user}) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
    // scroll controller like in flutter
  const scrollRef=useRef(null);
  const navigate=useNavigate();

  return (
    <div className='all'>
      {/* so this meubar will show on phone screens */}
      {/* this div is like the app bar at the top on mobile phones */}
      <div className='navWrapperPhone'>
        {/* app bar contents its a row..so flex row...if its a column the flex column */}
       <div className='Navlogomenu'> <HiMenu fontSize={40} className="cursor-ponter" onClick={()=>setToggleSidebar(true)}/>
                <Link to="/">
                <p className="logo">
                <Link href="/">VIBEZ</Link>
              </p>
                </Link>
                </div>
              {/* search input area */}
        <div className='navbarcontainerPhone'>
           
                <div className='navbarsearchPhone'>
                  <IoMdSearch fontSize={21} className='navbarsearchIcon'/>
                  <input
                  type='text'
                  onChange={(e)=>setSearchTerm(e.target.value)}
                  placeholder='Search'
                  value={searchTerm}
                  onFocus={()=>navigate("/search")}
                  className="navbarsearcharea"
                  />
                </div>
        </div>

         {/* so when the menubar is clicked this will show sliding in */}
          {toggleSidebar && (
          <div className='side-drawer'>
            <div className='sidebarOpenIcon'>
              <AiFillCloseCircle fontSize={30} className=' cursor-pointer' onClick={()=>setToggleSidebar(false)}/>
            </div>
            {/* if user exist send the user ..this also send the function to close toggle..just like passing a fuction in state widget flutter*/}
            <Sidebar user={user && user} closeToggle={setToggleSidebar}/>

          </div>)}
      </div>
    {/* this will show on laptop screens */}
    <div className='navWrapper'>
       <p className="logo">
            <Link href="/">VIBEZ</Link>
          </p>
       <div className="navbar-container">
          <Link to="/"  ><p>Home</p></Link>
          <Link to="/browse"  ><p>Browse</p></Link>
          <Link to="/naija" ><p>Naija</p></Link>
          <Link to="/topRated"  ><p>Top Rated</p></Link>
          <div className='menus-dropdown'>
          <div className='menudropDownWithPics'>
         <div className='menus-pics' ><p>BO</p></div>
         <div>
         <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<AiFillCaretDown />}
              variant='outline'
            />
            <MenuList>
              <MenuItem icon={<ImUser />} command='⌘T'>
                Profile
              </MenuItem>
              <MenuItem icon={<VscSignOut />} command='⌘N'>
                Log Out
              </MenuItem>
              
            </MenuList>
          </Menu>
          </div>
            </div>
        
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar



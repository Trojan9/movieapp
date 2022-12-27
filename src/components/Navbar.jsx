import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './Navbar.css'
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
const Navbar = () => {

  return (
    <div>
    <div>
      
    </div>
    
    <div className='navWrapper'>
       <p className="logo">
            <Link href="/">VIBEZ</Link>
          </p>
       <div className="navbar-container">
          <div  ><p>Home</p></div>
          <div  ><p>Browse</p></div>
          <div ><p>Movies</p></div>
          <div ><p>Tv Shows</p></div>
          <div className='menus-dropdown'>
     
        <div className='menus-pics' ><p>BO</p></div>
       
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
  )
}

export default Navbar



import React from 'react'
import { SidebarContainer } from './SideBar.styles'

// ? icons
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiNetworkFill } from "react-icons/pi";
import { RiFolderCloudFill } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const SideBar = () => {
  return (
    <SidebarContainer>
      <div className='sidebar'>
        <ul>
          <li>
            <AiOutlineHome />
            <span>
              Home 
            </span>
          </li>
          <li>
            <FaUser />
            <span>
              Resume
            </span>
          </li>
          <li>
            <PiNetworkFill />
            <span>
              Services
            </span>
          </li>
          <li>
            <RiFolderCloudFill />
            <span>
              work
            </span>
          </li>
          <li>
            <MdOutlineMarkEmailUnread />
            <span>
              Contact
            </span>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  )
}

export default SideBar

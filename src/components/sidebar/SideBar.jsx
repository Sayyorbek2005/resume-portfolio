import React, { useState } from 'react'
import { SidebarContainer } from './SideBar.styles'

// ? icons
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiNetworkFill } from "react-icons/pi";
import { RiFolderCloudFill } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
// Mobil menyu uchun yangi ikonka
import { IoMenu, IoClose } from "react-icons/io5"; 

import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales/translation';

const SideBar = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  // Mobil menyu ochiq/yopiqligini tekshirish uchun state
  const [isOpen, setIsOpen] = useState(false);

  return (
    // IsOpen qiymatini styles fayliga prop qilib yuboramiz
    <SidebarContainer $isOpen={isOpen}>
      {/* Mobil menyu tugmasi */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      <div className='sidebar'>
        <ul>
          <li>
            <AiOutlineHome />
            <span>{t.sidebarHome}</span>
          </li>
          <li>
            <FaUser />
            <span>{t.sidebarResume}</span>
          </li>
          <li>
            <PiNetworkFill />
            <span>{t.sidebarServices}</span>
          </li>
          <li>
            <RiFolderCloudFill />
            <span>{t.sidebarWorks}</span>
          </li>
          <li>
            <MdOutlineMarkEmailUnread />
            <span>{t.sidebarContact}</span>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  )
}

export default SideBar
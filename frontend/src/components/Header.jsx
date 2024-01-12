//import 
//{BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 //from 'react-icons/bs'
 import {FaSearch ,FaRegBellSlash,FaRegCalendarAlt,FaHome,FaAt} from "react-icons/fa";

export default function Header() {
  
    return (
        <header className='header'>
        <div className='menu-icon'>
            <FaRegBellSlash className='icon'/>
        </div>
        <div className='header-left'>
            <FaRegCalendarAlt  className='icon'/>
        </div>
        <div className='header-right'>
            <FaAt className='icon'/>
            <FaSearch  className='icon'/>
            <FaHome className='icon'/>
        </div>
    </header>
  )
}

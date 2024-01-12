//import 
////BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
 // BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsJournalPlus, BsDribbble}
 //from 'react-icons/bs'
 import { FaHeart,FaAndroid,FaArchive,FaBath,FaBellSlash,FaAccusoft,FaAtlas,FaAsymmetrik } from "react-icons/fa";
 import logo from './logo.jpeg'

export default function Sidebar() {
  

        return (
            <aside id="sidebar" className=''>
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <FaHeart  className='icon_header'/> <h1>Daara IT</h1>
                    </div>

                    <div className="Tilt-inner login100-pic" data-tilt>
                    <img src={logo}
                        alt="image" />
                    </div>

                    <span className='icon close_icon' >x</span>
                </div>
        
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaAndroid className='icon'/> Dashboard*
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaArchive className='icon'/> Administration
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaBath  className='icon'/> Professeurs
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaBath  className='icon'/> Employés
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaAccusoft  className='icon'/> Etudiants
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaBellSlash  className='icon'/> Classes
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaAsymmetrik  className='icon'/> Modules
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <FaAtlas  className='icon'/> Parametres
                        </a>
                    </li>
                </ul>
            </aside>
          )
        }
        
        

// import React , {useState} from 'react';
// import { Link } from "react-router-dom";

// const  Navbar = () => {
//     const [click ,setClick] = useState(false)

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false)
//     return (
//         <>
//             <nav className = "navbar">
//                 <div className = "navbar-container">
//                     <Link to = "/" className = "navbar-logo">
//                     Landkit. <i className = "fab fa-typo3" />  
//                           <div className = 'menu-icon' onClick = {handleClick}> <br/>
//                          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
//                           </div>
//                           <ul className = {click ? 'nav-menu active' : 'nav-menu' } >
//                                 <li className = "nav-item">
//                                     <Link to = "/landings"className = "nav-links" onClick = {closeMobileMenu}>Landings</Link>
//                                 </li>
//                                 <li className = "nav-item">
//                                     <Link to = "/pages"className = "nav-links" onClick = {closeMobileMenu}>Pages</Link>
//                                 </li>
//                                 <li className = "nav-item">
//                                     <Link to = "/account"className = "nav-links" onClick = {closeMobileMenu}>Account</Link>
//                                 </li>
//                                 <li className = "nav-item">
//                                     <Link to = "/documentation"className = "nav-links" onClick = {closeMobileMenu}>Documentation</Link>
//                                 </li>
//                                 <li className = "nav-item">
//                                     <Link to = "/"className = "nav-links" onClick = {closeMobileMenu}>Account</Link>
//                                 </li>
//                           </ul>
                          
//                      </Link>
//                      <div>

//                      </div>
//                 </div>

//             </nav>
//         </>
//     )
// }

// export default Navbar

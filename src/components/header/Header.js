import React from 'react';
import './Header.css';
import headerimg from '../header/logo.png';

function Header() {

    return (
        /*<div className="Header">                /* <img src={headerimg} alt="Header" />                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/2000px-Intel-logo.svg.png" alt="" width="130" />

*/

            <div className="container">

                <div className="logo">
                <img src={headerimg} alt="Header" />
               
                </div>
                <nav className ="navbar">
                
                
                <ul className="list-ul">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Clients</li>
                    </ul>
                </nav>
            </div>
      /*  </div>*/
    );

}
export default Header;
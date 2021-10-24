import { SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [state, setState] = useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
    return ( 
        <nav className="navbar">
            <a href="/" className="logo">Adresor</a>
            <ul role="navigation" className="navLinks">
                <li><a href="/about">About</a></li>
                <li><a href="/archive">Archive</a></li>
                <li><a href="/admin">Admin</a></li>
            </ul>
            <ion-icon name="menu-outline" className="sidenav-trigger" onClick={toggleDrawer('right', true)}></ion-icon>

            <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                <ul role="navigation" className="mobileLinks">
                    <li><a href="/about">About</a></li>
                    <li><a href="/archive">Archive</a></li>
                    <li><a href="/admin">Admin</a></li>
                </ul>
            </SwipeableDrawer>
        </nav>
     );
}
 
export default Navbar;
import React from 'react';

const Nav = (props) => (
    <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="">Home</a>
            <a className="nav-link" href="https://github.com/maciejduda1/" target="_blank" rel="noopener noreferrer">github</a>
            <a className="nav-link" href="http://mddev.pl" target="_blank" rel="noopener noreferrer">mddev.pl</a>
            {props.userLoggedIn === false &&
                <button className="nav-link inactive" href="" onClick={ () => props.login() } >Login</button>
            }
            {props.userLoggedIn === true &&
                <a className="nav-link inactive" href="" onClick={ () => props.logout() } >Logout</a>
            }
    </nav>
);
// chwilowo zmieniam a na button - do czasu konfiguracji routingu
export default Nav;

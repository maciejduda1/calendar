import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Calendar App</h3>
            <nav className="nav nav-masthead justify-content-center">
                    <Link to={'/'} className="nav-link">Home</Link>
                    <a className="nav-link" href="https://github.com/maciejduda1/" target="_blank" rel="noopener noreferrer">github</a>
                    <a className="nav-link" href="http://mddev.pl" target="_blank" rel="noopener noreferrer">mddev.pl</a>
                    {props.userLoggedIn === false &&
                        <Link to={'/'} className="nav-link" onClick={ () => props.login() } >Login</Link>
                    }
                    {props.userLoggedIn === true &&
                        <Link to={'/'} className="nav-link" onClick={ () => props.logout() } >Logout</Link>
                    }
            </nav>
        </div>
    </header>
);
// chwilowo zmieniam a na button - do czasu konfiguracji routingu
export default Nav;

import { Link } from 'react-router-dom';
import './header.scss';
import { useEffect } from 'react';

const Header =() => {

    return(
        <div className='header'>
            <div className="header-logo">
                <Link to={'/'}>LANDING</Link>
            </div>
            <div className="header-menu">
                <Link to={'/clothes'}>Clothes</Link>
                <Link to={'/sneakers'}>Sneakers</Link>
                <Link to={'/bags'}>Bags</Link>
                <Link to={'/accesorize'}>Accesorize</Link>
            </div>
            <div className="header-icon">
                <img src={require('../../Image/Group 4.png')} alt="" />
            </div>
        </div>
    )
};

export default Header;
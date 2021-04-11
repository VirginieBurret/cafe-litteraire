import { React, useEffect, useState, } from 'react';
import './navbar.scss';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import RegisterForm from './registerForm';
import LoginForm from './loginForm';

const Navbar = () => {
   
    const [showRegisterForm, setRegisterForm] = useState(false);
    const [showLoginForm, setLoginForm ] = useState(false);

    const displayRegisterForm = () => {
        setLoginForm(false)
        setRegisterForm(!showRegisterForm)
        
    }

    const displayLoginForm = () => {
        setRegisterForm(false)
        setLoginForm(!showLoginForm)
        
    }
console.log(showLoginForm)


    return (
<div className="navbar">
    <p className="navbar__title">Le cercle des litteraires</p>

    <div className="navbar__buttons">
        <button className="navbar__buttons__elmt" onClick={displayRegisterForm}>Inscription</button>
        <button className="navbar__buttons__elmt" onClick={displayLoginForm}>Connexion</button>
        </div>
        
        { showRegisterForm ? <RegisterForm /> : ''}
        { showLoginForm ? (<LoginForm />) : ''}
          
</div>

    )
}

export default Navbar;
import { React, useEffect, useState, } from 'react';
import './navbar.scss';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import RegisterForm from './registerForm';
const Navbar = () => {
   
    const [showRegisterForm, setRegisterForm] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const displayRegisterForm = () => {
        setRegisterForm(!showRegisterForm)
    }

   

const [hideRegisterForm, sethideRegisterForm] = useState(true);

const hideForm = () => {
    setRegisterForm(!showRegisterForm)
}


    return (
<div className="navbar">
    <p className="navbar__title">Le cercle des litteraires</p>

    <div className="navbar__buttons">
        <button className="navbar__buttons__elmt" onClick={displayRegisterForm}>Inscription</button>
        <button className="navbar__buttons__elmt">Connexion</button>
        </div>
        
        { showRegisterForm ? <RegisterForm /> : ''}
          
</div>

    )
}

export default Navbar;
import { React, useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {

    const [showLoginForm, setLoginForm] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [user, setUser] = useState()
    const history = useHistory();

    console.log('user',user)


    const displayLoginForm = () => {
        setLoginForm(!showLoginForm)
    }
const [hideLoginForm, sethideLoginForm] = useState(true);

const hideForm = () => {
    setLoginForm(!showLoginForm)
}

  
    const handleSubmit = (e) => {
    
        console.log('envoie du formulaire');
        const data = {email, username, password};
        
        axios.post('http://localhost:4000/api/users/login',data)
         .then( (response)=>{
            const { token } = response.data;
            localStorage.setItem('token', token);
            setUser(response.data.username)
            console.log('SUCCESS',response)
            history.push("/board")
        }).catch(error => {
         console.log(error)
        })
      
     }
     
    return (
        <div className="registerForm">
            <Form className="register-form" onSubmit={handleSubmit}  >
<h2 className="register-title">Formulaire de connexion</h2>
      <Form.Field>
      <label>pseudo</label>
      <input 
      type="text" 
      required 
      placeholder="Entrez votre pseudo" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
       />
        
      </Form.Field>
      
      <Form.Field>
      <label>Email</label>
      <input 
      type="email" 
      required 
      placeholder="Entrez votre email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
       />
        
      </Form.Field>


    
      <Form.Field>
      <label>Mot de passe (2 caractères minimum)</label>
      <input type="password"
       required 
       placeholder="Entrez votre mot de passe" 
       name="password" 
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       minLength="2"
       />
    </Form.Field>



        <Button style={{marginRight:'1rem'}} required type="submit">
          Envoyer
        </Button>
     
        <Button  onClick={hideForm} >
          Retour
        </Button>
     
    </Form>
        </div>
    )
}

export default LoginForm
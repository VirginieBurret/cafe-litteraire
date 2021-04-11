import { React, useEffect, useState, } from 'react';
import './navbar.scss';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";

const RegisterForm = () => {

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

  
    const handleSubmit = (e) => {
    
        console.log('envoie du formulaire');
        const data = {email, username, password, age};
        
        axios.post('http://localhost:4000/api/users/register',data)
         .then( (response)=>{
          console.log('SUCCESS',response)
          setRegisterForm(!showRegisterForm)
          setUsername('')
          setPassword('')
          setEmail('')
          setAge('')
        }).catch(error => {
         console.log(error)
        })
      
     }
    return (
        <div className="registerForm">
            <Form className="register-form" onSubmit={handleSubmit}  >
<h2 className="register-title">Formulaire d'inscription</h2>
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
      <label>Age</label>
      <input type="text"
       required 
       placeholder="Entrez votre âge" 
       name="age" 
       value={age}
       onChange={(e) => setAge(e.target.value)}
       required/>
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
       required/>
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

export default RegisterForm
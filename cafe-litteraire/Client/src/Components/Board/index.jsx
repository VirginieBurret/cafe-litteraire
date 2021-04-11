import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Board = () => {

    const [token, setToken] = useState(localStorage)
    console.log('token state', token)
    const disconnect =()=>{
        localStorage.clear();
        window.location="/";

    }
    return(

<div>
    {token.length <=0 ? <><p>Tu fais quoi ici??? connectes toi d'abord là ohhhh!!!!</p><button onClick={()=>window.location="/"}>Accueil</button> </> :
    
    <> <h1>Bonjour utilisateur écrit en dur</h1>
    <button onClick={disconnect}>Déconnexion</button></>}
    
</div>
    )
}

export default Board;
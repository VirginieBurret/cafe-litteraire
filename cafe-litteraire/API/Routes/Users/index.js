  
const express = require('express')
const Router = express.Router()
const User  = require('../../Models/User/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken'); 


Router.post('/register', register = async (req,res) => {
   console.log('req.body', req.body);
    const { username, email, age, password } = req.body;
    
        //crypter mon mdp
       const hash = await bcrypt.hash(password, saltRounds) 
            const user = new User() 
        user.username = username 
        user.email = email 
        user.age = age
        user.password = hash;
    
    
    
    
        user.save((error)=> {
            
            if(!error){
              
                
                res.status(201).json({user: user._id})
            }
    
            else{
             
                res.status(200).json('erreur ')
            }
           
        })
     
    })

    Router.post('/login',login = (req,res) =>   {
        const { password, email, username } = req.body;
    
    User.findOne({email})// ça cherche l'user PUIS   
    .then((user) => {
         
        console.log("You are logged",req.body)
        if(!user){
    
            return res.status(401).json('user not found')
        }
    
        bcrypt.compare(req.body.password, user.password)
     
        
        .then(isValid => {
          
            if(!isValid){
                return res.status(401).json({error: 'Email ou Mot de passe incorrect'})
            }
            
            res.status(200).json({
                username: user.username,
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id},
                    'RANDOM_TOKEN_SECRET', 
                    { expiresIn: '24h'}
                )
            }) //si mdp valide je renvoie l'id
           
        })
        .catch(error => res.status(500).json("1er catch"))
       
        })
    .catch(error => res.status(500).json("2ème catch"))
      
        
    } )




 module.exports=Router;
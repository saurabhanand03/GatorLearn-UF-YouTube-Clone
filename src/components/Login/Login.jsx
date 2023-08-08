import React, {useState} from "react";
import './Login.css';
import Card from "../Card/Card";
import {database} from '../../utils/database';

export default function Login({setIsLoggedIn}){
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error_msg, setErrorMessage] = useState("");

const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter a username",
    noPassword: "Please enter a password",
};

const handleSubmit = (e) => {
    //stop page from loading
    e.preventDefault();
    if(!username){
        setErrorMessage({name: "noUsername", message: errors.noUsername});
        return;
    }
    if(!password){
        setErrorMessage({name: "noPassword", message: errors.noPassword});
        return;
    }
    //user credentials
    const currentUser = database.find((user) => user.username === username);
    if(currentUser){
        //right username and wrong password
        if(currentUser.password !== password){
            setErrorMessage({name: "password", message: errors.password});
        }else{
            //correct log in info
            setErrorMessage({});
            //setLogin(true);
        }
    }
    //username does not exist
    else{
        setErrorMessage({name: "username", message: errors.username});
       
    }
};

const displayError = (name) =>
    name === error_msg.name && (
        <p className="errorMsg">{error_msg.message}</p>
    );

 const handleLogin = () => {
        // Perform your login logic here
        // Once login is successful, update isLoggedIn state
        setIsLoggedIn(true);
      };

return ( 
    <Card>
        <h1 className = "title">Log In</h1>
        <p className = "subtitle">Please Log In</p>
        <form onSubmit={handleSubmit}>
            <div className="inputs_container">
                <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)}
                />                      

                <input
                type="text"
                placeholder="Password"
                value = {password}
                onChange={(event) => setPassword(event.target.value)}
                />
     
              
            </div>       
         
            <div className="loginButton">
            <button onClick={handleLogin}>Login</button>
            </div>
           
        </form>
        <div className="link_container">
            <a href="" className="small">
                Forgort Password?
            </a>
        </div>    

    </Card>
    );
    
}


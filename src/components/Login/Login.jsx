import React, {useState} from "react";
import './Login.css';
import Card from "../Card/Card";
import {database} from '../../utils/database';

export default function Login(){
return ( 
    <Card>
        <h1 className = "title">Log In</h1>
        <p className = "subtitle ">Please Log In</p>
        <form>
            <div className="inputs_container "  >
                <input 
                type="text" 
                placeholder="Username" 
                />                      

                <input
                type="text"
                placeholder="Password"
                /> 
            </div>       
         
            <div className="loginButton  bg-blackMain dark:bg-darkMain ">
            <button>
                <a href="/" className="small">
                Login
                </a>
            </button>
            </div>
           
        </form>
        <div className="link_container  ">
            <a href="" className="small">
                Forgot Password?
            </a>
        </div>    
    </Card>
    );
    
}


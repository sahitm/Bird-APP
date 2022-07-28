import { Button } from '@mui/material'
import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import SignIn from './SignIn'

function Register() {

    const [values, setValues] = useState({
        username: '',
        password: ''
      });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    
    const [login, setLogin] = useState(true);
    
    function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!values.username || !values.password) {
          alert('fill all fields')
        } else {
          
          localStorage.setItem("username", values.username);
          localStorage.setItem("password",values.password);
          console.log("Saved in Local Storage");
    
          setLogin(!login);
        }
      }
    
      function handleClick() {
        setLogin(!login);
      }

    return (
        <>
            {
            login ? 
                (<div className='register'>
                    <h1>Register</h1>
                    <div className='register--form'>
                        <input placeholder='Username' type="text" onChange={handleChange('username')}/>
                        <input placeholder='Password' type="text" onChange={handleChange('password')}/>
                        <Button variant="contained" onClick={handleFormSubmit}>Register</Button>
                        <p>If already registered <Button onClick={handleClick}>Login</Button></p>
                    </div>
                    
                </div>) 
                : 
                (
                <SignIn/>
                )
            
        }
        </>
        
        
    )
}

export default Register
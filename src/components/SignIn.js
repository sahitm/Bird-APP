import {React , useState} from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import './SignIn.css'
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const [loginvalues, setLoginValues] = useState({
    Logusername: '',
    Logpassword: ''
  });


  const handleLoginChange = (prop) => (event) => {
    setLoginValues({ ...loginvalues, [prop]: event.target.value });
  };

  let navigate = useNavigate();


  function handleLogin(e) {

    e.preventDefault();
    let userNM = localStorage
      .getItem("username")
    let pw = localStorage.getItem("password")
    console.log(loginvalues.Logusername)
    console.log(loginvalues.Logpassword)

    if (!loginvalues.Logpassword || !loginvalues.Logpassword) {
      alert('fill all fields')
    } else if (loginvalues.Logusername !== userNM || loginvalues.Logpassword !== pw) {
      alert('invalid credentials')
    } else {
      navigate('/home')
    }
  }

  return (
      <div className='Signup'>
          <TwitterIcon className='twticon' />
          <h1 className='heading'>
              Join Bird App Today
          </h1>
          <input placeholder='Username' className='inputform input' onChange={handleLoginChange('Logusername')}></input>
          <input placeholder='Password' className='inputform input' onChange={handleLoginChange('Logpassword')}></input> 
          <Button variant='cointained' className='inputform btn' onClick={handleLogin}>Login</Button>
      </div>)
}
export default SignIn
import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../context/user/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const context = useContext(UserContext);
    const loginUser=context.loginUser;
    const [credentials, setCredentials] = useState({email:"",password:""});
    
    const handleLogin= (e)=>{
    e.preventDefault();
    loginUser(credentials.email,credentials.password);
    navigate('/home');
    }
    
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    return (
        <div className="container">
            <h3>Login</h3>
            <form action="" className="form-group" onSubmit={handleLogin}>
            <label htmlFor="">Email:</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="userEmail" required />
            <label htmlFor="">Password:</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="userPassword" minLength={5} required />
            <br />
            <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <br />
            <span>New to CloudNotes?</span> <Link to="/signup">Create A New Account</Link>
        </div>
    )
}

export default Login

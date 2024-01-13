import React, { useContext, useState, useRef } from 'react'
import UserContext from '../context/user/UserContext';
import { Link } from 'react-router-dom';
import '../../src/index';

function Signup() {
    const context = useContext(UserContext);
    const { signupUser, confirmEmail, sendEmail } = context;
    const [userData, setuserData] = useState({ name: "", email: "", password: "" });
    // const [otpData, setOtpData] = useState({otp:0})

    const ref_to_open_modal = useRef(null);

    const handleSignup = (e) => {
        // console.log("handleSignup")
        e.preventDefault();
        signupUser(userData.name, userData.email, userData.password);
        // sendEmail(userData.email);
        // ref_to_open_modal.current.click();
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        const otp = document.getElementById('input-otp').value;
        confirmEmail(userData.email, otp);
    }

    const onChange = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value });
        // console.log(e.target.value);
    }

    return (
        <div className="container">
            
            <button style={{"display":"none"}}  type="button" ref={ref_to_open_modal} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Enter Otp to confirm Email</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='form-group' onSubmit={handleConfirm}>
                            <label className='form-control-label' htmlFor="">One Time Password</label>
                            <input type="text" className="form-control" id="input-otp"/>
                            <button className='my-3 btn btn-success' type="submit">Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <h3>Sign Up</h3>
            <form action="" className="form-group" onSubmit={handleSignup}>
                <label htmlFor="name" >Name:</label>
                <input type="text" id="userName" name="name" value={userData.name} onChange={onChange} className="form-control" minLength={1} required />
                <label htmlFor="">Email:</label>
                <input type="email" className="form-control" name="email" value={userData.email} onChange={onChange} id="userEmail" required />
                <label htmlFor="">Password:</label>
                <input type="password" className="form-control" name="password" value={userData.password} onChange={onChange} id="userPassword" minLength={5} required />
                <br />
                <input type="submit" className="btn btn-primary" value="Sign Up" />
            </form>
            <span>Already a user?</span> <Link to="/login">Login here</Link>
        </div>
    )
}

export default Signup

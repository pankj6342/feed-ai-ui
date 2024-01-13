import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import axios from "axios";
import { baseUrl } from "../../config";

function UserState(props) {
  const navigate = useNavigate(); //note: useHistory is replaced by navigate in react-router-dom
  const host = baseUrl;
  const [posts, setPosts] = useState();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserDataHelper = async () => {
      await getAllPostsOfUser();
      await getUserData();
    };
    getUserDataHelper();
  }, []);

  const loginUser = async (inputEmail, inputPassword) => {
    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: inputEmail, password: inputPassword }),
    });

    const data = await response.json();
    if (data.success) {
      //save the auth token
      localStorage.setItem("token", data.authtoken);
      //redirect to notes page:
      navigate("/");
    } else {
      alert("Incorrect Credentials");
    }
  };

  const signupUser = async (inputName, inputEmail, inputPassword) => {
    const response = await fetch(`${host}/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      }),
    });

    const data = await response.json();
    if (data.success) {
      //save auth token
      localStorage.setItem("token", data.authtoken);
      navigate("/");
      //redirect
    } else {
      alert("Please Check entered values");
    }
  };

  const sendEmail = async (givenEmail) => {};
  // let user=User.findOne

  //     const response = await fetch(`${host}/api/user/sendEmail`,
  //     {
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify({"email":givenEmail})
  //     });
  //     const data= await response.json();
  //     if(data.success){
  //         console.log("email sent successfully")
  //     }
  //     else{
  //         console.log("email not sent");
  //     }
  //     }

  const confirmEmail = async (inputEmail, inputOTP) => {
    navigate("/login");
  };
  // const response= await fetch(`${host}/api/user/confirmEmail`,
  // {
  //     method:'POST',
  //     headers:{
  //         'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({"email":inputEmail,"otp":inputOTP})
  // });

  // const data= await response.json();
  // console.log(data);
  // if(data.success){
  //     navigate('/login');
  // }
  // else{
  //   alert(data.message);
  // }
  // }

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getAllPostsOfUser = async () => {
    try {
      const response = await axios.get(`${host}/api/user/getPosts`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response;
      setPosts(data?.userPosts);
    } catch (error) {
      console.log({ getAllPostsOfUserError: error?.message });
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(`${host}/api/user/getUserData`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const { success, user } = response?.data;
      console.log("userData", user);
      setUserData(user);
      console.log({'state': userData});
    } catch (error) {
      console.log({ getUserDataError: error?.message });
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        signupUser,
        Logout,
        confirmEmail,
        sendEmail,
        posts,
        setPosts,
        userData,
        getUserData,
        setUserData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;

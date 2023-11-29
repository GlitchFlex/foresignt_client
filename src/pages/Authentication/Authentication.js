
import Register from "../../components/Register/Register";
import Login from '../../components/Login/Login'
import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import cover from '../../cover.png';
import "./Authentication.css";
import Logo from '../../logo.png'

function Main() {
  const [show, setShow] = useState("login");
  const token = localStorage.getItem("token");

//   if (token && parseJWT(token).exp * 1000 > Date.now()) return <Navigate to="/dashboard" />;

  return (
    <div className="main-container">
      {/* <PageTitle title={show.charAt(0).toUpperCase() + show.substring(1)} /> */}
      <div className="header-image-container">
        <div className="header-image"></div>
      </div>
      <div className="main-form-content">
        <div className="index-margin" style={{ position: "relative" }}>
          <div className="card">
          {/* className="flex gap-10 align-center justify-center" */}
            <div  style={{ position: "absolute",left : "-14px" ,top: 32, display : "flex", justifyContent : "center", alignItems :"center", gap : "10px" }} >
              <img src = {Logo}height={50} alt="logo" />
              <span className="leftover" style={{ fontSize: 40, marginLeft : "-27px" }}>
                oresight
              </span>
            </div>
            {show === "login" ? <Login setShow={setShow} /> : <Register setShow={setShow} />}
          </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default Main;

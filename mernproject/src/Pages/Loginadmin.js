import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Login() {
    var uri = "http://localhost:1200/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Email: data.get('emailadmin'),
            Password: data.get('passwordadmin'),
        }
      
    }
    

  return (
    <div>
    <div className="main"> 
        <div className="container-fluid log">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 frm">
            <div className="img">
            <img src="img1.jpg" className="img-responsive imgs" />
            </div>
            <center>
            <form className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10 login" onSubmit={handleform}>
                <h1 className="text">Admin Login</h1>
                <h4 className="plz">Please Enter Your E-mail and Password!</h4><br/>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span> 
           <input type={'email'} name="emailadmin" placeholder="Admin Email" className="form-control" required/>
           </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input type={'password'} name="passwordadmin" placeholder="Admin Password" className="form-control" required />
            </div>
            </div>
            <div className="form-group">
                <input type={'submit'} value="Login" className="btn btn-info sub"/>
            </div>
        </form>
        </center>
</div>
</div>
</div>
</div>

  )
}


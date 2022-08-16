import React, { useEffect, useState } from "react";
export default function Login() {
    
    

  return (
    <div >
    <div className="main "> 
        <div className="container-fluid log">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 frm">
            <div className="img">
            <img src="soclogin.jpeg" className="img-responsive im" />
            </div><br/>
            <center>
                
            <form className=" col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0 col-lg-10 col-md-10 col-sm-12 col-xs-12 login" >
                <h4 className="please">Please Enter Login ID and Password!</h4>
            
            <div className="form-group frms" >
            <div className="input-group ">
             <span className="input-group-addon glycol1 "><i className="glyphicon glyphicon-user "></i></span> 
           <input type={'text'} name="rollno" placeholder="Login ID" className="form-control" required/>
           </div>
            </div>
            

            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon glycol1"><i className="glyphicon glyphicon-lock "></i></span>
            <input type={'password'} name="password" placeholder="Password" className="form-control" required />
            </div>
            </div>
            <div className="form-group">
                <input type={'submit'} value="Login" className="btn btnn btn-default sub1"/>
                <br/><br/>
            </div>
        </form>
        
        </center>
</div>
</div>
</div>
</div>

  )
}
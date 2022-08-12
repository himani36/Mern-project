import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Register() {


    var uri = "http://localhost:1200/";

    function handleform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var obj = {
            Name: data.get('name'),
            Email: data.get('email'),
            Password: data.get('password'),
            Contact: data.get('contact'),
            URN: data.get('rollno'),
            Branch: data.get('branch'),
            Semester: data.get('sem'),
            Gender: data.get('gender'),
        }
        axios.post(uri+'AddUser', obj).then((succ) => {
            // console.log(succ.data);
            if(succ.data == "ok"){
                alert('Data Added');
                getdata();
                e.target.reset();
                e.target.name.focus();
            }
        })

    }

    const [data, setdata] = useState([]);
    function getdata(){
        axios.get(uri+'getUsers').then((succ) => {
            setdata(succ.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [])

    function del(x) {
        // alert(x);
        axios.post(uri+'deleteonedata', {id:x}).then((succ) => {
            if(succ.data == "Deleted"){
                alert('Deleted');
                getdata();
            }
        })
    }

    return (
        <>
         <div className="main"> 
        <div className="container-fluid regi">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 register">
            <div className="img2 col-lg-6">
            <img src="img5.png" className="img-responsive img2" />
            </div>
            <div className="col-lg-6 reg">
            <center>
            <form className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10 login" onSubmit={handleform}>
                <h1 className="text">Register</h1>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span> 
             <input
                        type={'text'}
                        name="name"
                        placeholder="Name"
                        className="form-control" />
           </div>
            </div>
            <div className="form-group frms" >
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span> 
           <input type={'email'} name="email" placeholder="Email" className="form-control" required/>
           </div>
            </div>

            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
             <input
                        type={'password'}
                        name="password"
                        placeholder="Password"
                        className="form-control" required />
            </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="	glyphicon glyphicon-education"></i></span>
             <input
                        type={'number'}
                        name="rollno"
                        placeholder="College Roll no."
                        className="form-control" required />
            </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="	glyphicon glyphicon-home"></i></span>
             <input
                        type={'text'}
                        name="branch"
                        placeholder="Branch"
                        className="form-control" required />
            </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
             <input
                        type={'number'}
                        name="sem"
                        placeholder="Semester" min={1} max={8}
                        className="form-control" required />
            </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
             <input
                        type={'tel'}
                        name="contact"
                        placeholder="Contact" 
                        className="form-control" required />
            </div>
            </div>
            <div className="form-group frms">
            <div className="input-group">
             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
             <select
                        name="gender" 
                        className="form-control">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    </div>
            </div>
            
            <div className="form-group">
                <input type={'submit'} value="Register" className="btn btn-info sub"/>
            </div>
            <h5 className="plz"><i>Already Registered?</i><a href=""> Login</a></h5>
        </form>
      
        </center>
        </div>
</div>
</div>
</div>

        </>
    )
}
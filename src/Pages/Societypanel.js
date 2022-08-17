import React from "react";
import { FaUsers, FaComments, FaCalendarCheck} from 'react-icons/fa';
import Sidebaradmin from './Sidebaradmin'
import LaunchEvent from "./LaunchEvent";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';


export default function Societypanel() {
  return (
    <div>
      <Sidebaradmin/>
    <Navbar/>
        <div className='col-lg-10 social'>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-8 panel">
                            <center>
                            <span className="paneltop"><FaComments/></span>
                            <div className="panelbody">Chat Group</div><br/>
                            <button className="btn btn-info view">Chat</button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-8 panel">
                            <center>
                            <span className="paneltop"><FaUsers/></span>
                            <div className="panelbody">Update Members</div><br/>
                            <button className="btn btn-info view "><Link to="/Updateprofile" className="update">Update</Link></button>
                            </center>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-8 panel">
                            <center>
                            <span className="paneltop"><FaCalendarCheck/></span>
                            <div className="panelbody">Launch an Event</div><br/>
                            <button className="btn btn-info view"><Link to="/LaunchEvent" className="update">Event</Link></button>
                            </center>
                        </div>
                        
            </div>
</div>
  )
}
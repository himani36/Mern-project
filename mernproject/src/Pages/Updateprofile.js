import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import SocDashboard from "./SocDashboard";

export default function Updateprofile() {
  var uri = "http://localhost:1200/";
  function handleform(e) {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    var obj = {
      Coordinator: data.get("coordinator"),
      Cocoordinator: data.get("cocoordinator"),
      Pro: data.get("pro"),
      Databaseandtech: data.get("dbandtech"),
      Discipline: data.get("discipline"),
      Event: data.get("event"),
      Tech: data.get("tech"),
      Socialmedia: data.get("socialmedia"),
      Creative: data.get("creative"),
      Content: data.get("content"),
      ActiveMembers: data.get("activemembers"),
      Executives: data.get("executives"),
    };
    axios.post(uri + "updatemembers", obj).then((succ) => {
      if (succ.data == "updated") {
        swal("Data Updated", "", "success");
        e.target.reset();
        e.target.coordinator.focus();
      }
    });
  }
  const [data, setdata] = useState([]);
  function getdata() {
    axios.post(uri + 'getUsers').then((succ) => {
      setdata(succ.data);
      console.log(succ.data);
    })
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <div className="department">
       <SocDashboard/>
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <form className=" col-lg-12 login" onSubmit={handleform}>
            <h1 className="text3 container">Update Members:</h1>

            <div className="col-lg-12 members">
              <div className="divide1 col-lg-6">
                <div className="form-group frms">
                <label>Coordinator </label>
                  <select
                    name="coordinator"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Coordinator
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <select
                    name="cocoordinator"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Co-Coordinator
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>PRO</label>
                  <select
                    name="pro"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      PRO
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Database and Techinician</label>
                  <select
                    name="dbandtech"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Database and Techinician
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Discipline</label>
                  <select
                    name="discipline"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Discipline
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>


                <div className="form-group frms">
                  <label>Event Management</label>
                  <select
                    name="event"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Event Management
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
              </div>
              <div className="divide col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Tech Team</label>
                 
                  <select
                    name="tech"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Tech Team
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Social Media </label>
                  
                  <select
                    name="socialmedia"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Social Media
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Creative </label>
                 
                  <select
                    name="creative"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Creative
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Content </label>
                 
                  <select
                    name="content"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Content
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Active Members </label>
                 
                  <select
                    name="activemembers"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Active Members
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group frms">
                  <label>Executives </label>
                 
                  <select
                    name="executives"
                    className="form-control"
                    >
                    <option value="" disabled selected hidden>
                      Executives
                    </option>
                    {data.map((row) => (
                      <option>
                        {row.Name} ({row.CRN})
                      </option>
                    ))}
                  </select>

                </div>
                <div className="form-group">
                  <input
                    type={"submit"}
                    value="Update"
                    className="btn btn-default btnn upbtn"
                  />
                  </div>
                  </div>
                  </div>
                  </form>
                  </div>
                  </div>
                  </div>
                  
           
  );
}

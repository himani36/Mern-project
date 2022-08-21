import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebaradmin from "./Sidebaradmin";
import swal from "sweetalert";


export default function Departmentadmin() {

  var uri = "http://localhost:1200/";
  var navi = useNavigate();

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
    axios.post(uri + "Addmember", obj).then((succ) => {
      if (succ.data == "ok") {
        swal("Data Added", "", "success");
        e.target.reset();
        e.target.name.focus();
      }
    });
  }

  var id = new URLSearchParams(window.location.search).get('q');

  const [name, setname] = useState('');
  const [dep, setdep] = useState('');
  function checkid() {
    if(id){
      axios.post(uri+'getonecat', {Id: id}).then((succ) => {
        console.log(succ.data);
        setname(succ.data.Department);
        setdep(succ.data.Society);
      })
    }
  }

  useEffect(() => {
    checkid()
  }, [id])



  return (
    <div className="department">
      <Sidebaradmin />
      <Navbar/>
      <div className="dept">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <form className=" col-lg-12  login"  onSubmit={handleform}>
            <div className="text4 container">{name} </div>
            <div className="text3 container">{dep}  Members:</div>
            <div className="col-lg-12 members">
              <div className="divide1 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Coordinator </label>
                  <input
                    type={"text"}
                    name="coordinator"
                    placeholder="Coordinator"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Co-Coordinator</label>
                  <input
                    type={"text"}
                    name="cocoordinator"
                    placeholder="Co-Coordinator"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>PRO</label>
                  <input
                    type={"text"}
                    name="pro"
                    placeholder="PRO"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Database and Techinician</label>
                  <input
                    type={"text"}
                    name="dbandtech"
                    placeholder="Database and Techinician"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Discipline</label>
                  <input
                    type={"text"}
                    name="discipline"
                    placeholder="Discipline"
                    className="form-control"
                    required
                  />
                </div>
              

              <div className="form-group frms">
                <label>Event Management</label>
                <input
                  type={"text"}
                  name="event"
                  placeholder=" Event Management"
                  className="form-control"
                  required
                />
                </div>
              </div>
              <div className="divide col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group frms">
                  <label>Tech Team</label>
                  <input
                    type={"text"}
                    name="tech"
                    placeholder="Tech Team"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Social Media </label>
                  <input
                    type={"text"}
                    name="socialmedia"
                    placeholder="Social Media"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Creative </label>
                  <input
                    type={"text"}
                    name="creative"
                    placeholder="Creative"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group frms">
                  <label>Content </label>
                  <input
                    type={"text"}
                    name="content"
                    placeholder="Content"
                    className="form-control"
                    required
                  />
                  </div>
                  <div className="form-group frms">
                    <label>Active Members </label>
                    <input
                      type={"text"}
                      name="activemembers"
                      placeholder="Active Members"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group frms">
                    <label>Executives </label>
                    <input
                      type={"text"}
                      name="executives"
                      placeholder="Executives"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type={"submit"}
                      value="Add"
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

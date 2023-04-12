import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ticketform = () => {
  //dropdown menu priority selection
  const [selects, setSelects] = useState();
  const handleSelect = (e) => {
    setSelects(e.target.value);
  };

  const [title, setTitle] = useState();
  const [project, setProject] = useState();
  const [reason, setReason] = useState();

  //to navigate
  const navigate = useNavigate();

  //form submission
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8081/ticketform", {
        title,
        project,
        reason,
        selects,
      })
      .then((res) => {
        console.log(res);
        navigate("/ticketlist");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="col-md-6 offset-md-3">
      <div>
        <h1 className="h1">Ticketform</h1>
        <form onSubmit={handleSubmit}>
          {/* *******************************title******************************************* */}
          <div className="mb-3 row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              <h5>Title: </h5>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          {/* ***********************************project************************************* */}
          <div className="mb-3 row">
            <label htmlFor="project" className="col-sm-2 col-form-label">
              <h5>Project: </h5>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
          </div>

          {/* ***********************************reason************************************* */}
          <div className="mb-3 row">
            <label htmlFor="reason" className="col-sm-2 col-form-label">
              <h5>Reason: </h5>
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                rows="4"
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </div>

          {/* ***********************************dropdown*********************************** */}
          <div>
            <label>
              <h5>set priority: </h5>
            </label>
            <select value={selects} onChange={handleSelect}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ticketform;

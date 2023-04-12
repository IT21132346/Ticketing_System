import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ticketlist = () => {
  //to fetch data from the database
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setTicket(res.data))
      .catch((err) => console.log(err));
  }, []);

  //delete the data
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8081/ticketlist/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="col-md-6 offset-md-3">
      <h1>Ticket List</h1>
      <Link to="/ticketform" type="button" className="btn btn-warning">
        Add+
      </Link>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Tittle</th>
            <th>Project</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ticket.map((data, index) => (
            <tr key={index}>
              <td>{data.priority}</td>
              <td>{data.title}</td>
              <td>{data.project}</td>
              <td>
                <Link to={`ticketupdate/${data.ID}`}>update</Link>
                <button onClick={(e) => handleDelete(data.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ticketlist;

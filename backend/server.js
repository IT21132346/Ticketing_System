const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ticket_app",
});

app.get("/", (req, res) =>{
  //res.json("hello from the otherside")
  const sql = "SELECT * FROM ticket";
  db.query(sql,(err, data) =>{
    if(err) return res.json("Error");
    return res.json(data);
  })
})
//Sign-up page
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    } else {
      return res.json(data);
    }
  });
});

//login page
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

//insert data into ticket table
app.post('/ticketform', (req,res) => {
  const sql = "INSERT INTO ticket (`title`,`project`, `reason`, `selecs`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.project,
    req.body.reason,
    req.body.selects
  ]
  db.query(sql, [values],(err,data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

//update data inside ticket table
app.put('/ticketupdate/:id', (req,res) => {
  const sql = "update ticket set `title=?` `project=?` `reason=?` `priority=?` where ID=?";
  const values = [
    req.body.title,
    req.body.project,
    req.body.reason,
    req.body.selects
  ]
  const ID = req.params.id;
  db.query(sql, [...values, ID],(err,data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

//to delete the data inside the ticket table
app.delete('/ticketupdate/:id', (req,res) => {
  const sql = "DELETE FROM ticket WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id],(err,data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

//asign a port number
app.listen(8081, () => {
  console.log("Listning..!");
});

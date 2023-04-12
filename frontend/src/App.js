//import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Ticketform from "./components/Ticketform";
import Ticketlist from "./components/Ticketlist";
import TicketUpdate from "./components/Ticketupdate";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}>
          {" "}
        </Route>
        <Route path="/ticketform" element={<Ticketform />}>
          {" "}
        </Route>
        <Route path="/ticketlist" element={<Ticketlist />}>
          {" "}
        </Route>
        <Route path="/ticketlist/ticketupdate/:id" element={<TicketUpdate />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

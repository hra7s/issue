import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Issues from "./components/Issues"
import Sample from "./components/Sample"
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [nextTicketId, setNextTicketId] = useState(1);
  console.log(tickets)

  const handleSubmitTicket = (newTicket) => {
    const ticketWithId = { ...newTicket, id: nextTicketId, status: 'Open' };
    setTickets((prevTickets) => [...prevTickets, ticketWithId]);
    setNextTicketId(nextTicketId + 1);
  };

  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <Router>
      <div className="app-container">
<NavBar/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contact"
              element={<Contact handleSubmit={handleSubmitTicket} />}
            />
            <Route
              path="/issues"
              element={<Issues tickets={tickets} updateStatus={updateTicketStatus} />}
            />
            <Route 
            path="/sample"
            element={<Sample/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ticket.css"; // Import Ticket.css for ticket row styling

function Ticket({ ticket, onUpdateStatus }) {
  const [selectedStatus, setSelectedStatus] = useState(ticket.status);
  const history = useNavigate();

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    onUpdateStatus(ticket.id, newStatus);
  };

  // Define a function to determine status color based on status value
  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "status-open";
      case "In Progress":
        return "status-in-progress";
      case "Resolved":
        return "status-resolved";
      default:
        return "";
    }
  };

  return (
    <tr className="ticket-row">
      <td onClick={() => history("/sample",{ state: { data: ticket } }) }>
        {ticket.ticketId}
      
      </td>
      <td>{ticket.name}</td>
      <td>{ticket.email}</td>
      <td>{ticket.issueType}</td>
      <td>{ticket.issue}</td>
      <td className={getStatusColor(selectedStatus)}>{selectedStatus}</td>
      <td>
        <select
          value={selectedStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </td>
    </tr>
  );
}

export default Ticket;

import React from 'react';
import Ticket from './Ticket';
import './Issues.css'; // Import Issues.css for table styling

function Issues({ tickets, updateStatus }) {
  const handleStatusUpdate = (ticketId, newStatus) => {
    updateStatus(ticketId, newStatus);
  };

  // Function to generate sequential ticketId starting from 1000
  const generateTicketId = (index) => {
    return 1000 + index;
  };

  return (
    <div className="issues-container">
      <h2>Reported Issues</h2>
      {tickets.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        <table className="issues-table">
          <thead>
            <tr>
              <th >Ticket ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Issue Type</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <Ticket
                key={ticket.id}
                ticket={{
                  ...ticket,
                  ticketId: generateTicketId(index) // Generate sequential ticketId starting from 1000
                }}
                onUpdateStatus={handleStatusUpdate}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Issues;
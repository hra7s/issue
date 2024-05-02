import React, { useState } from 'react';
import './Contact.css';

function Contact({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    otherIssueType: '',
    issue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { issueType, otherIssueType, ...rest } = formData;
    const selectedIssueType = issueType === 'Other' ? otherIssueType : issueType;
    const newFormData = { ...rest, issueType: selectedIssueType };
    handleSubmit(newFormData);
    setFormData({
      name: '',
      email: '',
      issueType: '',
      otherIssueType: '',
      issue: ''
    });
    // Display alert after form submission
    window.alert('Issue submitted successfully!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="issueType">Issue Type:</label>
        <select
          id="issueType"
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
        >
          <option value="">Select an issue type</option>
          <option value="Server is not reachable or unable to connect">Server is not reachable or unable to connect</option>
          <option value="Unable to connect to website or an application">Unable to connect to website or an application</option>
          <option value="Unable to ssh as root or any other">Unable to ssh as root or any other</option>
          <option value="Can't cd to the directory even with sudo privileges">Can't cd to the directory even with sudo privileges</option>
          <option value="Running out of memory">Running out of memory</option>
          <option value="Unable to run certain commands">Unable to run certain commands</option>
          <option value="Unable to get IP address">Unable to get IP address</option>
          <option value="Other">Other</option>
        </select>
        {formData.issueType === 'Other' && (
          <input
            type="text"
            name="otherIssueType"
            value={formData.otherIssueType}
            onChange={handleChange}
            placeholder="Please specify"
          />
        )}
        <label htmlFor="issue">Issue:</label>
        <textarea
          id="issue"
          name="issue"
          value={formData.issue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
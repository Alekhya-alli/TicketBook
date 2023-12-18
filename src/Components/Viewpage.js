import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table,Header } from 'semantic-ui-react';
function Viewpage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/details');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header textAlign='center'>View Bookings</Header>
      <Table className="ui celled table">
        <thead>
          <tr>
          <th>ID</th>
          <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Start</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Time</th>
            
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
            <td>{booking.id}</td>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.address}</td>
              <td>{booking.start}</td>
              <td>{booking.end}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Viewpage;

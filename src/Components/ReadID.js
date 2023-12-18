import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ReadID() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/details/${id}`);
        setBooking(response.data);
      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <table className="ui table table-striped">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{booking.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{booking.lastName}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{booking.address}</td>
          </tr>
          <tr>
            <td>Start</td>
            <td>{booking.start}</td>
          </tr>
          <tr>
            <td>End</td>
            <td>{booking.end}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{booking.date}</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{booking.time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ReadID;

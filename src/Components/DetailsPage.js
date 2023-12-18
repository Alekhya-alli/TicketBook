import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import axios from 'axios';

const DetailsPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {}; 
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/details`)
      .then(res => {
        setData(res.data);
        console.log('Data:', res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Grid container centered>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h2>Submitted Details</h2>
          <i className="circular tasks icon"></i>
          Confirm

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
                <td>{formData.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{formData.lastName}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{formData.address}</td>
              </tr>
              <tr>
                <td>Start</td>
                <td>{formData.start}</td>
              </tr>
              <tr>
                <td>End</td>
                <td>{formData.end}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{formData.date}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{formData.time}</td>
              </tr>
            </tbody>
          </table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default DetailsPage;

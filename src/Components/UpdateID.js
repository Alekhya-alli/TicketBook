import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

function UpdateID() {
  const [formData, setFormData] = useState({});
  const [idInput, setIdInput] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIdInput(id);

      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3030/details/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching booking:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3030/details/${idInput}`, formData);
      console.log('Booking updated:', response.data);
      window.alert('Updated successfully')
    
    } catch (error) {
      console.error('Error updating booking:', error);
      window.alert("Invalid Index");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Container textAlign="center">
        <Form>
          <h2>Update Booking</h2>
          <Form.Field>
            <label>Enter Booking ID:</label>
            <input
              type="text"
              name="id" 
              value={idInput}
              onChange={(e) => setIdInput(e.target.value)}
            />
          </Form.Field>
          
          <Form.Field>
            <label>Other Field:</label>
            <label>Enter First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder='Enter First Name'
              class="ui input focus"
              value={formData.firstName || ''}  
              onChange={handleInputChange}
            />
            <label>Enter Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder='Enter Last Name'
              class="ui input focus"
              value={formData.lastName || ''}  
              onChange={handleInputChange}
  />
          </Form.Field> 
         
          <Button class="ui primary button" onClick={handleUpdate}>Update</Button>
         
        </Form>
      </Container>
      
    </div>
  );
}

export default UpdateID;

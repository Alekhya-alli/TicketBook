import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button,Container,Form } from 'semantic-ui-react';

function DeleteID() {
  const [error,setError] = useState(null);
  const [indexInput, setIndexInput] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/details');
        setData(response.data);
      } catch (fetchError) {
        setError(fetchError);
      }
    };

    fetchData();
  }, []);

  const handleDelete = () => {
    const idToDelete = indexInput;
    if (idToDelete !== undefined) {
      console.log("Delete URL:", `http://localhost:3000/details/${idToDelete}`);
      axios.delete(`http://localhost:3000/details/${idToDelete}`)
        .then(res => {
          setData(data.filter(item => item.id !== idToDelete));
        })
        .catch(err => console.log(err));
        window.alert("Invalid Index")
    } else {
      console.log("Invalid index or ID");
      
    }
}
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
    <Container textAlign="center">
      <Form>
        <h2>Delete Booking</h2>
        <Form.Field>
          <label>Enter Booking ID:</label>
          <input
            type="text"
            value={indexInput}
            onChange={(e) => setIndexInput(e.target.value)}
          />
        </Form.Field>
        <Button class="ui primary button" onClick={handleDelete}>Delete</Button>
      </Form>
    </Container>
    </div>
  );
}

export default DeleteID;

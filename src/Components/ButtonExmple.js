import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { Container, Input, Form, Button, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
const ButtonExmple = ({}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    date: '',
    start: '',
    end: '',
    image: null,
    time: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3030/details', formData);
      if (response.status >= 200 && response.status < 300) {
        navigate('/details', { state: { formData } });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="first" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container>
        <Grid textAlign="center" className="login-form">
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked style={{ height: '100vh' }}>
              <h1 className='heading'>Book Tickets</h1>
              <h4 className="ui dividing header">Fill the below details</h4>
          <div className="field">
    <label id="name" className='name'>Name</label>
    <div className="two focus fields">
      <div className="field">
        <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
      </div>
      <div className="field">
        <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required/>
      </div>
    </div>
  </div>
  <div className="field" >
    <label id="address" className='address'>Current Address</label>
    <div className="fields">
      <div className="twelve wide field">
        <Input type="text" name="address" placeholder="Street Address" onChange={handleChange} value={formData.address} required></Input>
      </div>
    </div>
  </div>
  <div className="two fields">
    <div className="field" >
      <label className='start'>Start</label>
      <select className="ui fluid dropdown" name='start' value={formData.start} onChange={handleChange}>
        <option value="">From</option>
    <option value="BBL">Bobbili</option>
    <option value="VZM">Vizianagaram</option>
    <option value="VSKP">Visakhapatnam</option>
    </select> 
    </div>
    <div className="field" >
      <label className='end'>End</label>         
    <select className="ui fluid dropdown" name='end' value={formData.end} onChange={handleChange}>
    <option value="">To</option>
    <option value="RJMD">Rajahmundry</option>
    <option value="GTR">Guntur</option>
    <option value="VJWD">Vijayawada</option>
    <option value="HYD">Hyderabad</option>
    <option value="KKD">Kakinada</option>
    <option value="SKLM">Srikakulam</option>
    </select> 
    </div>
    </div>
    <div className="field">
    <Form.Input
                fluid
                icon="upload"
                iconPosition="left"
                label="Choose File :"
                className='file'
                placeholder="Upload Image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              </div>
    <div className="field">
      <Form.Input
                fluid
                icon="calendar alternate outline"
                label="Date"
                iconPosition="left"
                placeholder="Date :"
                className='date'
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
      </div>
      <div className='field'>
      <Form.Input
                fluid
                icon="clock outline"
                iconPosition="left"
                label="Time"
                className='time'
                placeholder="Time :"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
      </div>
      <Button color="blue" fluid size="large" type="submit" className='ui primary button' onChange={handleSubmit}>
          Submit
        </Button>
        </Segment>
</Form>
</Grid>
</Container>
</div>
  )  
}
export default ButtonExmple;

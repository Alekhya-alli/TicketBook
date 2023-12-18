import React from "react";
import { Link } from 'react-router-dom';
import { Container, Menu} from 'semantic-ui-react';
// const background = '/images/background.jpg';
export function Welcome() {
  return (
    <div style={{ background: 'aqua', minHeight: '100vh', padding: '20px' }}>
      <Menu fixed="top" inverted style={{ textAlign: 'center' }}>
        <Container>
          <header>
            <h1>Ticket Booking App</h1>
          </header>
          <Menu.Item>
            <Link to="/buttonexmple">Create Booking</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/viewpage">View Tickets</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/update">Update Tickets</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/delete">Delete Tickets</Link>
          </Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '15em', textAlign: 'center' ,background: 'aqua', padding: '20px'}}>
      
        <header>
          <h1 style={{ color: 'blue' }}>Welcome to the Ticket Booking App</h1>
        </header>
      </Container>
    </div>
  );
}

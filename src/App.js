import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ButtonExmple from './Components/ButtonExmple';
 import DetailsPage from './Components/DetailsPage';
import { Welcome } from './Components/Welcome';
import ReadID from './Components/ReadID';
import DeleteID from './Components/DeleteID';
import Viewpage from './Components/Viewpage';
import UpdateID from './Components/UpdateID';

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/viewpage" element={<Viewpage />} />
            <Route path="/delete" element={<DeleteID />} />
            <Route path="/create" element={<ButtonExmple />} />
            <Route path="/read" element={<ReadID/>}/>
            <Route path="/update" element={<UpdateID/>}/>
            <Route path="/buttonexmple/:id" element={<UpdateID />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route
              path="/buttonexmple"
              element={<ButtonExmple />}
            />
            
          </Routes>
    </Router>
  );
}

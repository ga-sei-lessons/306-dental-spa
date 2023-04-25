import {
  BrowserRouter as Router, // alias BrowserRouter => Router
  Routes,
  Route
} from "react-router-dom"

import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* all react router dom stuff MUST go in the router */}
      <Router>
        {/* the routes component are where we define individual routes */}
        <Routes>
          {/* use Route to define an indivial route to be associated with a url patter */}
          <Route 
            path="/" // url pattern
            element={<Home />}
          />

          <Route 
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

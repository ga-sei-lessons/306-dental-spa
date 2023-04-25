import {
  BrowserRouter as Router, // alias BrowserRouter => Router
  Routes,
  Route
} from "react-router-dom"

import Layout from "./components/partials/Layout"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Services from "./components/pages/Services"
import Service from "./components/pages/Service"
import NotFound from "./components/pages/NotFound"

import serviceDetails from "./data"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* all react router dom stuff MUST go in the router */}
      <Router>
        {/* the routes component are where we define individual routes */}


        <Layout>
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

            <Route 
              path="/services"
              element={<Services services={serviceDetails} />}
            />

            {/* 
              friendly pieces of advice about making routes
              rule 1: details pages should be /things/:id
              rule 2: give the same props to the list of all /things and to /things/:id
              rule 3: just because you can pass data through Link components, does not mean you should

              remember: state is the single source of truth
            */}

            <Route 
              path="/services/:id"
              element={<Service services={serviceDetails} />}
            />

            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

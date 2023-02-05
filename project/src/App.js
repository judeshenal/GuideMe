//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
//import Login from './Pages/Login';
//import HomePage from './Pages/HomePage';

import Sidebar from './Pages/Sidebar';
//import from 'react-dom'



import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import JobPost from "./Pages/job post/jobPost";
import HomePage from "./Pages/HomePage";
import CompanyDetails from "./Pages/company details/companyDetails";
import Notification from "./Pages/notification/notification";
import Done from "./Pages/notification/notofication pages/done";
import Save from "./Pages/notification/notofication pages/save";
import Inbox from "./Pages/notification/notofication pages/inbox";
import Assigned from "./Pages/notification/notofication pages/assigned";
import Participating from "./Pages/notification/notofication pages/participating";
import Mentioned from "./Pages/notification/notofication pages/mentioned";
import ReviewRequest from "./Pages/notification/notofication pages/review-request";

function App() {
  return (
    <Router>
    <div className="App"></div>
    <div className='head'>
        <Header/>
      </div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job-post" element={<JobPost />} />
      <Route path="/company-details" element={<CompanyDetails />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/done" element={<Done />} />
      <Route path="/save" element={<Save />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/assigned" element={<Assigned />} />
      <Route path="/participating" element={<Participating />} />
      <Route path="/mentioned" element={<Mentioned />} />
      <Route path="/review-request" element={<ReviewRequest />} />
      </Routes>
    </Router> 
  );
}

export default App;

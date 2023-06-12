
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import JobPost from "./Pages/job post/jobPost";
import JobVacancies from "./Pages/job post/jobVacancies";
import HomePage from "./Pages/HomePage";
import CompanyDetails from "./Pages/company details/companyDetails";
import SingleConsultant from "./Pages/SingleConsultant";
import PaymentPage from "./Pages/PaymentPage";
import TransactionHistory from "./Pages/TransactionHistory";

import Notification from "./Pages/notification/notification";
import Done from "./Pages/notification/notofication pages/done";
import Save from "./Pages/notification/notofication pages/save";
import Assigned from "./Pages/notification/notofication pages/assigned";
import Participating from "./Pages/notification/notofication pages/participating";
import ReviewRequest from "./Pages/notification/notofication pages/review-request";
import SlotComponent from "./SlotComponent";
import Chat from './Chat';


function App() {
  return (
    <Router>
    <div className="App"></div>
    <div className='head'>
       {/* // <Navbar/> */}
      </div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job-post" element={<JobPost />} />
      <Route path="/job-vacancies" element={<JobVacancies />} />
      <Route path="/singleConsultant" element={<SingleConsultant />} />
      <Route path="/paymentPage" element={<PaymentPage />} />
      <Route path="/transactionHistory" element={<TransactionHistory />} />
      <Route path="/company-details/:mid" element={<CompanyDetails />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/done" element={<Done />} />
      <Route path="/save" element={<Save />} />
      <Route path="/assigned" element={<Assigned />} />
      <Route path="/participating" element={<Participating />} />
      <Route path="/reviewrequest" element={<ReviewRequest />} />
      <Route path="/meet" element={<SlotComponent />} />
      <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router> 
    
  );
}

export default App;

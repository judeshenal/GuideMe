import DayTimePicker from './Pages/DayTimePicker'
import Slots from './components/Slots';
import Header from './components/Header';

function App() {
    return (
      <div className="App">
        <Header/>
        <div className="head">
          <h1>Book Your Slot</h1>
        </div>
        <div className="row">
          <DayTimePicker/>
          <div class="vl"></div>
          <Slots/>
        </div>
        
      </div>
    );
  }
  
  export default App;


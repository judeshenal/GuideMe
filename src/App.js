//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
//import from 'react-dom'


function App() {
  return (
    <div className="App">
      <div className='head'>
        <Header/>
      </div>
      <div className='body'>
      <HomePage/>
      </div>
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;

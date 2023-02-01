//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import Search from './Pages/Search';
//import from 'react-dom'


function App() {
  return (
    <div className="App">
      <div className='head'>
        <Header/>
      </div>
      <div className='body'>
      <HomePage/>
      <Search/>
      </div>
      <div className='footer'>
        <footer/>
      </div>
    </div>
  );
}

export default App;

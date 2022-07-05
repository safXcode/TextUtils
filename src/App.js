// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

// let name = "safwan";
// let intro = "hello! this is " + name;

function App() {
  //  dark mode and dark mode lable
  const [mode, setmode] = useState('light')
  const [modeLable, setmodeLable] = useState("Enable Dark Mode")
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      setmodeLable("Disable Dark Mode")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")

    } else {
      setmode('light')
      setmodeLable("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode has been disabled", "success")
    }
  }

  // alert handlers
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setalert(null)
  }, 1500);

  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode} modeLable={modeLable} />
        <Alert alert={alert} />
        <div className="container">

          {/* switch is changed to Routes please not this  */}
          <Routes>
          <Route exact path="/" element= {<TextForm heading="Enter The Text Here" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>

        </div>




      </Router>
    </>

  );
}

export default App;

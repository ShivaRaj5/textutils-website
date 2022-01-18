import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add('bg-'+cls);
    if (mode == 'light') {
      setMode('dark');
      document.body.style.background = 'black';
      showAlert("Dark Mode is enabled", "success");
      document.title = "Home - Dark Mode"
    }
    else if (mode == 'dark') {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode is enabled", "success");
      document.title = "Home - Light Mode"
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;

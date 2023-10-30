import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is on', 'success');
      document.title = 'Textutils - Dark mode ';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is on', 'success');
      document.title = 'Textutils - Light mode ';
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" about="about text" mode={mode} toggleMode={toggleMode} />
        <div>
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

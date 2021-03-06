import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './screens/Home';
import HeShe from './screens/HeShe';
import Services from './screens/Services';
import WeddingHall from './screens/WeddingHall';
import Timetable from './screens/Timetable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './services/SignInPage';
import SignUpPage from './services/SingUpPage';
// import PasswordForget from './services/PasswordForget';

function App() {
  const [classname, setClassname] = useState("background")
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 383
      console.log(window.scrollY, 'istop', isTop)

      if (!isTop) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
    
  }, [])

  return (
    <Router>
      <h1>{`Natalia&Konrad`}</h1>


      <div className={classname}></div>
      <div className="App">

        <Nav settingClass={setClassname} sticky={sticky}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Couple" component={HeShe} />
          <Route path="/Services" component={Services} />
          <Route path="/Place" component={WeddingHall} />
          <Route path="/Timetable" component={Timetable} />
          <Route path="/SignUp" component={SignUpPage} />
          <Route path="/SignIn" component={SignInPage} />
          {/* <Route path="/PasswordForget" component={PasswordForget} /> */}
        </Switch>
      </div>


    </Router>

  );
}

export default App;

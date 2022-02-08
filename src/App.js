import React from "react"
import {Header} from "./Components/Header/index"
import {Beggin} from "./Components/beggin/index"
import { BrowserRouter as Router } from "react-router-dom"
import {Pages} from "./Components/Pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
        <Beggin />
      </Router>

    </div>
  );
}

export default App;

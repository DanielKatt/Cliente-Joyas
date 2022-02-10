import React from "react"
import {Header} from "./Components/Header/index"
import {Beggin} from "./Components/beggin/index"
import { BrowserRouter as Router } from "react-router-dom"
import {Pages} from "./Components/Pages"
import { DataPr } from "./Context/DataPr"

function App() {
  return (
    <DataPr>
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
      </Router>
    </div>
    </DataPr>
  );
}

export default App;

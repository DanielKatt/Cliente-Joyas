import React from "react"
import {Header} from "./Components/Header/index"
import { BrowserRouter as Router } from "react-router-dom"
import {Pages} from "./Components/Pages"
import { DataPr } from "./Context/DataPr"
import "boxicons";
import { Cart } from "./Components/Cart/Cart"
 

function App() {
  return (
    <DataPr>
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
        <Cart />
      </Router>
    </div>
    </DataPr>
  );
}

export default App;

import React from "react"
import {Header} from "./Components/Header/index"
import {ProductsList} from "./Components/Products/index"
import "boxicons"

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
    </div>
  );
}

export default App;

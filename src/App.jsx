import React from "react";
import List from "./components/List";
import Form from "./components/Form";

import './App.css';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      
    <h2>Add a new book</h2>
      <Form />
      <br></br>
      <br></br>

      <hr></hr>
      <h2>Books on library</h2>
      <List />
      
    </div>
    
  </div>
);
export default App;
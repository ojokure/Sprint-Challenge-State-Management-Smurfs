import React from "react";
import connect from "react-redux";

 function App(){


  return (
    <div className= "App" >
      <h1> Please Sign In </h1>
      <form>
        <div>
          <label>Name </label>
          <br />
          <input type="text" name="name" />
        </div>
        <br />
        <div>
          <label>Age </label>
          <br />
          <input type="text" name="age" />
        </div>
        <br />
        <div>
          <label>Height </label>
          <br />
          <input type="text" name="height" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr/>
    </div>
  );
}

export default App;

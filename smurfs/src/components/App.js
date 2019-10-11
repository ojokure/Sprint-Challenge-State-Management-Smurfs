import React from "react";
import connect from "react-redux";

export function App () {
  return (
    <div>
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
    </div>
  );
}

export default App;

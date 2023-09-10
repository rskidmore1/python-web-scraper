import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';



function App() {

  const [data, setData] = useState({ 'link': 'hello' });

  // useEffect(() => {
  //   fetch("http://localhost:5000/json-example", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then(response => {
  //     //handle response
  //     console.log(response);
  //   });

  // }, []);
  useEffect(() => {
    fetch('http://localhost:5000/other', {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then(response => {
        //handle response
        response.json()
        // console.log(response);
      })
      .then(response => {
        //handle data
        console.log(response);
      })
      .catch(error => {
        //handle error
      });
  });

  return (
    <div className="App container">
      <div className="d-flex flex-column justify-content-center">

        <form className="">
          <div class="form-group">
            <label for="URLToScrap">Url to scrap</label>
            <input type="email" class="form-control" id="URLToScrap" placeholder="URL" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        <div className="">
          Display text
        </div>
      </div>

    </div>
  );
}

export default App;

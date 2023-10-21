import React, { useState, useEffect } from 'react';
import axios from 'axios';




function App() {

  const [data, setData] = useState();
  const [urlData, setUrlData] = useState();
  const [returnText, setReturnText] = useState();


  function getContent() {

    event.preventDefault();

    var form = document.getElementById('urlForm');

    // Retrieve the value from the input field using the name attribute
    var nameInput = form.elements['name'];

    if (nameInput) {
      // Check if the input field exists before accessing its value
      var name = nameInput.value;
      alert('You entered: ' + name);
    } else {
      alert('Input field not found.');
    }

    const apiUrl = 'http://localhost:5000/json-example';

    // Make the API call using the fetch API
    fetch(apiUrl + '/?url=' + name)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // console.log(response.json());
        return response.json();
      })
      .then((responseData) => {
        // Update the state with the API data
        // setData(responseData);
        setReturnText(`${responseData['content']}`);
        console.log(responseData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });


    return false;
  }


  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:5000/json-example/?url=https://www.geeksforgeeks.org/python-programming-language/';

    // Make the API call using the fetch API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // console.log(response.json());
        return response.json();
      })
      .then((responseData) => {
        // Update the state with the API data
        setReturnText(`${responseData['content']}`);
        console.log(responseData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array to run this effect only once


  return (
    <div className="App container">
      <div className="d-flex flex-column justify-content-center">

        <form className="" id="urlForm">
          <div className="form-group">
            <label htmlFor="URLToScrap">Url to scrap</label>
            <input type="email" name="name" className="form-control" id="URLToScrap" placeholder="URL" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={getContent}>Submit</button>
        </form>

        <div className="">
          Display text
          <p>{returnText}</p>
        </div>
      </div>

    </div>
  );
}

export default App;

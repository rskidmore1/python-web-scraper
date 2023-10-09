import React, { useState, useEffect } from 'react';
import axios from 'axios';




function App() {

  const [data, setData] = useState();
  const [urlData, setUrlData] = useState();



  // useEffect(() => {
  //   fetch("http://localhost:5000/json-example", {
  //     method: "GET", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then(response => {
  //     //handle response
  //     console.log(response);
  //   });


  // TODO: make POST api call function here with url as parameter
  // . store to value into state

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
        console.log(responseData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });

    // console.log(urlData);
    // useEffect(() => {
    //   fetch(URL, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json', // Set the appropriate content type
    //     },
    //     body: JSON.stringify(data), // Convert the data to JSON
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json(); // Parse the response JSON
    //     })
    //     .then((responseData) => {
    //       // Handle the response data here
    //       console.log(responseData);
    //     })
    //     .catch((error) => {
    //       // Handle errors here
    //       console.error('There was a problem with the POST request:', error);
    //     });
    // }, []); // Empty dependency array to run this effect only once


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
        // setData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array to run this effect only once

  // WORK ON THIS CODE
  // }, []);
  // useEffect(() => {
  //   fetch('http://localhost:5000/json-example', {
  //     method: 'get',
  //     mode: 'no-cors',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     },
  //   })
  //     .then(response => {
  //       //handle response
  //       // response.json()
  //       console.log(response);
  //     })
  //     // .then(response => {
  //     //   //handle data
  //     //   console.log(response);
  //     // })
  //     .catch(error => {
  //       //handle error
  //     });
  // });

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Replace this URL with your API endpoint
  //   const apiUrl = 'http://localhost:5000/json-example';
  //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       // setData(response.data);
  //       // setLoading(false);
  //       console.log(data)
  //     })
  //     .catch((err) => {
  //       // setError(err);
  //       // setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

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
        </div>
      </div>

      {/* <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}

    </div>
  );
}

export default App;

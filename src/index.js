import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const url = 'https://jsonplaceholder.typicode.com/users';
//const url = 'http://localhost:8080/actuator/metrics';
//const url = 'http://localhost:8080/points';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {

  async function callFetch(url) {
    await fetch(url
      , {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
      ).then(resp => resp.json()).then(data => console.log(data))
    .catch(err => console.error(err))
  }
  
  function getClaims() {
    console.log("Axios call to backend url: ", urlRef.current.value)
    fetch(urlRef.current.value).then(resp => resp.json()).then(
        data => console.log(data)
      );
  
    // callFetch(urlRef);
  }
  
  function getClaimsCors(url) {
    console.log("Axios call to backend API.")
    fetch(url
      // , {
      //   mode: 'cors',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }
      ).then(resp => resp.json()).then(
        data => console.log(data)
      );
  }

  const urlRef = useRef();

  return (
    <div>
      <Welcome name="Claim Viewer" />
      <input ref={urlRef} name="url"></input>
      <button name="send" onClick={ getClaims }>Get Claims</button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
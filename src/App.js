import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Problem 3</h1>
        <div>
          <h2>Installing the framework</h2>
          <p>
          I installed the Node.js on my laptop. After this I used <code>npx create-react-app my-react-app</code> to create the project.
          Once this was all built I moved on to creating the webpage.
          </p>
        </div>
        <div>
          <h2>Building the page</h2>
          <p>
            After the project was create I navigated into the src folder. Here I modified the <code>App.js</code> to create this webpage. Next
            I modified the <code>App.css</code> file to add some styling. To test that everything was running properly I ran <code>npm start</code> to see what it looked like in my local-host.
          </p>
        </div>
        <div>
          <h2>Problems</h2>
          <p>I didn't run into any difficulties. The reason for this is because I've used React for many other projects, including building my own website: <a href="https://greysb.ca" target="_blank">https://greysb.ca</a>.</p>
        </div>
      </header>
    </div>
  );
}

export default App;

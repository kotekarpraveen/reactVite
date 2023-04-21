import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavigationScroll from './Components/Layout/NavigationScroll';
import Routing from './Routes/Routing';

function App() {
  return (
    <div className="App">
      <NavigationScroll>
        <h1>
          Basic vite project configuration with Redux, Redux toolkit, RTK query.
          <Routing />
        </h1>
      </NavigationScroll>
    </div>
  );
}

export default App;

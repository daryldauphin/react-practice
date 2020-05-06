import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [currentFrame, setCurrentFrame] = useState(0)

  return (


   



    <div className="App">

      <header className="App-header">

       <div className="flex">
       <h1 className="join1 font1">join the list</h1>
       <h1 className="sign1 bold">SIGN UP FOR</h1>
       <h1 className="sign1 bold">The IN-Dex NEWSLETTER</h1>
       <input placeholder="Enter Email Address"></input>
       <button onClick={() => setCurrentFrame(currentFrame + 1)}>NEXT</button>

     
       </div> 
       
       <div className="flex2"> 
        <input type="checkbox" id="scales" name="scales"
         checked>
        </input><label> I agree to receive information from <br /> Interactive Nerd in accordance with the following Privacy Policy.</label>
        
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [currentFrame, setCurrentFrame] = useState(0)

  return (

      <div className="App">
      <header className="App-header">
      {currentFrame === 0 && 
      <div>
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
        </div></div>}
        {currentFrame === 1 && 
      <div>       
      <div className="flex2"> 
      <div className="flex">
       <h1 className="join1 font1">join the list</h1>
       <h1 className="sign1 bold">ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME</h1>
       <div className="name">
        <input id="nameF" placeholder="First Name"></input>
       <input className="nameL" placeholder="Last Name"></input></div>       
       <button onClick={() => setCurrentFrame(currentFrame + 1)}>SIGN UP</button>
       </div>
        </div></div>
        }
        {currentFrame === 2 && 
      <div>               
      <div className="flex3"> 
      <div className="flex">
       <h1 className="join1 font1">congradulations!</h1>
       <h1 className="sign1 bold">Thank you For Signing Up</h1>
         <p>Look out for the latest news on 
your favorite shows.</p>    
       
       </div>
        </div></div>
        }


      </header>
      </div>
      
      
  );
}

export default App;

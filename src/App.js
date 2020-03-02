import React from 'react';
import Basketball from './Basketball';
import Cricket from "./cricket"
import Actor from 
import Celeb from "./actor"
i

function App() {

  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <h1 className="btn-info" className="text-center" >Showing the list of components </h1>
    <ul className="btn-danger" className="text-center">
      <li>1.Basketball</li>
      <li>2.Cricket</li>
      <li>3.Actor</li>
     
    </ul>

    <Basketball id1="23" name1="Kobe" id2="24" name2="Jordan" country1="America" country2="Europe">America  </Basketball>
    <Cricket id1="23" name1="Kobe" id2="24" name2="Jordan" country1="America" country2="Europe"></Cricket>
    <Actor/>
    

    
    </div>
    
      
  );
}

export default App;

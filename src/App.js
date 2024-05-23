import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action, originals, comedyMovies, horrorMovies, romance, documentaries } from "./urls";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originas'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedyMovies} title='Comedy' isSmall/>
     <RowPost url={horrorMovies} title='Horror' isSmall/>
     <RowPost url={romance} title='Romance' isSmall/>
     <RowPost url={documentaries} title='Documentary' isSmall/>
    </div>
  );
}

export default App;

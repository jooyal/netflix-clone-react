import React from 'react'
import './App.css'
// import {NavBar} from '../src/Components/NavBar/NavBar'
import NavBar from '../src/Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { ActionMovies, ComedyMovies, Documentaries, HorrorMovies, Netflix_Originals, RomanceMovies } from './urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title={'Netflix Originals'} url={Netflix_Originals}/>
      <RowPost title={'Action'} isSmall={true} url={ActionMovies}/>
      <RowPost title={'Comedy'} isSmall={true} url={ComedyMovies}/>
      <RowPost title={'Horror'} isSmall={true} url={HorrorMovies}/>
      <RowPost title={'Romance'} isSmall={true} url={RomanceMovies}/>
      <RowPost title={'Documentaries'} isSmall={true} url={Documentaries}/>
    </div>
  );
}

export default App;

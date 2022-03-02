
import './App.css';
import {useState} from 'react';
import {Datafilm} from './Data'
import Listefilm from './component/Listefilm';
import Search from './component/Search'
import Add from './component/Add';
import {Routes,Route} from "react-router-dom";
import Trailer from './component/Trailer' 
function App() {
  const [film,setfilm] = useState(Datafilm)
  const [searchTitle,setsearchTitle]= useState("")
  const [searchRating,setsearchRating] = useState(0)
  
  const handleFilm = (newFilm)=>{
    setfilm([...film,newFilm])
  }
  return (
    <div className="App">
      <Search  setsearchTitle={setsearchTitle} setsearchRating={setsearchRating} />
      
      <Add className='addb' handleFilm={handleFilm} />
      <Routes>
      <Route path="/" element={<Listefilm film={film} searchTitle={searchTitle} searchRating={searchRating}/>}/>
      <Route path='/trailer/:id' element={<Trailer film={film}/>}/>
      </Routes>
    </div>
  );
}

export default App;

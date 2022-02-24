
import './App.css';
import {useState} from 'react';
import {Datafilm} from './Data'
import Listefilm from './component/Listefilm';
import Search from './component/Search'
import Add from './component/Add';
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
      <Listefilm  film={film}   searchTitle={searchTitle} searchRating={searchRating}/>
      <div className='addb'>
      <Add className='addb' handleFilm={handleFilm} />
      </div>
    </div>
  );
}

export default App;

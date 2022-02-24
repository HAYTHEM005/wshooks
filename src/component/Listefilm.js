import React from 'react'
import Cardfilm from './Cardfilm'
const Listefilm = ({film,searchTitle,searchRating}) => {
  console.log(film)
  console.log(searchTitle)
  return(
      <div className='filmListe' >
          {film.filter((fil)=>fil.title.toLowerCase().includes(searchTitle.toLowerCase().trim()) && fil.rating >= searchRating ).map((fil)=>(<Cardfilm fil={fil} key={fil.id} />))}
      </div>
  
  )
}

export default Listefilm
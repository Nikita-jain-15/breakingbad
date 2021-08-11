import React from 'react'

const EpisodeItem = ({ item }) => {
  return (
    <div className='card-1'>
      <div className="card-body">
         <h1  className="title">{item.episode_id}.</h1>
         <h6 className="card-subtitle"> <strong>Season:</strong>{item.season}</h6>
          <ul>
             <p> <strong>Title:</strong> {item.title}</p>
        
             <p> <strong>Air-Date:</strong> {item.air_date}</p>
            
            <p>  <strong>Characters:</strong> {item.characters}</p>
           
          </ul>
        </div>
      </div>
  )
}


export default EpisodeItem
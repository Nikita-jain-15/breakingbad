import React from 'react'
import EpisodeItem from './EpisodeItem'
import Spinner from '../ui/Spinner'

const EpisodeGrid = ({ ep, isLoad }) => {
  return isLoad ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {ep.map((item) =>(
        <EpisodeItem key={item.episode_id} item={item}></EpisodeItem>
      ))}
    </section>
  )
}

export default EpisodeGrid

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/character/CharacterGrid'
import Search from './components/ui/Search'
import Search1 from './components/ui/Search1'
import './App.css'
import EpisodeGrid from './components/episode/EpisodeGrid'

 const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [ep, setep] = useState([])
  const [query1, setQuery1] = useState('')


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

   useEffect(() => {
    const fetchep = async () => {
      setIsLoading(true)
      const result1 = await axios(
        `https://www.breakingbadapi.com/api/episodes?episode=${query1}`
      )

      console.log(result1.data)

      setep(result1.data)
      setIsLoading(false)
    }

    fetchep()
  }, [query1])

  return (
    <div className='container'>
      <Header />
      <h1>CHARACTERS</h1>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
        <div className="episode-style">
      <h1>EPISODES</h1>
      <EpisodeGrid isLoading={isLoading} ep={ep} />
      </div>
    </div>
  )
}

export default App
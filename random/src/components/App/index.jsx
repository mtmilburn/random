import './styles.css'
import { useState, useEffect } from 'react'
import Card from '../Card'
import Gallery from '../Gallery'
import Details from '../DetailsPage'
import NotFoundPage from '../NotFoundPage'
import { Route, Routes, Link} from "react-router-dom";
import HomePage from '../Homepage'


export default function App() {
  const [detailsData, setDetailsData] = useState({})
  const [facts, setFacts] = useState([])
  
  
  // Define an async function to JSONify the query response  
  async function getData(url) {
    const res = await fetch(url)
    const { data } = await res.json()
    setFacts(facts.concat(data))
  }
  
  // Call the async function
  useEffect(() => {
    getData('https://api.api-ninjas.com/v1/facts?limit=15')
  }, [])

if (facts.length > 0) {
  return (
  <>
  <h1 className="text-6xl text-center">Bet you didn't know...🧐</h1>
  <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
 
  {facts.length > 0 && <Details fact={facts[15]} />}
        </div>
  </>
  )
} else {
  return(
    <>
    <h1 className="text-6xl text-center">Bet you didn't know...🤔</h1>
    <p>wait for it..wait for it</p>
    
  <Routes>
        <Route path="/" element={
          <HomePage  
          refreshQueue={getData}

          updateDetails={setDetailsData}
          />}
          />
          <Route path="/DetailsPage/" element={<Details fact={detailsData} />} />
      </Routes>
      </>
          )
}
}
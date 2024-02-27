import './styles.css'
import { useState, useEffect } from 'react'
import Card from '../Card'
import Gallery from '../Gallery'
import Details from '../DetailsPage'
import NotFoundPage from '../NotFoundPage'
import { Route, Routes, Link} from "react-router-dom";
import HomePage from '../Homepage'
import AuthFormPage from '../AuthFormPage'


export default function App() {
  const [detailsData, setDetailsData] = useState({})
  const [facts, setFacts] = useState([])
  const [loginStatus, setLoginStatus] = useState(false)
  
  // Define an async function to JSONify the query response  
  async function getData(url) {
    const res = await fetch(url)
    const { data } = await res.json()
    setFacts(facts.concat(data))
  }
  
  // Call the async function
  useEffect(() => {
    getData('https://api.api-ninjas.com/v1/facts?limit=15')
  
  if (localStorage.getItem('userToken')) {
    setLoginStatus(true)
  }
  }, [])

  // Constionally render the login/singup links and the logout button
  let authLink = <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
  <Link to="/auth/signup">
      <h2 className="text-white md:text-lg sm:text-md">Sign Up</h2>
  </Link>
  <Link to="/auth/login">
      <h2 className="text-white md:text-lg sm:text-md">Log In</h2>
  </Link>
</div>

if (loginStatus) {
  authLink = <button
      className="text-white md:text-lg sm:text-md"
      onClick={() => {
          localStorage.clear()
          setLoginStatus(false)
      }}>
      Log Out
  </button>
}

if (facts.length > 0) {
  return (
  <>
  <h1 className="text-6xl text-center">Bet you didn't know...🧐</h1>
  <nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
    <Link to="/">
        <h1 className="text-yellow-300 font-bold md:text-3xl sm:text-2xl">Home</h1>
    </Link>
    <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
    	<Link to="/auth/signup">
            <h2 className="text-yellow-300 md:text-lg sm:text-md">Sign Up</h2>
	</Link>
	<Link to="/auth/login">
	    <h2 className="text-yellow-300 md:text-lg sm:text-md">Log In</h2>
	</Link>
    </div>
</nav>

        <Routes>
        <Route path="/" element={
          <HomePage  
          refreshQueue={getData}

          updateDetails={setDetailsData}
          />}
          />
          <Route path="/details/" element={<Details fact={detailsData} />} />
      </Routes>
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
          <Route path="/auth/:formType" element={<AuthFormPage />} />
          <Route path="/details/" element={<Details fact={detailsData} />} />
      </Routes>
      </>
          )
}
}
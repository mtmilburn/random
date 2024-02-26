import { useEffect, useState } from "react"
import Gallery from "../Gallery"

export default function HomePage({refreshQueue, updateDetails}){
const api_key = import.meta.env.VITE_API_NINJA_KEY
const [facts, setFacts] = useState([])

async function getData(url) 
    {
        setFacts([])
        const res = await fetch(url,
        {
            method: 'GET',
            headers: 
            {
                'X-Api-Key': 'YYCo1xvCV5RSH6rfuPwpng==vWVeERW6RuKRb4uq',
                'Content-Type': 'application/json',
            },
        })
        const tempdata = await res.json()
        setFacts(facts=>facts.concat(tempdata))
        console.log(tempdata)
       
    }

useEffect(()=>
{
        setFacts([])
        getData('https://api.api-ninjas.com/v1/facts?limit=15')
    
},[]

)
return (
    <>
        <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Welcome to </h1>

        <Gallery 
        facts={facts}
        updateDetails={updateDetails}
        refreshQueue = {refreshQueue} 
        setFacts = {setFacts}/>
    </>
)
}
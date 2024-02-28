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
        getData('https://api.api-ninjas.com/v1/facts?limit=30')
    
},[]

)
return (
    <>
        <div className="flex justify-center items-center">
        <img src="https://media.tenor.com/GX4d4avOLjAAAAAM/fafo-holdmybeer.gif" alt="You Gone Learn Today!" />
       
</div>

        <Gallery 
        facts={facts}
        updateDetails={updateDetails}
        refreshQueue = {refreshQueue} 
        setFacts = {setFacts}/>
    </>
)
}

import { useState, useEffect } from "react"
import surpriseIcon from '../../assets/surprise.svg'
import surpriseFillIcon from '../../assets/surprise-fill.svg'
import './styles.css'
import { Link } from "react-router-dom"
import { postFavorite, deleteFavorite } from "../../../utils/backend"

export default function Card({ fact, updateDetails, favFacts, setFavFacts }) {
    const [favoriteIcon, setFavoriteIcon] = useState(surpriseIcon)

    useEffect(() =>{
        if (favFacts.find(item => item.factId === fact.id)) {
            setFavoriteIcon(surpriseFillIcon)
        }
        
    }, [])


function handleSurprise(){
    console.log(fact)
    if (favoriteIcon === surpriseIcon) {
        const favoriteFact = {
            factId: fact.fact
        }
        console.log(favoriteFact)
        postFavorite(favoriteFact)
        setFavFacts(favFacts => favFacts.concat(favoriteFact))
        setFavoriteIcon(surpriseFillIcon)

    } else {
        console.log(fact.factId)
        deleteFavorite(fact.factId)
        
        setFavFacts(favFacts => {
            const newFavFacts = favFacts.filter(fav => fav.factId !== fact.factId)
            return newFavFacts
        });
    }
}

    return (
        <figure className="relative mb-4 break-inside-avoid-column border-2 border-[#fcd34d] rounded-xl bg-[#93c5fd] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <Link to={"/details/" + fact.fact} onClick={() => updateDetails(fact)} >
            <div className="card-overlay absolute cursor-pointer w-full flex items-center justify-center bg-black rounded-t-lg z-10">
            </div>
                <h1 className="text-lg truncate">{fact.fact ? fact.fact : fact.factId}</h1>
            </Link>
            
            <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center">
                <img 
                onClick={handleSurprise}
                src={favoriteIcon} className="cursor-pointer hover:transform hover:scale-110 transition-all duration-200 ease-in-out" />
            </figcaption>
        </figure>
    )
}

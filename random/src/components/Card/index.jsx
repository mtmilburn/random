import surpriseIcon from '../../assets/surprise.svg'
import lampIcon from '../../assets/lamp.svg'
import './styles.css'
import { Link } from "react-router-dom"


export default function Card({ fact, updateDetails }) {
    return (
        <figure className="relative mb-4 break-inside-avoid-column border-2 border-black rounded-xl bg-[#b6c2d4] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <Link to={"/DetailsPage/" + fact.id} onClick={() => updateDetails(fact)}></Link>
            <div className="card-overlay absolute cursor-pointer w-full flex items-center justify-center bg-black rounded-t-lg z-10">
                <img src={lampIcon} className="w-10"></img>
            </div>
            <h2 className="card-image rounded-t-xl min-h-[200px] min-w-full object-cover cursor-pointer">src={fact.url}</h2>
            
            <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center">
                <h1 className="text-lg truncate">{fact}</h1>
                <img src={surpriseIcon} className="cursor-pointer hover:transform hover:scale-110 transition-all duration-200 ease-in-out" />
            </figcaption>
        </figure>
    )
}

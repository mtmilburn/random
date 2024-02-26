import surpriseIcon from '../../assets/surprise.svg'
import './styles.css'
import { Link } from "react-router-dom"


export default function Card({ fact, updateDetails }) {
    return (
        <figure className="relative mb-4 break-inside-avoid-column border-2 border-[#fcd34d] rounded-xl bg-[#93c5fd] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <Link to={"/details/" + fact} onClick={() => updateDetails(fact)} >
            <div className="card-overlay absolute cursor-pointer w-full flex items-center justify-center bg-black rounded-t-lg z-10">
            </div>
            </Link>
            
            <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center">
                <h1 className="text-lg truncate">{fact.fact}</h1>
                <img src={surpriseIcon} className="cursor-pointer hover:transform hover:scale-110 transition-all duration-200 ease-in-out" />
            </figcaption>
        </figure>
    )
}

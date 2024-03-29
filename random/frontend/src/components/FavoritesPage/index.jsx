import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import Card from "../Card"



export default function FavoritesPage({favFacts, setFavFacts, loginStatus, updateDetails }) {
    const navigate = useNavigate()
    useEffect(() =>{
        console.log(favFacts)
        if (!loginStatus) { navigate('/auth/login')}
    }, [])

    if (favFacts.length === 0) {
        return(
            <>
            <h1 className="mt-[40vh] text-center md:text-3xl text-3xl font-bold">You have no favorite facts yet!</h1>
                <h2 className="mt-5 text-center md:text-xl text-lg font-semibold italic">
                    Browse the <Link className="underline cusor-pointer hover:text-gray-200 transition-all ease-in-out duration-300" to="/">Homepage</Link> to find some fun facts
                </h2>
            </>
        )
    }else {
        return (
            <main className="w-4/5 mt-5 mx-auto xl:columns-1 lg:columns-1 md:columns-1">
                {favFacts.map(fact => <Card
                    key={fact.factId}
                    fact={{ ...fact, id: fact.factId, fact:fact.factId }}
                    updateDetails={updateDetails}
                    favFacts={favFacts}
                    setFavFacts={setFavFacts}
                />)}
            </main>
        )
    }

}
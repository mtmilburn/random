import Card from '../Card'


export default function Gallery({ facts, refreshQueue, updateDetails, query, favFacts, setFavFacts}) {
    
    return(
        <>
        <div className='bg-blue-600'>
                <div className="w-4/5 mx-auto xl:columns-3 lg:columns-3 md:columns-2 md:text-xl">
                    {facts.length > 0 ? facts.map(fact => <Card fact={fact} updateDetails={updateDetails} favFacts={favFacts} setFavFacts={setFavFacts}/>) : <h1 className='text-5xl font-extrabold text-yellow-500'>LOADING FACTS...</h1>}
                </div>
            </div>
            </>
    )
}

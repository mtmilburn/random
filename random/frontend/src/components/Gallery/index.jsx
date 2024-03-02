import Card from '../Card'


export default function Gallery({ facts, refreshQueue, updateDetails, query, favFacts, setFavFacts}) {
    
    return(
        <>
        <div className='bg-blue-600'>
                <div className="w-4/5 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
                    {facts.length > 0 ? facts.map(fact => <Card fact={fact} updateDetails={updateDetails} favFacts={favFacts} setFavFacts={setFavFacts}/>) : <p>Your fact is loading...</p>}
                </div>
            </div>
            </>
    )
}

import CommentSection from '../CommentSection'


export default function DetailsPage({ fact }) {
    console.log(fact)
    return (
        <>
        <div className="shadow-2xl font-bold w-3/5 mx-auto min-h-[200px] border-2 border-black bg-blue-300 text-center text-2xl rounded-lg">
            <h1>Fun Fact: </h1>
            <br />
            <p>{fact.fact}</p>
        </div>
        <CommentSection factId={fact.fact} />
        </>

    )
}

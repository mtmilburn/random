import CommentSection from '../CommentSection'


export default function DetailsPage({ fact }) {
    console.log(fact)
    return (
        <>
        <div className="w-4/5 mx-auto min-h-[300px] border-2 border-black bg-blue-300 text-center text-2xl rounded-lg">
            <h1>Fun Fact: </h1>
            <br />
            <p>{fact.fact}</p>
        </div>
        <CommentSection factId={fact.fact} />
        </>

    )
}

export default function Details({ fact }) {
    return (
        <div className="w-4/5 mx-auto min-h-[300px] border-2 border-black rounded-lg">
            <h1>Fun Fact: </h1>
            <br />
            <p>{fact}</p>
        </div>
    )
}

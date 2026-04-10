import { useEffect, useState } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuotes(data)
      })
      .catch((error) => {
        console.log('Error fetching quotes:', error)
      })
  }, [])

  return (
    <div>
    <h2>Quotes Page</h2>

    {quotes.map((quote) => (
      <p className="quote" key={quote.id}>
        {quote.text}
      </p>
    ))}
  </div>
)
}

export default Quotes
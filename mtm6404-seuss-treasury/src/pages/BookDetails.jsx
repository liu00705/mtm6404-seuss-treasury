import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBook(data)
      })
      .catch((error) => {
        console.log('Error fetching book details:', error)
      })
  }, [id])

  if (!book) {
    return <p>Loading...</p>
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
  </div>
  )
}

export default BookDetails
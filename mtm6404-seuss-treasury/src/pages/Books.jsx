import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBooks(data)
      })
      .catch((error) => {
        console.log('Error fetching books:', error)
      })
  }, [])

  return (
      <div>
      <h2>Books Page</h2>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
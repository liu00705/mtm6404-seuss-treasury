import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Books from './pages/Books.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Quotes from './pages/Quotes.jsx'

function App() {
  return (
    <div>
      <h1>Seuss Treasury</h1>
      <Nav />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  )
}

export default App
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  )
}

export default Nav
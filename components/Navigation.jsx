import Link from "next/link"


function Navigation() {
  return (  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" href="/projects" tabIndex="-1" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navigation
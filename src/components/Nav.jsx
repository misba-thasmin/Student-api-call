import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" to="#">
      <img src="https://thumbs.dreamstime.com/b/student-welfare-logo-vector-illustration-art-design-334447298.jpg" alt="Logo" width="50" height="30" class="d-inline-block align-text-right"/>
    </a>

    <Link class="navbar-brand" to="#">Student App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/Add">Add</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/View">View</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav
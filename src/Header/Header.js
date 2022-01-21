import React  from 'react';

function Header () {
   return (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark page-navbar gradient">
    <div className="container">
      <a className="navbar-brand logo" href="d">My CV</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item item">
            <a className="nav-link" href="#work-experience">Work Experience</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   
   )
}

export default Header;
import React from 'react'

const ScoreBoard = ({score}) => {
  return (
<>

   
    <nav className="navbar  navbar-expand-lg " style={{color: 'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">πππππ πππππ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
    <a className="navbar-brand">
πΎππππ:{score}
        </a>
  </div>
</nav>
    </>
  )
}

export default ScoreBoard
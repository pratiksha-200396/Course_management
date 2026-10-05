import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
        
                 <Link className="navbar-brand" to="/">
          <img
            src="https://play-lh.googleusercontent.com/b0Krpp-ZGTjSIlHuReBu5Swj7aVLsU-IA3N6YPiQMbmvLxusvVbdGXlLLZQiPrNI4PjLxfRufGsCrutZo6i-nw=w240-h480-rw"
            alt="EduLearn Logo"
            width="60"
            height="50"
            className="d-inline-block align-text-top"
          />
        </Link>
        
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
        
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                          Home
                        </Link>
                      </li>
        
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
        
                      {/* <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li> */}
        
                      {/* <li className="nav-item">
                      <Link className="nav-link" to="/registration">
                        Registration
                      </Link>
                    </li> */}
        
                      <li className="nav-item">
                        <Link className="nav-link" to="/courses">
                          Courses
                        </Link>
                      </li>

        
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Batch
                        </Link>
        
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/pages/java">
                              Java
                            </Link>
                          </li>
        
                          <li>
                            <Link className="dropdown-item" to="/pages/python">
                              Python
                            </Link>
                          </li>
        
                          <li>
                            <Link className="dropdown-item" to="/pages/reactt">
                              React
                            </Link>
                          </li>
        
                          <li>
                            <Link className="dropdown-item" to="/pages/sql">
                              Sql
                            </Link>
                          </li>
        
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
        
                          <li>
                            <Link className="dropdown-item" to="/something-else">
                              Something else here
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* 
                    <li className="nav-item">
                      <span className="nav-link disabled" aria-disabled="true">
                        Disabled
                      </span>
                    </li> */}
        
                    </ul>
        
                    <div className="ms-auto d-flex gap-2">
        
                      <Link to="/login" className="btn btn-outline-primary">
                        Login
                      </Link>
        
                      <Link to="/registration" className="btn btn-primary">
                        Register
                      </Link>
        
                    </div>
        
                  </div>
                </div>
              </nav>
    </div>
  )
}

export default Header
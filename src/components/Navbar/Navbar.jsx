import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-fluid" id="nav-contents">
          {/* Brand Section */}
          <Link className="navbar-brand" to="/">
            <img className="brand-img" src="/img/brand.jpg" alt="Brand Logo" />
            <h2 className="brand-txt">
              Meedo<span className="records-txt"> Records </span>
            </h2>
          </Link>

          {/* Toggler Button for Collapsible Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/artists">Artists</Link>
              <Link className="nav-link" to="/discover">News & Update</Link>
              <Link className="nav-link" to="/about us">About Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

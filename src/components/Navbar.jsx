import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Profile Pic + Name */}
      <div className="logo-container">
        {/* Ensure profile.jpg is in your 'public' folder */}
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <span className="logo-text">Shyam Jee Rai</span>
      </div>

      {/* Right side: Navigation Links */}
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
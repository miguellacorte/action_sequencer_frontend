import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const togglePlay = () => setIsPlaying(!isPlaying);

  // Close the menu when the location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', x: 50, y: 50, labelPosition: 'top' },
    { path: '/playground', label: 'Playground', x: 50, y: 200, labelPosition: 'bottom' },
    { path: '/about', label: 'About', x: 350, y: 50, labelPosition: 'top' },
    { path: '/participationHistory', label: 'Participation History', x: 200, y: 250, labelPosition: 'bottom' },
  ];

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      {isOpen && (
        <nav className="custom-navbar">
          <svg width="100%" height="100%" viewBox="0 0 400 300">
            <line x1="50" y1="50" x2="50" y2="200" stroke="#ccc" strokeWidth="2" />
            <line x1="50" y1="200" x2="200" y2="250" stroke="#ccc" strokeWidth="2" />
            <line x1="200" y1="250" x2="350" y2="50" stroke="#ccc" strokeWidth="2" />
            {navItems.map((item) => (
              <g key={item.path}>
                <circle
                  cx={item.x}
                  cy={item.y}
                  r="20"
                  fill={location.pathname === item.path ? '#000' : '#ccc'}
                />
                <Link to={item.path}>
                  <text
                    x={item.x}
                    y={item.y + (item.labelPosition === 'bottom' ? 40 : -30)}
                    textAnchor="middle"
                    fill={location.pathname === item.path ? '#000' : '#ccc'}
                    className={`nav-text ${item.labelPosition}`}
                  >
                    {item.label}
                  </text>
                </Link>
              </g>
            ))}
          </svg>
          <div className="play-controls">
            <button onClick={togglePlay}>{isPlaying ? '[PAUSE]' : '[PLAY]'}</button>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;

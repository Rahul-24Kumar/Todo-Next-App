import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: 'flex', padding: '0.75rem', justifyContent: 'space-evenly' }}>
      {/* Left side: Todo APP */}
      <h1 style={{ fontWeight: '600' }}>Todo APP</h1>

      {/* Right side: Navigation links */}
      <ul style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem' }}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

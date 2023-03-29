import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To Do List</h1>
    </header>
  );
}

const headerStyle = {
  background: '#313b3f',
  color: '#fff',
  margin: '0 0 10px 0',
  textAlign: 'center',
  padding: '10px',
  fontSize: '12px',
};

export default Header;

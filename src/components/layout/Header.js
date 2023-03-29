import React from 'react';

function Header() {
  return (
    <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
      <i class="fas fa-check-square me-1"></i>
      <span>To Do List</span>
    </p>  
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

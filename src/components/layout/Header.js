import React from 'react';

function Header() {
  return (
    <div>
      <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
        <i class="fas fa-check-square me-1"></i>
        <span>To Do List</span>
      </p>

      {/* <div class="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
        <input name="toggleTheme" type="radio" class="label label-primary" />
        dark
        <input name="toggleTheme" type="radio" />
        light
      </div> */}
    </div>
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

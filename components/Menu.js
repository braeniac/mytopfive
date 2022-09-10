import React, { useState } from 'react'

function Menu({ setMenu }) {

  const [search, setSearch] = useState('');

  return (
    <div className='flex-col'>

      <div className='p-3'>
        <button
          onClick={() => setMenu(true)}
        >
          <p>Make Your Own Template</p>
        </button>
      </div>

      <hr className="border-t-[0.1px] border-[#9ea6af]" />
    
      <div className='p-3'>
        <button
          onClick={() => setMenu(true)}
        >
          <p>Categories</p>
        </button>
      </div>

      <hr className="border-t-[0.1px] border-[#9ea6af]" />

      <div className='p-3'>
        <button
          onClick={() => setMenu(true)}
        >
          <p>Login</p>
        </button>
      </div>

      <hr className="border-t-[0.1px] border-[#9ea6af]" />

    </div>
  )
}

export default Menu
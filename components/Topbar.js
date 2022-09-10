import React, { useState } from 'react';
import { 
  Bars3Icon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

import { XMarkIcon } from '@heroicons/react/24/solid';

function Topbar({ menu, setMenu }) {

  const [search, setSearch] = useState(''); 
  const [toggle, setToggle] = useState(false); 

  return (
    <div className='flex justify-between bg-black text-white h-16 items-center'>

      <button className='flex space-x-3 ml-10'>
        <div>
          LOGO
        </div>
        <div>
          My Top Five
        </div>     
      </button>


      <div className='space-x-5 hidden md:flex mr-10 items-center'>

        {
          toggle ?
          <input 
            type="text" 
            name="name" 
            placeholder="Search..."
            className='h-8 w-96 pl-2 text-black outline-0 rounded-lg'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 
          : null 
        }

        <button
          onClick={() => !toggle ? setToggle(true) : setToggle(false)}
        >
          <MagnifyingGlassIcon className='h-6 w-6'/>
        </button>

        <button 
          className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-400'
          onClick={() => {
            
          }}
        >
          <p>Make a Template</p>
        </button>

        <button>
          <p>Categories</p>
        </button>

        <button>
          <p>Login</p>
        </button>
      </div> 

      <div className='md:hidden mr-10'>
        <button
          onClick={() => !menu ? setMenu(true) : setMenu(false)}
        >
          { menu ? <Bars3Icon className='h-6 w-6'/> : <XMarkIcon className='h-6 w-6'/> }
        </button>
      </div>   

    </div>
  )
}

export default Topbar
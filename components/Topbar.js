import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import { 
  Bars3Icon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

import { XMarkIcon } from '@heroicons/react/24/solid';

function Topbar({ menu, setMenu }) {

  const [search, setSearch] = useState(''); 
  const [toggle, setToggle] = useState(false); 
  const router = useRouter(); 

  return (
    <div className='flex justify-between bg-black text-white h-16 items-center'>

      <button 
        className='flex space-x-3 ml-10'
        onClick={() => {
          router.push('/');
        }}  
      >
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
            className='h-8 w-96 pl-2 text-black outline-0 rounded-lg '
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
          className='bg-green-500 px-3 py-1 rounded-md hover:bg-green-400'
          onClick={() => {
            router.push('/Template'); 
          }}
        >
          <p>Make a Template</p>
        </button>

        <button
          onClick={() => {
            router.push('/Categories');
          }}
        >
          <p>Categories</p>
        </button>

        <button
          onClick={() => {
            router.push('/Login');
          }}
        >
          <p>Login</p>
        </button>
      </div> 

      <div className='md:hidden mr-8'>
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
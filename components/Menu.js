import React, { useState } from 'react'
import { useRouter } from 'next/router'; 

function Menu({ setMenu }) {

  const [search, setSearch] = useState('');
  const router = useRouter(); 

  return (
    <div className='flex-col'>

      <div className='bg-black p-3 justify-center flex'>
        <input 
            type="text" 
            name="name" 
            placeholder="Search..."
            className='h-8 w-80 pl-2 text-black outline-0 rounded-lg'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 
      </div>

      <div className='p-3 flex justify-center'>
        <button
          onClick={() => {
            setMenu(true)
            router.push('/Template'); 
            
          }}

        >
          <p>Make Your Own Template</p>
        </button>
      </div>

      <hr className="border-t-[0.1px] border-[#9ea6af]" />
     
      <div className='p-3 flex justify-center'>
        <button
          onClick={() => {
            setMenu(true)
            router.push('/Categories'); 
          }}
        >
          <p>Categories</p>
        </button>
      </div>

      <hr className="border-t-[0.1px] border-[#9ea6af]" />

      <div className='p-3 flex justify-center'>
        <button
          onClick={() => {
            setMenu(true)
            router.push('/Login');
          }}
        >
          <p>Login</p>
        </button>
      </div>

      <hr className="border-t-[0.1px] border-[#9ea6af]" />

    </div>
  )
}

export default Menu
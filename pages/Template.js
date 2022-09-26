import { useRouter } from 'next/router';
import React, { useState } from 'react'

function Template() {

  const [search, setSearch] = useState(''); 
  const router = useRouter(); 

  return (
    <div className='space-y-4'>
      <h1 className='font-bold text-4xl text-center mt-3'>My Top Five</h1>
      <p className='text-center'>description of app</p>
      <h1 className='text-center font-bold text-2xl mt-5'>Search if the Template Already Exists:</h1>
      <div className='flex justify-center'>
        <input 
          type="text" 
          placeholder="Template name..."
          className='h-10 w-72 lg:w-96 pl-2 text-black border border-slate-400'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> 
      </div>
      <div className='flex justify-center'>
          <button 
            className='bg-green-500 px-7 py-2 rounded-md hover:bg-green-400'
              onClick={() => {
                router.push('/create/NewTemplate'); 
            }}
          >
            <p>Make Your Own Template</p>
          </button>
      </div>
      
      <div>
        {/* youtube video */}
      </div>
    
      <p className='text-center'>description of the rules</p>
      
    </div>
  )
}

export default Template
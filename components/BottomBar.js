import React from 'react'
import { FireIcon } from '@heroicons/react/24/solid'

function BottomBar() {
  return (
    <>
      <div className='flex justify-center items-end space-x-1'>
        <FireIcon className='h-6 w-6'/>
        <div>
          <p>2022 mytopfive.ca |</p>  
        </div>
        <button>
          <p>Privacy Policy |</p>
        </button>
        <button>
          <p>Terms of Use </p>
        </button>
      </div>
    </>
  )
}

export default BottomBar
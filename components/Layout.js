import React from 'react'

import Topbar from '../components/Topbar'; 
import BottomBar from '../components/BottomBar'; 

function Layout({ children  }) {
  return (
    <>
        <Topbar />
        
        <main>
            { children }
        </main>

        {/* <BottomBar /> */}
    </>
  )
}

export default Layout
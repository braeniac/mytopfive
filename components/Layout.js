import React, { useState } from 'react';

import Topbar from '../components/Topbar'; 
import BottomBar from '../components/BottomBar'; 
import Menu from '../components/Menu'; 

function Layout({ children  }) {

  const [menu, setMenu] = useState(true); 

  return (
    <>
        <Topbar menu={menu} setMenu={setMenu}/>

        { 
          menu ? null : <Menu setMenu={setMenu}/>
        }
        
        <main>
            { children }
        </main>

        {/* <BottomBar /> */}
    </>
  )
}

export default Layout
import React from 'react'
import { SideNav } from './SideNav';

import { ExampleComponent } from 'data-tool-template'
import 'data-tool-template/dist/index.css'

const App = () => {
  return (
    <>
      <SideNav/>
      <div className="main">
        <ExampleComponent text="Create React Library Example 😄" />
      </div>
    </>
  )
}

export default App

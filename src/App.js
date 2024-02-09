import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import HomeTice from './Tic Toc Game/HomeTice/HomeTice'
import PlayTic from './Tic Toc Game/PlayTic/PlayTic'

const App = () => {
  return (
      <>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomeTice/>}/>
             <Route path='/PlayTic' element={<PlayTic/>}/>
          </Routes>
      </BrowserRouter>
      </>
    )
}

export default App

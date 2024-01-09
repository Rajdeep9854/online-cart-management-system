
import './App.css'
import Header from './components/Header'
import {BrowserRouter , Router , Route, Routes} from 'react-router-dom'
import Store from './components/Store'
import Success from './components/Success'
import Cancel from './components/Cancel'

function App() {
  

  return (
    <div>
      <Header  />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success  />} />
          <Route  path='cancel'  element={<Cancel />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
  
}

export default App

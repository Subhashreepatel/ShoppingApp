
import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/navbar'


function App() {

  return (
    <>
      <div className ="w-full min-h-screen bg-black text-white flex flex-col gap-5">
        <div>
          <Navbar/>
          </div>
         <div>
          <HomePage />
          </div>
      </div>
    </>
  )
}

export default App

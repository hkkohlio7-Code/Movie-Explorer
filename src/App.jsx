import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Fotter from './Components/Fotter'
import Movie from './Components/Pages/MoviePage'
import ActorCard from './Components/Pages/ActorPage'
import Castepage from './Components/Pages/Castepage'
import Comments from "./Components/Pages/CommentsPage"

import SearchPage from './Components/Pages/SearchPage'
const App = () => {
  return (
    <div  className="min-h-screen max-w-screen flex flex-col">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path ='/actor/:id' element={<ActorCard/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/actorCard' element={<ActorCard/>}/>
        <Route path='/castepage' element={<Castepage/>}/>
        <Route path='/comments' element={<Comments/>}/>
      </Routes>
       <Fotter/>
    </div>
  )
}

export default App
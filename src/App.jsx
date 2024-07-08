
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Browse from './components/Browse'
import Navbar from './components/Navbar/Navbar'
import SearchPage from './components/SearchPage'
import PlayingVideo from './components/PlayingVideo'
import MiniMenu from './components/Menubar/MiniMenu'
 export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Browse/>
      
    },
    {
      path:"/search",
      element:<SearchPage/>
    },
    {
      path:"/:id",
      element:<PlayingVideo/>
    },]

    
  }
]);
function App() {


  return (
    <>
     <Navbar/>
     {/* <MiniMenu/> */}
     <Outlet/>
    </>
  )
}

export default App



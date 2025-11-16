import {Routes, Route} from 'react-router-dom';
import {Home, Cart} from "../pages";


export function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </>
  )
}

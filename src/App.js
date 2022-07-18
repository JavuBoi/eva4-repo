import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/AddProduct';
import Login from './pages/Login'
import Products from './pages/Products';
import Sales from './pages/Sales'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/sales" element={<Sales isAuth={isAuth} />}></Route>
        <Route path="/products" element={<Products isAuth={isAuth} />}></Route>
        <Route path="/products/add" element={<AddProduct isAuth={isAuth} />}></Route>
      </Routes>
    </div>
  );
}

export default App;

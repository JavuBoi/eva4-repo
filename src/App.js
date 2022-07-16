import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/AddProduct';
import Login from './pages/Login'
import Products from './pages/Products';
import Sales from './pages/Sales'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/add" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;

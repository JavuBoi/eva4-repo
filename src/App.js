import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Sales from './pages/Sales'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
      </Routes>
    </div>
  );
}

export default App;

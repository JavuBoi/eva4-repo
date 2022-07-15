import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Content from './pages/Content'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Content />}></Route>
      </Routes>
    </div>
  );
}

export default App;

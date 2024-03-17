import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Starred from './pages/Starred.jsx';
import MainLayout from './components/MainLayout.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/starred' element={<Starred />}></Route>
        </Route>



        <Route path='*' element={<div>Error 404 Page not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

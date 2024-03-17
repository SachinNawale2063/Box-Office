import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Starred from './pages/Starred.jsx';
import MainLayout from './components/MainLayout.jsx';
import Show from './pages/Show.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/starred' element={<Starred />}></Route>
          </Route>

          <Route path='/show/:showId' element={<Show />}></Route>


          <Route path='*' element={<div>Error 404 Page not found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

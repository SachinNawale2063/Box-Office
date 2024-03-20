import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Starred from './pages/Starred.jsx';
import MainLayout from './components/MainLayout.jsx';
import Show from './pages/Show.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheme } from './Theme.jsx';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/starred' element={<Starred />}></Route>
            </Route>

            <Route path='/show/:showId' element={<Show />}></Route>


            <Route path='*' element={<div>Error 404 Page not found</div>}></Route>
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;

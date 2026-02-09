import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import SearchPage from './pages/searchPage/searchPage';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import ErrorPage from './pages/ErrorPage/ErrorPage';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SearchPage' element={<SearchPage />} />
          <Route path='/Error' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider >
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <>

       <Navbar>
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

       <Footer></Footer>
       </Navbar>
       

    </>
  );
}

export default App;


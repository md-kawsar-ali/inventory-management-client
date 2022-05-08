import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import CarDetails from './components/Pages/CarDetails/CarDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

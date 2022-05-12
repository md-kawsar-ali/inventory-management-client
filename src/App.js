import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import CarDetails from './components/Pages/CarDetails/CarDetails';
import { Toaster } from 'react-hot-toast';
import Manage from './components/Pages/Manage/Manage';
import Edit from './components/Pages/Edit/Edit';
import Add from './components/Pages/Add/Add';
import Registration from './components/Pages/Registration/Registration';
import Login from './components/Pages/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import MyItems from './components/Pages/MyItems/MyItems';
import NotFound from './components/Pages/NotFound/NotFound';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/car/:id" element={
          <RequireAuth>
            <CarDetails />
          </RequireAuth>
        } />
        <Route path="/manage" element={
          <RequireAuth>
            <Manage />
          </RequireAuth>
        } />
        <Route path="/my-items" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path="/edit/:id" element={
          <RequireAuth>
            <Edit />
          </RequireAuth>
        } />
        <Route path="/add" element={
          <RequireAuth>
            <Add />
          </RequireAuth>
        } />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

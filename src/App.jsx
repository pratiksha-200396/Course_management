import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Courses from './Components/Courses';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Student from './Components/Student';
import UpdateStudent from './Components/UpdateStudent';
import Java from './Pages/Java';
import Python from './Pages/Python';
import Reactt from './Pages/Reactt';
import Sql from './Pages/Sql';

function App() {

  return (

    <BrowserRouter>

      {/* Header on every page */}
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/registration" element={<Registration />} />

        <Route path="/courses/*" element={<Courses />} />
{/* //nested vale ahe he dropdowm mdhe dile ahe */}
            <Route path="/pages/java" element={<Java/>} />

        <Route path="/pages/python" element={<Python/>} />

        <Route path="/pages/reactt" element={<Reactt/>} />

        <Route path="/pages/sql" element={<Sql/>} />

        <Route path="/student" element={<Student />} />

        <Route path="/contact" element={<Contact />} />
     <Route path='/updatestudent/:id' element={<UpdateStudent/>}></Route>

      </Routes>

      {/* Footer on every page */}
      <Footer />

    </BrowserRouter>

  );
}

export default App;

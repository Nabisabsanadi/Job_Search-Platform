import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Joblistpage from './pages/Joblistpage';
import Jobdetailspage from './pages/Jobdetailspage';
import Jobcatogorypage from './pages/Jobcatogorypage';
import Testimonialpage from './pages/Testimonialpage';
import Pagenotfound from './pages/Pagenotfound';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route  index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/job-list' element={<Joblistpage/>}/>
            <Route path='/job-detail' element={<Jobdetailspage/>}/>
            <Route path='/category' element={<Jobcatogorypage/>}/>
            <Route path='/testimonial' element={<Testimonialpage/>}/>
            <Route path='/404' element={<Pagenotfound/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

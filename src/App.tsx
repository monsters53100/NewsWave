// import { useState } from 'react'
// import PageNotFound from "./component/PageNotFound.tsx";
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/NavBar';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

import NotFoundPage from './pages/NotFoundPage';
import LoginPage from "./pages/LoginPage.tsx";

// function App() {
  // const [count, setCount] = useState(0)
  //
  // return (
  //   <>
  //     <BrowserRouter>
  //         <nav>
  //             <Link to='/home'>Home</Link>
  //               <Link to='/dashboard'>Dashboard</Link>
  //               <Link to='/login'>Login</Link>
  //             <Link to='/Articoli'>Articoli</Link>
  //         </nav>
  //
  //         <Routes>
  //             <Route path='/home' element={<h1>Home</h1>}/>
  //             <Route path='/dashboard' element={<h1>Dashboard</h1>}/>
  //             <Route path='/login' element={<h1>Login</h1>}/>
  //             <Route path='/Articoli' element={<h1>Articoli</h1>}/>
  //             <Route path='*' element={<PageNotFound/>}/>
  //         </Routes>
  //     </BrowserRouter>
  //   </>



    function App() {
        return (
            <>
                {/* La Navbar rimane fissa in alto in tutte le pagine */}
                <Navbar />

                <div className="main-content" style={{
                     paddingTop: '100px', // Sposta il contenuto sotto la Navbar (che è alta 70px)
                minHeight: '100vh',
                paddingLeft: '20px',
                paddingRight: '20px',
                boxSizing: 'border-box'
                }}>
                    <Routes>

                        <Route path="/" element={<HomePage />} />

                        <Route path="/news/:title" element={<DetailPage />} />


                        {<Route path="/login" element={<LoginPage />} />}


                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </>
        );
    }

export default App

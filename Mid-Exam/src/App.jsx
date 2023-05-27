import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFoud';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* <Route path="/*" element={<Navigate to="/" />} /> //redirecting */}
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

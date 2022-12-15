import { Routes, Route } from 'react-router';

// Write component imports here //

import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';

// Start Router function here //
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/car/:id' element={<Car />} />
        </Routes>
    );
};

export default Router;
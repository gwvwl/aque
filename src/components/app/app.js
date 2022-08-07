
import InputLogin from '../inputLogin/inputLogin';
import Register from '../register/register';
import MainPage from '../mainPages/mainPage';
import NotFound from '../404/404';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './app.css';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<InputLogin />} />
                <Route path='/register' element={<Register />} />
                <Route path='/menu/*' element={<MainPage />} />
            </Routes>
        </Router>
    )
}

export default App;

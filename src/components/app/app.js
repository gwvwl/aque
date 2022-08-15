import AppRouter from '../routes/AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import './app.css';

const App = () => {
    return(
        <Router>
            <AppRouter/>
        </Router>
    )
}

export default App;


import Nav from '../nav/nav';
import Dashboard from './dashboard/dashboard';
import MyPatients from './myPatients/myPatients';
import Medication from './medication/medication';
import Payments from './payments/payments';
import OtherFeatures from './otherFeatures/otherFeatures';
import Publish from './publish/publish';
import History from './history/history';
import Settings from './settings/settings';
import NotFound from '../404/404';

import {Route, Routes} from 'react-router-dom';
import {useAuth} from '../../useHook/use-auth';
import {useNavigate} from 'react-router-dom';
// import useService from '../../useHook/service';
// import {useDispatch} from 'react-redux';
// import { setActivePatients, setPatients} from '../store/slices/activePatientsSlice';
// import {useSelector} from 'react-redux';
// import { useEffect } from 'react';
import './mainPage.css';

const MainPage = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();
    
    return isAuth ? (
        <div className="main-wrapper ">
            <Nav/>
            <Routes>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='my-patients' element={<MyPatients />} />
                <Route path='medication' element={<Medication />} />
                <Route path='payments' element={<Payments />} />
                <Route path='other-features' element={<OtherFeatures />} />
                <Route path='publish' element={<Publish />} />
                <Route path='history' element={<History />} />
                <Route path='settings' element={<Settings />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    ) : (navigate('/'))
}

export default MainPage;

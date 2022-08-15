
import Nav from '../nav/nav';
import Dashboard from './dashboard/dashboard';
import MyPatients from './myPatients/myPatients';
import Medication from './medication/medication';
import Payments from './payments/payments';
import OtherFeatures from './otherFeatures/otherFeatures';
import Publish from './publish/publish';
import History from './history/history';
import Settings from './settings/settings';

import {Route, Routes} from 'react-router-dom';

import './mainPage.css';

const MainPage = () => {
    
    return (
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
            </Routes>
        </div>
    )
}

export default MainPage;

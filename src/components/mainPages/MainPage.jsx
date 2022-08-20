import Nav from '../nav/Nav';
import Dashboard from './dashboard/Dashboard';
import MyPatients from './myPatients/MyPatients';
import Medication from './medication/Medication';
import Payments from './payments/Payments';
import OtherFeatures from './otherFeatures/OtherFeatures';
import Publish from './publish/Publish';
import History from './history/History';
import Settings from './settings/Settings';

import { Route, Routes } from 'react-router-dom';

import './mainPage.css';

const MainPage = () => {
    return (
        <div className='main-wrapper '>
            <Nav />
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
    );
};

export default MainPage;

import { useEffect } from 'react';

import HeaderPatients from './components/HeaderPatients';
import PatieentsForm from './components/PatietntsForm';
import PatientsRight from './components/MainPytients';
import PatietsList from './components/PatientsList';
import Skeleton from '../../skeleton/Skeleton';

import { useDispatch, useSelector } from 'react-redux';
import { getPatientsList } from '../../../store/slices/activePatientsSlice';

import './myPatients.css';

const MyPatients = () => {
    const dispatch = useDispatch();
    const addPat = useSelector((state) => state.add.patients);
    const patient = useSelector((state) => state.activePatients.activePatient.patient);

    useEffect(() => {
        if (!patient) {
            dispatch(getPatientsList());
        }
    }, []);

    return (
        <div className={`mainPage__wrapper  `}>
            <HeaderPatients />

            {!patient ? <Skeleton /> : <PatietsList />}

            {addPat ? <PatieentsForm /> : <PatientsRight />}
        </div>
    );
};

export default MyPatients;

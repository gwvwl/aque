import { useEffect} from 'react';

import HeaderPatients from './components/HeaderPatients';
import PatieentsForm from './components/PatietntsForm';
import PatientsRight from './components/MainPytients';
import PatietsList from './components/PatientsList';
import Skeleton from '../../skeleton/Skeleton';

import {useDispatch, useSelector} from 'react-redux';
import {getPatientsList} from '../../../store/slices/activePatientsSlice';

import './myPatients.css';

const MyPatients = () => {

    const dispatch = useDispatch();
    const addPat = useSelector((state) => state.add.patients);
    const {status} = useSelector(state => state.activePatients);
    const patients = useSelector(state => state.activePatients.patients);

    useEffect( () => {
        if(!patients.length){
            dispatch(getPatientsList());
        }
    },[]);
    
    return(
        <div className={`mainPage__wrapper  `} >
            <HeaderPatients/>

            {status ? <Skeleton/> : <PatietsList/>}

            {addPat ? <PatieentsForm /> : <PatientsRight/>}
        </div>
    )
}

export default MyPatients;


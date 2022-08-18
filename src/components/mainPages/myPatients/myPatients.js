import { useEffect} from 'react';

import {Header} from '../../header/header';
import PatieentsForm from './components/patietntsForm';
import PatientsRight from './components/mainPytients';
import PatietsList from './components/patients-list';
import Skeleton from '../../skeleton/skeleton';

import {useDispatch, useSelector} from 'react-redux';
import {getPatientsList} from '../../../store/slices/activePatientsSlice';

import './myPatients.css';

const MyPatients = () => {

    const {headerPatients} = Header();
    const dispatch = useDispatch();
    const addPat = useSelector((state) => state.add.patients);
    const {status} = useSelector(state => state.activePatients);
    const patients = useSelector(state => state.activePatients.patients);

    useEffect( () => {
        if(!patients.length){
            dispatch(getPatientsList());
            
        }
    },[]);
    
    const header = headerPatients();
    return(
        <div className={`mainPage__wrapper  `} >
            {header}

            {status ? <Skeleton/> : <PatietsList/>}

            {addPat ? <PatieentsForm /> : <PatientsRight/>}
        </div>
    )
}

export default MyPatients;


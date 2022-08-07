import { useEffect} from 'react';


import {Header} from '../../header/header';
import PatieentsForm from './components/patietntsForm';
import PatientsRight from './components/mainPytients';
import PatietsList from './components/patients-list';
import Skeleton from '../../../skeleton/skeleton';
import useService from '../../../useHook/service';

import {useDispatch, useSelector} from 'react-redux';
import { setActivePatients, setPatients} from '../../store/slices/activePatientsSlice';

import './myPatients.css';

const MyPatients = () => {

    const {headerPatients} = Header();
    const addPat = useSelector((state) => state.add.patients);
    const dispatch = useDispatch();
    const doctorId = useSelector(state => state.user.doctor_id);
    const {getPatients, getOnePatient, loading} = useService();
    const patients = useSelector(state => state.activePatients.patients);


    useEffect( () => {
        if(!patients.length){
            getPatients(doctorId).then(result => {
                dispatch(setPatients(result.data));

                getOnePatient(result.data[0].id).then(res => {
                    dispatch(setActivePatients(res.data));
                });
            });
        }
    },[]);

    const updateList = () => {
        getPatients(doctorId).then(result => {
            dispatch(setPatients(result.data));

            getOnePatient(result.data[result.data.length - 1].id).then(res => {
                dispatch(setActivePatients(res.data));
            });
        });
    }
    
    

    const header = headerPatients();
    return(
        <div className={`mainPage__wrapper  `} >
            {header}

            {loading ? <Skeleton/> : <PatietsList /> }

            {addPat ? <PatieentsForm updateList = {updateList}/> : <PatientsRight/>}
        </div>
    )
}

export default MyPatients;


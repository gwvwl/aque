import { useState, useRef, useEffect} from 'react';

import { setActivePatients } from '../../../store/slices/activePatientsSlice';
import {useDispatch, useSelector} from 'react-redux';

import drop from '../../../../img/dropUnDown.svg';
import useService from '../../../../useHook/service';

import '../myPatients.css';


const PatietsList = () => {
    const [dropOn, setDropOn] = useState(false);
    const dispatch = useDispatch();
    const {getOnePatient, __api} = useService();
    const focusAddPatient = useRef([]);
    const activePatients = useSelector(state => state.activePatients.activePatient.patient);
    const patients = useSelector(state => state.activePatients.patients);

    const toggleClass = (id) => {
        if(id === activePatients.id) {
            return 'active'
        }else return 'inActive'
    };
 
    useEffect(() => {
        if(!!focusAddPatient.current.length) {
            focusAddPatient.current[activePatients.id].scrollIntoView({ behavior: "smooth" , block : 'nearest'});
        }
    });
    
    const togleStateClass = (id) => {
        getOnePatient(id).then( res => {
            if(res.errors !== true){
                dispatch(setActivePatients(res.data));
            };
        });
    };

    const OnUnDown = dropOn ? <UnDown/> : null;
    
        return(
        <div className='patiens__wrapper__left'>
            <div className="left__title">
                <span>Patients List</span>
                <div className="dropUnDown" onClick={() => setDropOn(() => !dropOn)}  >
                    <div className='dropUnDown__wrapper' >
                        <div className='dropUnDown__title'>See all</div>
                        <img src={drop} alt=""className={ dropOn ? null : 'rotate__img' }/>
                    </div>
                    {OnUnDown}
                </div>
            </div>

            <div className="wrapper__input__patiens">
                <input type="text" placeholder='Search patient' />
            </div>

            <div className="patients__list">
                {patients.map((patients) => (
                    <div className={`patients__card ${toggleClass(patients.id)}`}
                            key={patients.id}
                            ref={el => focusAddPatient.current[patients.id] = el}
                            onClick={() => togleStateClass(patients.id)}
                            >
                        <img src={`${__api}${patients.patient_photo}`} alt = 'patient' />
                        <span className='patients__card_id'>ID {patients.id}</span>
                        <span>{patients.patient_name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
const UnDown = () => {
    return (
        <div className="unDown">
            <button>See all</button>
            <button>Active Patients</button>
            <button>Inactive Patients</button>
        </div>
    )
}
export default PatietsList;

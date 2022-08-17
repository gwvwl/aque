import {useNavigate} from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {logaut} from '../store/slices/userSlice';
import {ErrorMessageInput, ErrorMessageRegister} from './errorMessage';

import { useHttp } from './useHttp';

const useService = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.token);
    const doctor_id = useSelector(state => state.user.doctor_id);
    const {loading, request, error, clearError} = useHttp();
    // api 
    const __api = 'http://127.0.0.1:8000/';
    // api

// Login ================================================ Login    

    const formLogin = async (body) => {

        let res = await request(`${__api}api/login`, 'POST', JSON.stringify(body))
            .then(result => {
                if(result.data) { 
                    return(
                        dispatch(setUser({
                            email: result.data.user.email,
                            id: result.data.doctor.id,
                            doctor_id: result.data.doctor.id,
                            token: result.data.token,
                            name: result.data.user.name,
                            position: result.data.doctor.position,
                        }))
                        )} 
            })
        return res;
    }
// Login ================================================ Login 

// Register ================================================ Register 

    const formRegister = async (body) => {

        let res = await request(`${__api}api/register`, 'POST', JSON.stringify(body))
            .then(result => {
                if(result.data) {
                    return(
                        navigate('/')
                    )
                } 
            })
        return res;
    }
   
// Register ================================================ Register 

// Logaut ================================================ Logaut
    const formLogout = async () => {
        let res = await request(`${__api}api/logout`, 'POST', token)
            .then(result => {
                if(result) {
                    return(
                        dispatch(logaut())
                    )
                } 
            })
        return res;
    }
// Logaut ================================================ Logaut
 
// RegistetPatient ================================================ RegistetPatient
    const RegistetPatient = async (body) => {

        let res = await request(`${__api}api/patient`, 'POST', JSON.stringify(body), token);

        return res;

    }
// RegistetPatient ================================================ RegistetPatient

    const getPatients = async (doctorId) => {

        let res = await request(`${__api}api/patient?doctor_id=${doctorId}`, 'GET', null, token );
        
        return res;
    }

    const getOnePatient = async (patientId) => {

        let res = await request(`${__api}api/patient/${patientId}?doctor_id=${doctor_id}`, 'GET', null, token );

        return res;
    }

    return {formLogin, 
            formRegister, 
            formLogout, 
            getOnePatient, 
            RegistetPatient, 
            getPatients,
            error, 
            loading,
            ErrorMessageInput,
            clearError,
            ErrorMessageRegister,
            __api};
} 
export default useService;  

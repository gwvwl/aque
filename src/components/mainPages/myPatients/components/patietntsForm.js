
import { Formik, Field, Form, ErrorMessage} from 'formik';
// import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { setPatients} from '../../../store/slices/activePatientsSlice';
import '../myPatients.css';
import useService from '../../../../useHook/service';


const PatieentsForm = ({updateList}) => {
    const dispatch = useDispatch();
    const {RegistetPatient, ErrorMessageRegister, error} = useService();

    const Submit = async (e) =>{
        if(!e.errors){
            updateList();
        }
    };

    
    return(
        <Formik
            initialValues = {{
                patient_name: '',
                address: '',
                birth_date:'',
                birth_place: '',
                nationality: '',
                phone: '',
                email: '',
                // patient_photo: '',
                insurance_company: '',
                insurance_number: '',
                occupation: '',
                martial_status: '',
                emergency_contact:'',
                emergencyContactPhone: '',
                loremIpsum: '',
                infectiousDiseases: '',
                coConsumption: '',
                agressive:'', 
                doctorNote: '',
                patient_type: '',
            }}
            // validationSchema = {Yup.object({

            //     })}
             onSubmit = {body => RegistetPatient(body).then(res => Submit(res))}
            >
            <Form className='patiens__wrapper__form'>
                {error && <ErrorMessageRegister/>}
                <span className='addPatients__title'>Add Patient</span>
                <div className='addPatients__form'>
                    <div className="addPatients__photo">
                        <label htmlFor="photo">
                            {/* <Field 
                                className="patieent__imput" 
                                type="file" 
                                id='photo'
                                name='patient_photo'/> */}
                        </label>
                        <div>
                            {/* <span>ID 0001</span> */}
                            <Field name="privateCash" className='form__select' as="select">
                                <option value="tru">Active Patient</option>
                                <option value="inactive">Inactive Patient</option>
                            </Field>
                        </div>
                    </div>
                    <div className='addPatients__form__cardX2'>
                        <label htmlFor='name' >Name (Last, First, Middle) </label>
                        <ErrorMessage name='patient_name' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='name'
                            name='patient_name'/>
                    </div>
                    <div className='addPatients__form__cardX2'>
                        <label htmlFor='adress' >Adress</label>
                        <ErrorMessage name='address' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='adress'
                            placeholder="adress" 
                            name='address'/>
                    </div>
                </div>


                <div className='addPatients__form'>
                    <div className='addPatients__form__cardX5'>
                        <label htmlFor='dateOfBirth' >Date of  birth</label>
                        <ErrorMessage name='birth_date' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text"  
                            id='dateOfBirth'
                            name='birth_date'/>
                    </div>
                    <div className='addPatients__form__cardX5'>
                        <label htmlFor='placeOfBirth' >Place of birth</label>
                        <ErrorMessage name='birth_place' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='placeOfBirth'
                            name='birth_place'/>
                    </div>
                    <div className='addPatients__form__cardX5'>
                        <label htmlFor='nationality' >Nationality</label>
                        <ErrorMessage name='nationality' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='nationality'
                            name='nationality'/>
                    </div>
                    <div className='addPatients__form__cardX5'>
                        <label htmlFor='phone' >Phone</label>
                        <ErrorMessage name='phone' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='phone'
                            name='phone'/>
                    </div>
                    <div className='addPatients__form__cardX5'>
                        <label htmlFor='email' >E-Mail</label>
                        <ErrorMessage name='email' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='email'
                            name='email'/>
                    </div>
                </div>


                <div className='addPatients__form'>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='privateCash' >Private/Cash</label>
                        <ErrorMessage name='patient_type' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='privateCash'
                            name='patient_type'/>
                    </div>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='healthCompany' >Health Insurance Company</label>
                        <ErrorMessage name='insurance_company' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='healthCompany'
                            name='insurance_company'/>
                    </div>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='healthNumber' >Health Insurance Number</label>
                        <ErrorMessage name='insurance_number' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='healthNumber'
                            name='insurance_number'/>
                    </div>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='occupation' >Occupation</label>
                        <ErrorMessage name='occupation' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='occupation'
                            name='occupation'/>
                    </div>
                </div>


                <div className='addPatients__form'>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='maritalStatus' >Marital Status</label>
                        <ErrorMessage name='maritalStatus' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='maritalStatus'
                            name='martial_status'/>
                    </div>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='emergencyContact' >Emergency Contact</label>
                        <ErrorMessage name='emergency_contact' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='emergencyContact'
                            name='emergency_contact'/>
                    </div>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='emergencyContactPhone' >Emergency Contact/Phone</label>
                        <ErrorMessage name='emergencyContactPhone' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='emergencyContactPhone'
                            name='emergencyContactPhone'/>
                    </div>
                    <div className='addPatients__form__cardX4'>
                        <label htmlFor='loremIpsum' >Lorem Ipsum</label>
                        <ErrorMessage name='loremIpsum' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='loremIpsum'
                            name='loremIpsum'/>
                    </div>
                </div>


                <div className='addPatients__form'>
                    <div className='addPatients__form__cardX3'>
                        <label htmlFor='infectiousDiseases' >Infectious diseases</label>
                        <ErrorMessage name='infectiousDiseases' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='infectiousDiseases'
                            name='infectiousDiseases'/>
                    </div>
                    <div className='addPatients__form__cardX3'>
                        <label htmlFor='coConsumption' >Co-Consumption</label>
                        <ErrorMessage name='coConsumption' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='coConsumption'
                            name='coConsumption'/>
                    </div>
                    <div className='addPatients__form__cardX3'>
                        <label htmlFor='agressive' >Agressive</label>
                        <ErrorMessage name='agressive' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='agressive'
                            name='agressive'/>
                    </div>
                </div>


                <div className='addPatients__form'>
                    <div className='addPatients__form__cardX1'>
                        <label htmlFor='doctorNote' >Doctor’s Note</label>
                        <ErrorMessage name='doctorNote' className="error"  component='div' />
                        <Field 
                            className="patieent__imput" 
                            type="text" 
                            id='doctorNote'
                            name='doctorNote'/>
                    </div>
                </div>


                <div className='addPatients__form__button'>
                    <button type='submit'
                    // onClick={() => updateList()}
                    >Add Patient</button>
                    <span onClick={() => dispatch(setPatients())}>Cancel</span>
                </div>

            </Form>
        </Formik>
    )
}

export default PatieentsForm;

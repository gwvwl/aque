import { useState} from 'react';
import {useSelector} from 'react-redux';
import Skeleton from '../../../skeleton/Skeleton';
import dropHeader from '../../../../img/dropUnHeader.png';
import { baseURL } from '../../../../constans/constans';

import '../myPatients.css';

const PatientsRight = () => {

    const [dropOnHeader, setDropOnHeader] = useState(false);
    const patient = useSelector(state => state.activePatients.activePatient.patient);
    const OnUnDownHeader = dropOnHeader && <UnDownHeader promo = {patient}/> ;
    const patientVisit = useSelector(state => state.activePatients.activePatient.visits);
    const patientLabs = useSelector(state => state.activePatients.activePatient.labs);

    if(patient)  { 
        return(
        <div className='patiens__wrapper__right'>
            <div className={`patiens__wrapper__header ${dropOnHeader && 'active'}`}>
                <div className='wrapper__drop'>

                <img src={`${baseURL}${patient.patient_photo}`} alt = 'patient' className="patien__header__img"/>

                    <div className="patien__header__promo">
                        <div className="patien__header__promo__drop">
                            <select name="patient_type" className='form__select'>
                                <option value="active">Active Patient</option>
                                <option value="inactive">Inactive Patient</option>
                            </select>
                        </div>
                        <span>ID {patient.id}</span>
                        <span>{patient.patient_name}</span>
                    </div>

                    <div className="patien__header__health">
                        <div className="patien__header__health__company">
                            <span>Health Insurance Company</span>
                            <span>{patient.insurance_company}</span>
                        </div>
                        <div className="patien__header__health__namber">
                            <span>Health Insurance Number</span>
                            <span>{patient.insurance_number}</span>
                        </div>
                    </div>

                    <div className="patien__header__connection">
                        <div className="patien__header__connection__phone">
                            <span>Phone</span>
                            <span>{patient.phone}</span>
                        </div>
                        <div className="patien__header__connection__email">
                            <span>Email</span>
                            <span>{patient.email}</span>
                        </div>
                    </div>

                    <div className="patien__header__icon">
                        <img src="#" alt=""/>
                    </div>

                    <div className="patien__header__edit">
                        <div className="patien__header__edit__top">
                            <img src="#" alt=""/>
                            <img src="#" alt=""/>
                        </div>
                        <div className="patien__header__edit__bottom">
                            <div className="dropUnHeader" onClick={() => setDropOnHeader(!dropOnHeader)}>
                                <button>{dropOnHeader ? 'See less' : 'See more'}</button>
                                <img src={dropHeader} alt=""/>
                            </div>
                        </div>
                    </div>
                    {OnUnDownHeader}
                </div>
            </div>
            
            <div className="main__card">
                <div className="patiens__card__file patiens__card">
                    <div className="card_title">
                        <span className='card_title__file'>Patient File</span>
                        <div>
                            <button>Appointment reminder</button>
                            <button>Notes</button>
                        </div>
                    </div>
                    <div className="patiens__card__file__main">
                        <span>Friday 01/04/2022</span>
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="patiens__card__medication patiens__card">
                    <div className="card_title">
                        <span>Medication</span>
                        <div>
                            <button>Active</button>
                            <button>History</button>
                        </div>
                    </div>
                    <div className="patiens__card__medication__main">
                        <div className='medication__main__medication' >
                            <span>Medication</span>
                        </div>
                        <div className='medication__main__interval' >
                            <span>Time interval</span>
                        </div>
                        <div className='medication__main__method' >
                            <span>Method of dosing </span>
                        </div>
                        <div className='medication__main__amount' >
                            <span>Amount</span>
                        </div>
                    </div>
                </div>

                <div className="patiens__card__visits patiens__card">
                    <div className="card_title">
                        <span>Patient Visits</span>
                        <button className='calendar'></button>
                    </div>
                    <div className="patiens__card__visits__title">
                        <span>Date</span>
                        <span>Dosage</span>
                        <span>Given medication</span>
                    </div>

                    {
                        patientVisit.map((item, i) => {
                            return (
                                <div className="patiens__card__visits__main" key={i}>
                                    <span>01/12/2021</span>
                                    <span>Duis autem vel eum</span>
                                    <span>Duis autem vel eum</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="patiens__card__laborotory patiens__card">
                    <div className="card_title">
                        <span>Laboratory</span>
                        <div>
                            <button>+</button>
                            <button>Over</button>
                            <button>Upcoming</button>
                        </div>
                    </div>
                    <div className="patiens__card__visits__title">
                        <span>Test</span>
                        <span>Date</span>
                        <span>Reason</span>
                    </div>
                    {
                        patientLabs.map((item, i) => (
                            <div className="patiens__card__visits__main" key={i}>
                                <span>{item.lab_test}</span>
                                <span>{item.lab_date}</span>
                                <span>{item.lab_reason}</span>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )  }else {
        return(
            <Skeleton/>
        )
    }
}


const UnDownHeader = (props) => {
    const patient = props.promo;
    return (
        <div className="unDownHeader">
            <div className="promo__patients__header">
                <div>
                    <span>Registration Date</span>
                    <span>{patient.created_at}</span>
                </div>
                <div>
                    <span>Place of birth</span>
                    <span>{patient.birth_place}</span>
                </div>
                <div>
                    <span>Marital Status</span>
                    <span>{patient.martial_status}</span>
                </div>
                <div>
                    <span>Emergency Contact</span>
                    <span> {patient.emergency_contact}</span>
                </div>
                <div className='adress'>
                    <span >Adress</span>
                    <span> {patient.address}</span>
                </div>
                <div>
                    <span>Private/Cash</span>
                    <span>Private patient</span>
                </div>
                <div>
                    <span>Nationality</span>
                    <span>{patient.nationality}</span>
                </div>
                <div>
                    <span>Occupation</span>
                    <span>{patient.occupation}</span>
                </div>
                <div>
                    <span>Emergency Contact/Phone</span>
                    <span>{patient.emergency_contact}</span>
                </div>
            </div>

            <div className="patiens__med">
                <div className="infections">
                    <div className="patiens__med__edid">
                        <img src="#" alt=""/>
                        <img src="#" alt=""/>
                    </div>
                    <div className="infections__title">
                        <img src="#" alt=""/>
                        <span>Infectious diseases</span>
                    </div>
                    <div className="infections__promo">
                        <span>{patient.infection_diseases}</span>
                    </div>
                </div>

                <div className="consumption">
                    <div className="patiens__med__edid">
                        <img src="#" alt=""/>
                        <img src="#" alt=""/>
                    </div>
                    <div className="infections__title">
                        <img src="#" alt=""/>
                        <span>Infectious diseases</span>
                    </div>
                    <div className="infections__promo">
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                    </div>
                </div>

                <div className="agressive">
                    <div className="patiens__med__edid">
                        <img src="#" alt=""/>
                        <img src="#" alt=""/>
                    </div>
                    <div className="infections__title">
                        <img src="#" alt=""/>
                        <span>Infectious diseases</span>
                    </div>
                    <div className="infections__promo">
                        <span>No</span>
                        <span>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</span>
                    </div>
                </div>
            </div>
            <div className="add__related__medication">
                <button>Add Related-Medication</button>
            </div>   
        </div>
    )
}

export default PatientsRight;


import {Header} from '../../header/header';
import MedicationList from './components/medicationList';
import MedicationMain from './components/medicationMain';
import './medication.css';

const Medication = () => {
    const {headerMedication} = Header();

    
    const header = headerMedication();
    return(
        <div className="mainPage__wrapper">
            {header}
            <MedicationList/>
            <MedicationMain/>
        </div>
        
    )
}

export default Medication;
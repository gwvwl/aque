import HeaderMedication from './components/HeaderMedication';
import MedicationList from './components/MedicationList';
import MedicationMain from './components/MedicationMain';
import './medication.css';

const Medication = () => {
    
    return(
        <div className="mainPage__wrapper">
            <HeaderMedication/>
            <MedicationList/>
            <MedicationMain/>
        </div>
        
    )
}

export default Medication;
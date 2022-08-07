

import '../medication.css';


const MedicationMain = () => {
  
    
    return(
        <div className="medication__wrapper">
            <div className="medication__title">
                <div className='medication__title__left'>
                    <img src="" alt="" />
                    <span>0001</span>
                    <span>Advil</span>
                    <span>Medication Container No. 0031</span>
                </div>
                <div className="medication__title__butons">
                    <button>K</button>
                    <button>M</button>
                </div>
            </div>

            <div className="medication__stock">
                <span>Stock:</span>
                <div className="medication__stock__butons">
                    <button>In house</button>
                    <button>Take away</button>
                </div>
            </div>

            <div className="medication__table">
                <div className="tabble__quantity">
                    <span>Quantity</span>
                </div>
                <div className="tabble__dosage">
                    <span>Dosage</span>
                </div>
                <div className="tabble__arrival">
                    <span>Date of arrival</span>
                </div>
                <div className="tabble__regulatories">
                    <span>Regulatories</span>
                </div>
                <div className="tabble__remaining">
                    <span>Remaining <br /> availability </span>
                </div>
                <div className="tabble__type">
                    <span>Intake Type</span>
                </div>
                <div className="tabble__pick-up">
                    <span>Pick-up</span>
                </div>
            </div>
            <div className="medication__notes">
                <span>Patients:</span>
            </div>
        </div>
    )
}

export default MedicationMain;
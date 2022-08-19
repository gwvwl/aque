import { useState } from 'react';

import drop from '../../../../img/dropUnDown.svg';

import '../medication.css';


const MedicationList = () => {
    const [dropOn, setDropOn] = useState(false);
    
    const OnUnDown = dropOn ? <UnDown/> : null;
    
        return(
        <div className='medication__wrapper__left'>
            <div className="left__title">
                <span>Medication  List</span>
                <div className="dropUnDown" >
                    <div onClick={() => setDropOn(() => !dropOn)} className='dropUnDown__wrapper' >
                        <div className='dropUnDown__title'>See all</div>
                        <img src={drop} alt=""className={ dropOn ? null : 'rotate__img' }/>
                    </div>
                    {OnUnDown}
                </div>
            </div>

            <div className="wrapper__input__patiens">
                    <input type="text" placeholder='Search medication' />
            </div>

            <div className="patients__list">
                    <div className={`patients__card `}
                            >
                        <img src='#' alt=""/>
                        <span className='patients__card_id'>Name</span>
                        <span>Promo</span>
                    </div>
            </div>
        </div>
    )
}
const UnDown = () => {
    return (
        <div className="unDown">
            <button>See all</button>
            <button>Patient related</button>
            <button>Medication container</button>
        </div>
    )
}
export default MedicationList;


import { useState } from 'react';

import drop from '../../../../img/dropUnDown.svg';




const PaymentsList = () => {
    const [dropOn, setDropOn] = useState(false);
    
    const OnUnDown = dropOn ? <UnDown/> : null;
    
        return(
        <div className='medication__wrapper__left'>
            <div className="left__title">
                <span>Payment History</span>
                <div className="dropUnDown" >
                    <div onClick={() => setDropOn(() => !dropOn)} className='dropUnDown__wrapper' >
                        <div className='dropUnDown__title'>See all</div>
                        <img src={drop} alt=""className={ dropOn ? null : 'rotate__img' }/>
                    </div>
                    {OnUnDown}
                </div>
            </div>

            <div className="wrapper__input__patiens">
                    <input type="text" placeholder='Search payment ' />
            </div>

            <div className="patients__list">
                    <div className={`patients__card `}
                            >
                        <img src='#' alt=""/>
                        <span className='patients__card_id'>Payment</span>
                        <span>ID</span>
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
export default PaymentsList;

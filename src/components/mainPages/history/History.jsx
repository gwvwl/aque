
import HeaderHistory from './components/HeaderHistory';

import './history.css';

const History = () => {

    return(
        <div className="mainPage__wrapper">
            <HeaderHistory/>
            <div className='mainPage__left'>
                <span className="mainPage__left__title">Actions performed</span>

                <div className="mainPage__left__title__card-wrapper">
                    <div className="mainPage__left__title__card">
                        <span className='title__card__data'>07 <br/>Apr</span>
                        <span className='title__card__test'>Prescription Refill</span>
                    </div>
                    <div className="mainPage__left__title__card">
                        <span className='title__card__data'>07 <br/>Apr</span>
                        <span className='title__card__test'>Prescription Refill</span>
                    </div>
                </div>
            </div>
            <div className="payments__wrapper">
                <div className="payments__title">
                    <span>Action details</span>
                </div>
            </div>
        </div>
        
    )
}

export default History;


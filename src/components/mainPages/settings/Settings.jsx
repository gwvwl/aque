
import HeaderSettings from './components/HeaderSettings';

import './settings.css';

const Settings = () => {
  
    return(
        <div className="mainPage__wrapper">
            <HeaderSettings/>
            <div className='medication__wrapper__left'>
                <div className="patients__list">
                    <div className='patients__card'>
                        <span className='patients__card_id'>Seting</span>
                        <span>001</span>
                    </div>
                </div>
            </div>

            <div className="payments__wrapper">
                <div className="payments__title">
                    <span>Detailed Settings</span>
                </div>
            </div>
        </div>
        
    )
}

export default Settings;


import {Header} from '../../header/header';

import './settings.css';

const Settings = () => {
    const {headerSettings} = Header();

    const header = headerSettings();
    return(
        <div className="mainPage__wrapper">
            {header}
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
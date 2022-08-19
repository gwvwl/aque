
import logo from '../../img/Logo-hed.png';
import './header.css';

export const HeaderRight = () => {
    return(
        <div>
            <div className="header__right">
                <div className="header__right__logo"><img src={logo} alt="logo"/></div>
            </div>
            <div className="header__right__promo">
                <span className='header__right__promo__data'>Friday 01 April 2022</span>
                <span className='header__right__promo__time'>08:00</span>
                <span className='header__right__promo__sity'>Munich</span>
                <span className='header__right__promo__weather'>5°C</span>
            </div>
        </div>
    )
}
export const HeaderInput = () => {
    return(
        <div className='header__input-wrapper'>
             <input type="text" 
                className='header__input'
                placeholder='Search' />
        </div>
           
    )
}

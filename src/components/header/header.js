
import logo from '../../img/Logo-hed.png';
import {ReactComponent as AddButton} from '../../img/addButton.svg';
import './header.css';

import {useDispatch, useSelector} from 'react-redux';

import { setPatients, setMedication, setPayments, setFeatures } from '../../store/slices/addSlice';

export const Header = () => {

    
    const headerRight = () => {
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
    
    const HeaderInput = () => {
        return(
            <div className='header__input-wrapper'>
                 <input type="text" 
                    className='header__input'
                    placeholder='Search' />
            </div>
               
        )
    }

    const userName = useSelector(state => state.user.name);

    const headerDashbordPromo = () => {
        return (
            <div className="header__left_promo">
                <div className='header__left_promo__userName'>
                    <span>Hello, {userName}!</span>
                </div>
                <div className='header__left_promo__UserNotification'>
                    <span>You have 5 new notifications</span>
                </div>
            </div>
        )
    }

    // _________items__________

    const itemsRight = headerRight();
    const itemsInput = HeaderInput();
    const itemsDashboarPromo = headerDashbordPromo();

    // _________items__________


   const headerDashbord = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsDashboarPromo}
                    {itemsInput}
                </div>
                {itemsRight}
            </header>
        )
   }

   const dispatch = useDispatch();
   const {patients, medication, payments, features} = useSelector((state) => state.add);

   const headerPatients = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                    <div  className={`header__left__button  ${patients ? 'active' : null}`}>
                        <AddButton className='header__svg' />
                        <button 
                            className='header__buttonAdd header__button'
                            onClick={() => dispatch(setPatients())}
                            >Add Patient
                        </button>
                    </div>
                </div>
                {itemsRight}
        </header>
        )
    }

    const headerMedication = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                    <div className={`header__left__button  ${medication ? 'active' : null}`}>
                        <AddButton className='header__svg' />
                        <button
                            className='header__buttonAdd header__button'
                            onClick={() => dispatch(setMedication())}
                            >Add Medication</button>
                    </div>
                </div>
                {itemsRight}
        </header>
        )
    }

    const headerPayments = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                    <div className={`header__left__button  ${payments ? 'active' : null}`}>
                        <AddButton className='header__svg'  />
                        <button 
                            className='header__buttonAdd header__button'
                            onClick={() => dispatch(setPayments())}
                            >Add Payments</button>
                    </div>
                </div>
                {itemsRight}
        </header>
        )
    }

    const headerFeatures = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                    <div className={`header__left__button  ${features ? 'active' : null}`}>
                        <AddButton className='header__svg' />
                        <button 
                            className='header__buttonAdd header__button'
                            onClick={() => dispatch(setFeatures())}
                        >Add Features</button>
                    </div>
                </div>
                {itemsRight}
        </header>
        )
    }

    const headerPublish = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                    <div className="header__left__button">
                        <button className='header__button__daily header__button'>Daily inventory </button>
                        <button className='header__button__report header__button'>Monthly report</button>
                        <button className='header__button_custom header__button'>Custom date report</button>
                    </div>
                </div>
                {itemsRight}
        </header>
        )
    }

    const headerHistory = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                    <div className="header__left__button">
                        <button className='header__button__MedHis header__button'>Medication destruction history</button>
                        <button className='header__button__PatHis header__button'>Patient overdue history</button>
                    </div>
                </div>
                {itemsRight}
        </header>
        )
    }

    const headerSettings = () => {
        return(
            <header className="header__wrapper">
                <div className="header__left">
                    {itemsInput}
                </div>
                {itemsRight}
        </header>
        )
    }

    
    return {headerDashbord, headerSettings, headerPublish,
            headerHistory, headerPatients, headerMedication,
            headerPayments, headerFeatures}
}

// export default Header;


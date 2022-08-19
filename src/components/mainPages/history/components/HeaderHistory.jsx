import { HeaderRight, HeaderInput } from "../../../header/Header";

const HeaderHistory = () => {
    return(
        <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
                <div className="header__left__button">
                    <button className='header__button__MedHis header__button'>Medication destruction history</button>
                    <button className='header__button__PatHis header__button'>Patient overdue history</button>
                </div>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderHistory;
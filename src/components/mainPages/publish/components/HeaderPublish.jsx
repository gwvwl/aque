import { HeaderRight, HeaderInput } from "../../../header/Header";

const HeaderPublish = () => {

    return(
         <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
                <div className="header__left__button">
                    <button className='header__button__daily header__button'>Daily inventory </button>
                    <button className='header__button__report header__button'>Monthly report</button>
                    <button className='header__button_custom header__button'>Custom date report</button>
                </div>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderPublish;
import { HeaderRight, HeaderInput } from "../../../header/Header";
import { useSelector } from "react-redux";

const HeaderDashbord = () => {
    const userName = useSelector(state => state.user.name);
    return(
        <header className="header__wrapper">
            <div className="header__left">
                <div className="header__left_promo">
                    <div className='header__left_promo__userName'>
                        <span>Hello, {userName}!</span>
                    </div>
                    <div className='header__left_promo__UserNotification'>
                        <span>You have 5 new notifications</span>
                    </div>
                </div>
                <HeaderInput/>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderDashbord;
import { HeaderRight, HeaderInput } from "../../../header/Header";

const HeaderSettings = () => {

    return(
        <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderSettings;

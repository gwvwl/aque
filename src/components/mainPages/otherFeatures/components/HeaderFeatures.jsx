import { HeaderRight, HeaderInput } from "../../../header/Header";
import {ReactComponent as AddButton} from '../../../../img/addButton.svg';
import {useDispatch, useSelector} from 'react-redux';
import { setFeatures } from "../../../../store/slices/addSlice";

const HeaderFeatures = () => {
    const dispatch = useDispatch();
    const features = useSelector((state) => state.add.features);
    return(
        <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
                <div className={`header__left__button  ${features ? 'active' : null}`}>
                    <AddButton className='header__svg' />
                    <button
                        className='header__buttonAdd header__button'
                        onClick={() => dispatch(setFeatures())}
                        >Add Medication</button>
                </div>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderFeatures;
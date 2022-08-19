import { HeaderRight, HeaderInput } from "../../../header/Header";
import {ReactComponent as AddButton} from '../../../../img/addButton.svg';
import {useDispatch, useSelector} from 'react-redux';
import { setMedication } from "../../../../store/slices/addSlice";

const HeaderMedication = () => {
    const dispatch = useDispatch();
    const medication = useSelector((state) => state.add.medication);
    return(
        <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
                <div className={`header__left__button  ${medication ? 'active' : null}`}>
                    <AddButton className='header__svg' />
                    <button
                        className='header__buttonAdd header__button'
                        onClick={() => dispatch(setMedication())}
                        >Add Medication</button>
                </div>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderMedication;
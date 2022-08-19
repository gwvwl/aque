import { HeaderRight, HeaderInput } from "../../../header/Header";
import {ReactComponent as AddButton} from '../../../../img/addButton.svg';
import {useDispatch, useSelector} from 'react-redux';
import { setPatients } from "../../../../store/slices/addSlice";

const HeaderPatients = () => {
    const dispatch = useDispatch();
    const patients = useSelector((state) => state.add.patients);
    return(
        <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
                <div className={`header__left__button  ${patients ? 'active' : null}`}>
                    <AddButton className='header__svg' />
                    <button
                        className='header__buttonAdd header__button'
                        onClick={() => dispatch(setPatients())}
                        >Add Medication</button>
                </div>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderPatients;
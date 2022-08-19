import { HeaderRight, HeaderInput } from "../../../header/Header";
import {ReactComponent as AddButton} from '../../../../img/addButton.svg';
import {useDispatch, useSelector} from 'react-redux';
import { setPayments } from "../../../../store/slices/addSlice";

const HeaderPayments = () => {
    const dispatch = useDispatch();
    const payments = useSelector((state) => state.add.payments);
    return(
        <header className="header__wrapper">
            <div className="header__left">
                <HeaderInput/>
                <div className={`header__left__button  ${payments ? 'active' : null}`}>
                    <AddButton className='header__svg' />
                    <button
                        className='header__buttonAdd header__button'
                        onClick={() => dispatch(setPayments())}
                        >Add Medication</button>
                </div>
            </div>
            <HeaderRight/>
        </header>
    )
}
export default HeaderPayments;
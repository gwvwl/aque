
import {Header} from '../../header/header';
import PaymentsList from './components/paymentsList';
import PaymentsMain from './components/paymentsMain';
import './payments.css';

const Payments = () => {
    const {headerPayments} = Header();

    const header = headerPayments();
    return(
        <div className="mainPage__wrapper">
            {header}
            <PaymentsList/>
            <PaymentsMain/>
        </div>
        
    )
}

export default Payments;
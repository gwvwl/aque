import HeaderPayments from './components/HeaderPayments';
import PaymentsList from './components/PaymentsList';
import PaymentsMain from './components/PaymentsMain';
import './payments.css';

const Payments = () => {
    return (
        <div className='mainPage__wrapper'>
            <HeaderPayments />
            <PaymentsList />
            <PaymentsMain />
        </div>
    );
};

export default Payments;

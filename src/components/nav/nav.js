
import {NavLink, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { setAdd} from '../../store/slices/addSlice';
import { logAut } from '../../store/slices/userSlice';

import img from './circle.png';
import './nav.css';

const Nav = () => {
        const dispatch = useDispatch();
        const userName = useSelector(state => state.user.name);

    return(
        <div className="nav-wrapper" >
            <div className="nav">
                <div className="nav__user">
                    <img src={img} alt="" className='nav__user__img'/>
                    <span className="nav__user__name">{userName}</span>
                </div>
                <div className="nav__action" onClick={() => dispatch(setAdd())}>
                        <div>
                                <NavLink to='dashboard'
                                        className='nav__action__link dashboard'>Dashboard</NavLink>
                                <NavLink to='my-patients' 
                                        className='nav__action__link myPatients'>My patients</NavLink>
                                <NavLink to='medication' 
                                        className='nav__action__link medication'>Medication</NavLink>
                                <NavLink to='payments' 
                                        className='nav__action__link payments'>Payments</NavLink>
                                <NavLink to='other-features' 
                                        className='nav__action__link otherFeatures'>Other features</NavLink>
                                <NavLink to='publish' 
                                        className='nav__action__link publish'>Publish</NavLink>
                                <NavLink to='history'  
                                        className='nav__action__link history'>History</NavLink>
                                <NavLink to='settings' 
                                        className='nav__action__link settings'>Settings</NavLink>
                        </div>
                        <div>
                                <button  
                                        onClick={() => {dispatch(logAut())}}
                                        className='nav__action__link logout'>Logout</button>
                        </div>
                       
                </div>
            </div>
        </div>
    )
}

export default Nav;



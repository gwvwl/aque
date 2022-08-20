import { useState } from 'react';
import HeaderDashbord from './components/HeaderDashbord';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const [tab, setTab] = useState(false);

    return (
        <div className='mainPage__wrapper'>
            <HeaderDashbord />
            <div className='mainPage__right main__one'>
                <div className='mainPage__right__tabs'>
                    <div className='mainPage__right__tabs__left'>
                        <span className='title__tabs__card title__tabs__card__before'>Today’s expecting patients</span>

                        <div className='tabs__card__wrapper' onClick={() => setTab((tab) => !tab)}>
                            <div className='tabs__card'>
                                <img src='#' alt='' className='tabs__card__userPhoto' />
                                <span>ID</span>
                                <span className='tabs__card__userName'>Schmidt Ana</span>
                            </div>
                        </div>
                    </div>
                    <div className='mainPage__right__tabs__right'>
                        <div className='title__tabs__card'>
                            <span>Notifications</span>
                            <span>4</span>
                        </div>

                        <div className='tabs__card__wrapper' onClick={() => setTab(false)}>
                            <div className='tabs__card'>
                                <img src='#' alt='' />
                                <span className='tabs__card__notific'>Lorem ipsum dolor sit amet</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tabs__action'>{tab ? <TabsActionLeft /> : <TabsActionRight />}</div>
            </div>
        </div>
    );
};

const TabsActionLeft = () => {
    return (
        <div className='tabs__action__left'>
            <div className='tabs__action__left__user'>
                <div className='tabs__action__users__title'>
                    <div className='tabs__card'>
                        <img src='#' alt='' className='tabs__card__userPhoto' />
                        <span>ID</span>
                        <span className='tabs__card__userName'>Schmidt Ana</span>
                    </div>
                </div>
                <div className='action__users__button'>
                    <button>Give dose of substitution</button>
                    <NavLink to='/menu/my-patients' className='action__users__links'>
                        Go to Patient Profil
                    </NavLink>
                </div>
            </div>
            <div className='action__users__promo'>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tempora delectus, rem quam mollitia
                    enim consectetur ad quas ut dolorem blanditiis dolore optio explicabo, labore perspiciatis cumque
                    deserunt fugit. Labore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, placeat
                    deserunt cum laborum id accusantium dolore quod deleniti labore obcaecati laudantium autem unde!
                    Aperiam, saepe. Laboriosam consectetur perspiciatis dolorum qui! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Voluptatibus, repellat est. Minus rem dolorum numquam nulla delectus
                    odit quos earum iste? Nemo ratione beatae, expedita ipsum eveniet cumque consequatur ea!
                </span>
            </div>
        </div>
    );
};

const TabsActionRight = () => {
    return (
        <div className='tabs__action__right'>
            <span className='tabs__action__right__UsersName'>Lorem ipsum dolor sit amet</span>
            <span className='tabs__action__right__list'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum, saepe voluptatibus, nemo odio
                ullam quisquam atque cum ad incidunt deleniti hic! Vero labore similique cumque. Laborum, odit
                harum.Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, assumenda, accusantium
                unde rem maiores vero molestiae nihil ad veniam ea blanditiis! Corrupti suscipit nemo dignissimos ad id
                voluptatibus, maiores asperiores.
            </span>
            <div className='tabs__action__right__button'>
                <div className='action__right__links'>
                    <NavLink to='/menu/medication'>Go to Medication</NavLink>
                    <NavLink to='/menu/my-patients'>Go to My Patients</NavLink>
                </div>
                <button>Mark as done</button>
            </div>
        </div>
    );
};

export default Dashboard;

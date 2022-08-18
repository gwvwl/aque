
import { Formik, Field, Form, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/slices/userSlice';
import { ErrorMessageInput } from '../../useHook/errorMessage';
import logo from '../../img/Logo.png';
import unbenannt from '../../img/Unbenannt.png';
import './inputLogin.css';

const InputLogin = () => {
    const status = useSelector(state => state.user.status);
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues = {{
                email: '',
                password: '',
                // remember: false,

            }}
            validationSchema = {Yup.object({
                password: Yup.string()
                        .required('Обязательное поле!'),
                email: Yup.string()
                        .email('Неправильный email адрес')
                        .required('Обязательное поле!'),

                })}
            onSubmit = {body => dispatch(signIn(body))}
           >
            <div className="wrapper wrapper__login">
                <div className="login__wrapper-left">
                    <div className="logo">
                        <img src={logo} alt="#"/>
                    </div>
                    <div className="form__login">
                        <Form >
                            {status && <ErrorMessageInput/>}
                            <ErrorMessage name='email' className="error"  component='div' />
                            <Field 
                                className="login__form__input" 
                                type="text" 
                                placeholder="Enter email or username" 
                                name='email'/>

                            <ErrorMessage name='password' className="error"  component='div' />
                            <Field 
                                className="login__form__input" 
                                type="text" 
                                placeholder="Password" 
                                name='password'/>

                            <div className="wrapper__login__title">
                                <div>
                                    <Field 
                                        type="checkbox" 
                                        name="remember"
                                        id = 'remember'
                                    />
                                    <label htmlFor='remember' className='login__checkbox__promo'>Remember me next time</label>
                                </div>
                                
                                <button className="login__password__fargor">Forgor Password?</button>
                            </div>
                        
                            <button type='submit' className='button'>Login</button>
                            
                        </Form>
                        <Link to='/register'  className='login__create'>Create an account</Link>
    
                    </div>
                </div>
                <div className="login__wrapper-right">
                    <img src={unbenannt} alt="#"/>  
                </div>
            </div>
        </Formik>

    )
}

export default InputLogin;


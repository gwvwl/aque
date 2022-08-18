
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { signUp } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import unbenannt from '../../img/Unbenannt.png';
import logo from '../../img/Logo.png';
import { ErrorMessageRegister } from '../../useHook/errorMessage';
import './register.css';

const Register = () => {
    const status = useSelector(state => state.user.register);
    const dispatch = useDispatch();

    return(
        <Formik
            initialValues = {{
                first_name: '',
                last_name: '',
                email:'',
                password: '',
                password_confirmation: '',

            }}
            validationSchema = {Yup.object({
                first_name: Yup.string()
                        .min(2, 'Минимум 2 символа для заполнения')
                        .required('Обязательное поле!'),
                last_name:Yup.string()
                        .min(2, 'Минимум 2 символа для заполнения')
                        .required('Обязательное поле!'),
                email: Yup.string()
                        .email('Неправильный email адрес')
                        .required('Обязательное поле!'),
                password: Yup.string()
                        .required('Обязательное поле!') 
                        .min(8, 'Минимум 8 символов!'),
                        // .matches(
                        //     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
                        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                        //   )
                password_confirmation: Yup.string()
                        .required()
                        .oneOf([Yup.ref("password"), null], "Парали не совпадают")
                      

                })}
             onSubmit = {body => dispatch(signUp(body))}
            >
            
            <div className="wrapper__create">
                <Form>
                    <div className="logo">
                      <img src={logo} alt="#"/>
                    </div>
                    <span className='create_promo'>Create account</span>
                    {status && <ErrorMessageRegister/>}
                    <ErrorMessage name='first_name' className="error"  component='div' />
                    <Field 
                        className="register__input" 
                        type="text" 
                        placeholder="First name" 
                        name='first_name'/>

                    <ErrorMessage name='last_name' className="error"  component='div' />
                    <Field 
                        className="register__input" 
                        type="text" 
                        placeholder="Last name" 
                        name='last_name'/>

                    <ErrorMessage name='email' className="error"  component='div' />
                    <Field 
                        className="register__input" 
                        type="text" 
                        placeholder="email" 
                        name='email'/>
                    
                    <ErrorMessage name='password' className="error"  component='div' />
                    <Field 
                        className="register__input" 
                        type="text" 
                        placeholder="password" 
                        name='password'/>

                    <ErrorMessage name='password_confirmation' className="error"  component='div' />
                    <Field 
                        className="register__input" 
                        type="text" 
                        placeholder="password confirmation" 
                        name='password_confirmation'/>
                    
                    <button type='subbmit' className='button'>Create account</button>
                </Form>
                <div className="login__wrapper-right">
                    <img src={unbenannt} alt="#"/>  
                </div>
            </div>
        </Formik>
    )
}

export default Register;

import React from 'react';
import { Task } from '../../../model/task.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Taskform = () => {

    let task = new Task();

    const initialValues = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'Name greater than 2 characters')
                .max(12, 'Name less than 13 characters')
                .required('Name is required'),
            lastname: Yup.string()
                .min(3, 'Name greater than 2 characters')
                .max(25, 'Name less than 26 characters')
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password greater than 7 characters')
                .max(12, 'Password less than 13 characters')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Passwords must match!'
                    )
                }).required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div >
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}

                className='d-flex justify-content-center align-items-center mb-4'
            >

            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form className='form-outline flex-fill'>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name" placeholder="Name"  className='form-control form-control-lg'/>
                        
                        {/* Name Errors */}
                        {
                            errors.name && touched.name && 
                            (
                                <ErrorMessage name="name" component='div' className='error'></ErrorMessage>
                            )
                        }

                        <label htmlFor="lastname">Last name</label>
                        <Field id="lastname" type="text" name="lastname" placeholder="Last name"  className='form-control form-control-lg'/>
                        
                        {/*  Last name Errors */}
                        {
                            errors.lastname && touched.lastname && 
                            (
                                <ErrorMessage name="lastname" component='div' className='error'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com"  className='form-control form-control-lg'/>

                        {/* Email Errors */}
                        {
                            errors.email && touched.email && 
                            (
                                <ErrorMessage name="email" component='div' className='error'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="xxxxxxxx"
                            type='password'
                            className='form-control form-control-lg'
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password && 
                            (
                                <ErrorMessage name="password" component='div' className='error'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Confirm password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="xxxxxxxx"
                            type='password'
                            className='form-control form-control-lg'
                        />
                        {/* Confirm Password Errors */}
                        {
                            errors.confirm && touched.confirm && 
                            (
                                <ErrorMessage name="confirm" component='div' className='error'></ErrorMessage>
                            )
                        }

                        <button type="submit" className='btn btn-success btn-lg ms-2' style={{marginTop:'15px'}}>Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>): null}

                    </Form>
                )
            }

            </Formik>
        </div>
    );
}

export default Taskform;

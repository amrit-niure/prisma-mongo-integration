'use client'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { AtSign, Lock, User } from 'lucide-react'
import Button from './Button'
import { signIn } from 'next-auth/react'
const Form = () => {
    const [formType, setFormType] = useState("register")
    const isLogin = formType === "login"
    const isRegister = formType === "register"

    const initialRegisterValues = {
        name: '',
        email: '',
        password: '',
    }
    const initialLoginValues = {
        email: '',
        password: '',
    }
    const registerSchema = yup.object().shape({
        name: yup.string().required("Required"),
        email: yup.string().required("Required"),
        password: yup.string().required("Required"),
    })
    const loginSchema = yup.object().shape({
        email: yup.string().required("Required"),
        password: yup.string().required("Required"),
    })
    const login = async (values, onSubmitProps) => {
        try {
            console.log(values)
            onSubmitProps.resetForm()
        } catch (error) {
            console.log(error)
        }
    }
    const register = async (values, onSubmitProps) => {
        try {
            console.log(values)
            onSubmitProps.resetForm()
        } catch (error) {
            console.log(error)
        }
    }
    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps)
        if (isRegister) await register(values, onSubmitProps)
    }
    return (

        <div className='w-full flex flex-col gap-4 px-5'>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={isRegister ? initialRegisterValues : initialLoginValues}
                validationSchema={isRegister ? registerSchema : loginSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    resetForm,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 dark:text-slate-200'>
                        {isRegister && <div className="flex flex-col gap-2">
                            <div className='flex items-center gap-2 pl-1'>
                                <User size={20} />
                                <label htmlFor="username" className='text-md   '>Name<span className="text-red-500"> *</span></label>
                            </div>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Name'
                                className={`px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md bg-slate-200 text-light-primary dark:text-slate-900 ${touched.name && errors.name ? "border-red-500 border-[1px]" : ""
                                    }`}
                            />
                        </div>}
                        <div className="flex flex-col gap-2">
                            <div className='flex items-center gap-2 pl-1  dark:text-slate-200'>
                                <AtSign size={20} />
                                <label htmlFor="email" className='text-md  '>Email<span className="text-red-500"> *</span></label>
                            </div>
                            <input
                                type="text"
                                id='email'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Email'
                                className={`px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md bg-slate-200 text-light-primary dark:text-slate-900 ${touched.email && errors.email ? "border-red-500 border-[1px]" : ""
                                    }`}
                            />


                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='flex items-center gap-2 pl-1  dark:text-slate-200'>
                                <Lock size={20} />
                                <label htmlFor="password" className='text-md '>Password<span className="text-red-500" > *</span></label>
                            </div>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Password'
                                className={`px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md bg-slate-200 text-light-primary dark:text-slate-900 ${touched.password && errors.password ? "border-red-500 border-[1px]" : ""
                                    }`}
                            />

                        </div>

                        <div className='flex items-center justify-between cursor-pointer mt-5'>
                            <Button type='submit' variant={'outlined'} >{isLogin ? "Log In" : "Sign Up"}</Button>
                            <span className=' text-sm text-purple-900 italic underline dark:text-slate-300'
                                onClick={() => {
                                    isLogin ? setFormType("register") : setFormType('login')
                                }}
                            >{isLogin ? "Register a account !  Sign up" : "Already registered ? Login "}</span>
                        </div>
                    </form>
                )}
            </Formik>
            { isLogin && <div className='flex flex-col gap-4'>
                <div className='w-full px-5 flex items-center gap-4 text-slate-500'><hr className='border-slate-400 w-[50%]' />or<hr className='border-slate-400 w-[50%]' /></div>
                {/* providers  */}

                <Button
                    className="max-w-sm mx-auto w-full"
                    onClick={() => signIn('google')}
                    variant={"outlined"}
                >

                    <svg
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                    </svg>

                    Sign In with Google
                </Button>
            </div>}
        </div>

    )
}

export default Form
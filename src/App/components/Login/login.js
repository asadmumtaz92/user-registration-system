import React, { useRef, useState, Fragment } from 'react'
import styles from './login.module.css'
import Card from '../Card'
import ErrorModal from '../../customModals/ErrorModal'
import MyInput from '../MyInput'

const Login = (props) => {

    // USING useRef Hooks
    // const emailRef = useRef()
    // const passwordRef = useRef()

    // USEING useState Hooks
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const emailHandler = (event) => {
        setEmail(event?.target?.value)
    }
    const validateEmailHandler = () => {
        if (email.includes('@') && email.trim().length > 6) {
            email.includes(' ')
                ? setEmailValid(true)
                : setEmailValid(false)
        }
        else { setEmailValid(true) }
    }
    const passwordHandler = (event) => {
        setPassword(event?.target?.value)
    }
    const validatePasswordHandler = () => {
        if (password.trim().length > 5) {
            setPasswordValid(false)
        }
        else { setPasswordValid(true) }
    }
    const buttonHandler = () => {
        setShowModal(false)
    }

    const loginHandler = () => {
        // USING useRef Hooks
        {
            // console.log(emailRef?.current.value)
            // const email = emailRef?.current.value
            // const password = passwordRef?.current.value
            // if (email?.length > 6 && email.includes('@')) {
            //     email.includes(' ') ? setEmailValid(true) : setEmailValid(false)
            // }
            // else {
            //     setEmailValid(true)
            // }
            // if (password?.length > 5) {
            //     setPasswordValid(false)
            // }
            // else {
            //     setPasswordValid(true)
            // }
        }

        // USEING useState Hooks
        let disabled = (email?.length > 6 && email.includes('@') && password?.length > 5)
            ? email.includes(' ') ? false : true
            : false

        setTimeout(() => {
            if (disabled) {
                props?.checkLoginHandler()
            } else {
                setEmailValid(true); setPasswordValid(true)
                setShowModal(true)
            }    
        }, 500)
    }

    return (
        <Fragment>
            <Card className={styles.login}>
                <h2 className={styles.title}>Welcome Back</h2>
                <MyInput label='Email' type='email' value={email} validator={emailValid} onChange={emailHandler} onBlur={validateEmailHandler} />
                <MyInput label='Password' type='password' value={password} validator={passwordValid} onChange={passwordHandler} onBlur={validatePasswordHandler} />

                <div className={styles.ipBox}>
                    <button className={styles.button} onClick={loginHandler}>login</button>
                </div>
            </Card>

            {/* ERROR MODAL */}
            {showModal
                && <ErrorModal
                    title='An error occured!!'
                    message='Something went wrong...'
                    buttonHandler={buttonHandler}
                />
            }
        </Fragment>
    )
}

export default Login

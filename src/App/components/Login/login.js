import React, { useRef, useState, Fragment } from 'react'
import styles from './login.module.css'
import Card from '../Card'
import ErrorModal from '../../customModals/ErrorModal'

const Login = (props) => {
    // const emailRef = useRef()
    // const passwordRef = useRef()
    const [email,setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const emailHandler = (event) => {
        if (event?.target?.value.includes('@') && event?.target?.value.trim().length > 6) {
            event?.target?.value.includes(' ')
                ? setEmailValid(true)
                : setEmailValid(false)
        }
        else { setEmailValid(true) }
        setEmail(event?.target?.value)
    }
    const passwordHandler = (event) => {
        if (event?.target?.value.trim().length > 5) {
            setPasswordValid(false)
        }
        else { setPasswordValid(true) }
        setPassword(event?.target?.value)
    }
    const buttonHandler = () => {
        setShowModal(false)
    }

    const loginHandler = () => {
        // console.log(emailRef?.current.value)
        // const email = emailRef?.current.value
        // const password = passwordRef?.current.value
        // if(email.includes('@')) {}
        if (email?.length > 6 && email.includes('@')) {
            email.includes(' ') ? setEmailValid(true) : setEmailValid(false)
        }
        else {
            setEmailValid(true)
        }
        if (password?.length > 5) {
            setPasswordValid(false)
        }
        else {
            setPasswordValid(true)
        }

        let disabled = (email?.length > 6 && email.includes('@') && password?.length > 5)
            ? email.includes(' ') ? false : true
            : false

        setTimeout(() => {
            if (disabled) {
                console.log(`Email: ${email} PW: ${password}`)
                props?.checkLoginHandler()
            }
            else {
                setShowModal(true)
                console.log('something went wrong...')
            }
        }, 500);
    }

    return (
        <Fragment>
            {/* ERROR MODAL */}
            {showModal && <ErrorModal
                title='An error occured!!'
                message='Something went wrong...'
                buttonHandler={buttonHandler}
            />}
        
            <Card className={styles.login}>
                <h2>Welcome Back</h2>
                <div className={styles.ipBox}>
                    <label>Email:</label>
                    <input
                        type='email' className={[`${styles.ip} ${emailValid && styles.ipBGError}`]}
                        onChange={emailHandler}
                        // ref={emailRef}
                    />
                </div>

                <div className={styles.ipBox}>
                    <label>Password:</label>
                    <input
                        type='password' className={[`${styles.ip} ${passwordValid && styles.ipBGError}`]}
                        onChange={passwordHandler}
                        // ref={passwordRef}
                    />
                </div>

                <div className={styles.ipBox}>
                    <button className={styles.button} onClick={loginHandler}>login</button>
                </div>
            </Card>
        </Fragment>
    )
}

export default Login

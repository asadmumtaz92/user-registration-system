import React from 'react';
import styles from './index.module.css';
import Header from './../../components/Header/header';
import LoginCom from './../../components/Login/login';

const Login = (props) => {
    return (
        <React.Fragment>
            <Header status='login'/>
            <div className={styles.App}>
                <LoginCom checkLoginHandler={props?.checkLoginHandler} />
            </div>
        </React.Fragment>
    );
}

export default Login;

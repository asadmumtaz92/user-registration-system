import React from 'react';
import styles from './index.module.css';
import Header from './../../components/Header/header';
import Login from './../../components/Login/login';

const App = (props) => {
    return (
        <React.Fragment>
            <Header status='login'/>
            <div className={styles.App}>
                <Login checkLoginHandler={props?.checkLoginHandler} />
            </div>
        </React.Fragment>
    );
}

export default App;

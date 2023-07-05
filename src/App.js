import React from 'react';
import styles from './App.module.css';
import Header from './App/components/Header/header';
import Login from './App/components/Login/login';

function App() {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.App}>
                <Login />
            </div>
        </React.Fragment>
    );
}

export default App;

import React from 'react';
import styles from './index.module.css';
import Header from './../../components/Header/header';

const Home = (props) => {
    return (
        <React.Fragment>
            <Header status='home' logout={props?.logoutHandler} />
            <h1 style={{'textAlign':'center'}}>Welcome on Home Screen!</h1>
        </React.Fragment>
    );
}

export default Home;

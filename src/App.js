import React,{ useState, useEffect } from 'react';
import styles from './App.module.css';
import Login from './App/screens/Login/index';
import Home from './App/screens/Home/index'

const App = () => {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        setIsLogin(localStorage.getItem('isLogin'))
    }, [isLogin])
    
    const checkLoginHandler = () => {
        localStorage.setItem('isLogin', 'true')
        setIsLogin(true)
    }

    const logoutHandler = () => {
        localStorage.setItem('isLogin', 'false')
        setIsLogin(false)
    }
    

    return (
        <div className={styles.App}>
            {isLogin == 'true'
                ? <Home logoutHandler={logoutHandler} />
                : <Login checkLoginHandler={checkLoginHandler} />
            }
        </div>
    );
}

export default App;

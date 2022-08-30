import React, { Component } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="card">
                    <div className='row login'>
                        <div className='column'>
                            <img className='login__image' src={require('../../assets/images/logo_kominfo.png')} alt="Kominfo Logo" />
                        </div>
                        <div className='column login__form-wrapper'>
                            <span className='login__title'>Admin Login</span>
                            <form action="" className='login__form'>
                                <div className='input-wrapper'>
                                    <input className='input' type="text" placeholder='Username' />
                                    <FaUser className='input__icon'  />
                                </div>
                                <div className='input-wrapper'>
                                    <input className='input' type="text" placeholder='Password' />
                                    <FaLock className='input__icon' />
                                </div>
                                <input className='btn btn--primary login__btn' type="button" value='Login' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
import Joi from 'joi';
import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import Form from '../utils/Form';

class Login extends Form {
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        username: 
            Joi
            .string()
            .alphanum()
            .required()
            .messages({
                'string.empty': 'Kolom username tidak boleh kosong.',
                'string.alphanum': 'Username hanya bisa menggunakan angka dan huruf.',
            }),
        password: 
            Joi
            .string()
            .alphanum()
            .required()
            .messages({
                'string.empty': 'Kolom password tidak boleh kosong.',
                'string.alphanum': 'Password hanya bisa menggunakan angka dan huruf.'
            })
    };

    doSubmit() {
        console.log('Submitted');
    }

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
                            <form action="" className='login__form' onSubmit={this.handleSubmit}>
                                {this.renderInput(FaUser, 'username', {placeholder: 'Username', autoComplete: 'off', autoFocus: true})}
                                {this.renderInput(FaLock, 'password', {placeholder: 'Password', type: 'password'})}
                                <button className='btn btn--primary login__btn'>LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
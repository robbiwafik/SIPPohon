import React from 'react';


const Input = ({ name, type, placeholder, Icon, onChange, error, ...other }) => {
    return (
        <div className={error ? 'input-wrapper input-wrapper--error' : 'input-wrapper'}>
            <input 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                className={'input'}  
                onChange={onChange}
                {...other} />
            <Icon className='input__icon' />
            {error && <span className='input__error-message'>{error}</span>}
        </div>
    );
}

export default Input;
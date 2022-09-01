import React from 'react';


const SidebarItem = ({ Icon, key, label, link }) => {
    return (
        <li
            key={key}
            className='sidebar__item-wrapper'>
            <a href={link} className='sidebar__item'>
                <Icon className='sidebar__icon' />
                {label}
            </a>
        </li>
    );
}

export default SidebarItem;
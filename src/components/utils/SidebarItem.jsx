import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarItem = ({ Icon, label, link }) => {
    const location = useLocation();

    const getClassName = () => {
        if (location.pathname === link)
            return 'sidebar__item active';

        return 'sidebar__item';
    }

    return (
        <li
            className='sidebar__item-wrapper'>
            <NavLink to={link} className={() => getClassName()}>
                <Icon className='sidebar__icon' />
                {label}
            </NavLink>
        </li>
    );
}

export default SidebarItem;
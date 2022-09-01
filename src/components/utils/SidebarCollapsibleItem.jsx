import React from 'react';
import { FiMenu } from 'react-icons/fi';
import SidebarItem from './SidebarItem';


const SidebarCollapsibleItem = ({ key, label, Icon, subItems }) => {
    const ref = React.createRef();

    const handleCollapse = ({ current }) => {
        if (current.className === 'sidebar__item collapsible')
            current.className += ' collapsible--expanded';
        else
            current.className = 'sidebar__item collapsible';
    }

    return (
        <li key={key} className='sidebar__item-wrapper'>
            <div ref={ref} className='sidebar__item collapsible' onClick={() => handleCollapse(ref)}>
                <Icon className='sidebar__icon' />
                {label}
                <FiMenu className='collapsible__icon' />
                <ul className='sidebar__items collapsible__items'>
                    {subItems.map(subItem => (
                        <SidebarItem 
                            Icon={subItem.Icon}
                            key={subItem.key}
                            label={subItem.label}
                            link={subItem.link}
                             />
                    ))}                
                </ul>
            </div>
        </li>
    );
}

export default SidebarCollapsibleItem;
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';


const SidebarCollapsibleItem = ({ label, Icon, subItems }) => {
    const ref = React.createRef();
    const {pathname} = useLocation();

    const getCollapsibleClass = () => {
        if (pathname.includes('/tabel/')) {
            return 'sidebar__item active collapsible collapsible--expanded';
        }
            
        return 'sidebar__item collapsible';
    }

    const handleCollapse = ({ current }) => {
        console.log('called');
        if (!current.className.includes('collapsible--expanded'))
            current.className += ' collapsible--expanded';
        else
            current.className = current.className.replace('collapsible--expanded', '');
    }

    return (
        <li className='sidebar__item-wrapper collapsible-wrapper'>
            <div ref={ref} className={getCollapsibleClass(ref)} onClick={() => handleCollapse(ref)}>
                <Icon className='sidebar__icon' />
                {label}
                <FiMenu className='collapsible__icon' />
            </div>
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
        </li>
    );
}

export default SidebarCollapsibleItem;
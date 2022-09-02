import React from 'react';
import SidebarCollapsibleItem from './SidebarCollapsibleItem';
import SidebarItem from './SidebarItem';

const Sidebar = ({items=[]}) => {
    return (
        <aside className='sidebar'>
            <ul className='sidebar__items'>
                {items.map((item) => {
                    if (item.subItems)
                        return <SidebarCollapsibleItem
                                key={item.key}
                                Icon={item.Icon}
                                label={item.label}
                                subItems={item.subItems} />;
                    else 
                        return <SidebarItem 
                                    Icon={item.Icon}
                                    key={item.key}
                                    label={item.label}
                                    link={item.link} />;
                })}
            </ul>
        </aside>
    );
}


export default Sidebar;
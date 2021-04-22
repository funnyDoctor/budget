import {Link} from 'react-router-dom';
import React, {useLayoutEffect, useState} from 'react';


const Sidebar = () => {
    const menuItems = [
        {name: 'Features', to: '/', icon: '/icons/features.svg'},
        {name: 'Budget', to: '/budget', icon: '/icons/budget.svg'},
        {name: 'Statistics', to: '/statistics', icon: '/icons/graph.svg'},
        {name: 'Settings', to: '/settings', icon: '/icons/services.svg'},
    ];

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);

    // Set selected menu item based on URL pathname
    useLayoutEffect(() => {
        const path = window.location.pathname;
        const parts = path.split('/');
        if (path !== '/' && parts[1].charAt(0).toUpperCase() !== menuItems[0].name) {
            const selectedItem = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
            setSelectedMenuItem(selectedItem)
        }
    }, [menuItems])

    const clickMenuItemHandler = name => setSelectedMenuItem(name);

    const menuItemsRender = menuItems.map((item, idx) => {
        const isItemSelected = selected === item.name;
        return (
            <div className={'sidebar__container--menu'} key={idx}>
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                    <div
                        onClick={() => clickMenuItemHandler(item.name)}
                        className={isItemSelected ? 'sidebar__container--item selected': 'sidebar__container--item after'}>
                        <img className={'sidebar__container--image'} src={item.icon} alt={item.name}/>
                        <div className={'sidebar__container--text'}>{item.name}</div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className={'sidebar'}>
            <div className={'sidebar__header'}>
                <p className={'sidebar__header--heading'}>Личный Бюджет</p>
            </div>
            <div className={'sidebar__container'}>{menuItemsRender}</div>
        </div>
    );
};

export default Sidebar;
import React, { useState } from 'react'
import UilHome from '@iconscout/react-unicons/icons/uil-home'
import UilBuilding from '@iconscout/react-unicons/icons/uil-building'
import UilFolder from '@iconscout/react-unicons/icons/uil-folder'
import UilUser from '@iconscout/react-unicons/icons/uil-user'
import UilAnalytics from '@iconscout/react-unicons/icons/uil-analytics'
import UilTime from '@iconscout/react-unicons/icons/uil-clock'
import UilCalendar from '@iconscout/react-unicons/icons/uil-calendar-alt'
import UilAddon from '@iconscout/react-unicons/icons/uil-plus-circle'
import userAvatar from '../images/avatar.png'

import { useDarkMode } from './DarkModeContext';

const Sidebar = ({ sidebarClosed }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();


    return (
        <>
            <nav className={`${sidebarClosed ? '' : 'close'}`}>
                <div className="logo-name">
                    <div className="logo-image">
                        {/* <img src="images/logo.png" alt="" /> */}
                    </div>
                    <span className="logo_name">Admin</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li><a href="/dashboard">
                            <UilHome />
                            <span className="link-name">Dahsboard</span>
                        </a></li>
                        <li><a href="/chart">
                            <UilBuilding />
                            <span className="link-name">Content</span>
                        </a></li>
                        <li><a href="#">
                            <UilFolder />
                            <span className="link-name">Analytics</span>
                        </a></li>
                        <li><a href="#">
                            <UilUser />
                            <span className="link-name">Like</span>
                        </a></li>
                        <li><a href="#">
                            <UilAnalytics />
                            <span className="link-name">Comment</span>
                        </a></li>
                        <li><a href="#">
                            <UilTime />
                            <span className="link-name">Share</span>
                        </a></li>
                        <li><a href="#">
                            <UilCalendar />
                            <span className="link-name">Share</span>
                        </a></li>
                        <li><a href="#">
                            <UilAddon />
                            <span className="link-name">Share</span>
                        </a></li>
                    </ul>

                    <ul className="logout-mode">
                        <li className="mode">
                            <div className={`switch-toggle ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                                <a href="#" onClick={toggleDarkMode}>
                                    <i className="uil uil-moon"></i>
                                    <span className="switch"></span>
                                </a>
                            </div>
                            <div className="mode-toggle">
                                <img src={userAvatar} className='img-fluid' />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar
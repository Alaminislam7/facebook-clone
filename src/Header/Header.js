import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import Add from '@material-ui/icons/Add'
import NotificationsActive from '@material-ui/icons/NotificationsActive'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Forum from '@material-ui/icons/Forum'
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../stateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div>
            <div className='header'>
                <div className='header__left'>
                    <img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19762.png" alt="" />

                    <div className="header__input">
                        <SearchIcon />
                        <input placeholder="Search Facebook" type="text" />
                    </div>
                </div>
                <div className="header__middle">
                    <div className="header__option header__option-active">
                        <HomeIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SubscriptionsOutlined fontSize="large" />
                    </div>
                    <div className="header__option">
                        <StorefrontOutlined fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircle fontSize="large" />
                    </div>
                </div>

                <div className="header__right">
                    <div className="header__info">
                        <Avatar src={user.photoURL} />
                        <h4>{user.displayName}</h4>
                    </div>
                    <IconButton>
                        <Add />
                    </IconButton>
                    <IconButton>
                        <Forum />
                    </IconButton>
                    <IconButton>
                        <NotificationsActive />
                    </IconButton>
                    <IconButton>
                        <ExpandMore />
                    </IconButton>

                </div>

            </div>
        </div>
    )
}

export default Header

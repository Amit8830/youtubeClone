import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'

const Header = () => {

    const [inputSearch, setInputSearch] = useState('');


    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                <img className="header_logo" src="data:image/jpeg;base64,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" alt="" />

                </Link>
            </div>


            <div className="header_input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />

                <Link to={`/search/${inputSearch}`}><SearchIcon className="header_inputbtn" />
                </Link>

            </div>


            <div className="header_icon">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsActiveIcon className="header_icon" />
                <AccountCircleIcon alt="Amit" src="https://lh3.googleusercontent.com/ogw/ADGmqu_rQfHIJNtWvE7FFzpvBYifDUuR0R4Ouu9UT-dk_6o=s32-c-mo" />
            </div>
        </div>
    )
}

export default Header;

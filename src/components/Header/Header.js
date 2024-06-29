import React from 'react';
import "./header.css";
import NetflixLog from "../../assets/images/NetflixLogo.png";
// icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className="header_outer_container">
        <div className="header_container">
            <div className="header_left">
                <ul>
                    <li><img src={NetflixLog} alt="Netflix logo" width={100}/></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by language</li>
                </ul>
            </div>

            <div className="header_right">
                <ul>
                    <li> <SearchIcon /> </li>
                    <li> <NotificationsNoneIcon /> </li>
                    <li> <AccountBoxIcon /> </li>
                    <li> <ArrowDropDownIcon /> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
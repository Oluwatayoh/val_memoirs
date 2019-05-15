import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import profPicture from '../assets/passport.jpg';
import MailIcon from '@material-ui/icons/Mail';



function TopBar() {
    return (
        <div className="topBar">
            <div className="profRef">
                <img className="profPic" alt="prof_picture" src={profPicture} />
                <h6>Ojo Oluwatayo Micheal</h6>
            </div>

            <div className="actRef">
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </div>

        </div>
    );
}

export default TopBar;
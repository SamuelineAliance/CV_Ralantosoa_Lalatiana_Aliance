import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    animation: 'fadeInLeft',
  },
  iconWrapper: {
    flex: '0 0 30px', // Fixed width for icon wrapper
  },
  icon: {
    color: 'rgb(75, 75, 253)',
    fontSize: '30px',
  },
  infoWrapper: {
    flex: '1', // Expand to fill remaining space
    marginLeft: '10px', // Add some space between icon and text
  },
  heading: {
    margin: '0',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.54)', // Muted text color
  },
});

function Information() {
  const classes = useStyles();

  return (
    <div className="col-md-5 col-sm-5">
      <div className={classes.contactRow}>
        <div className={classes.iconWrapper}>
          <CallIcon className={classes.icon} />
        </div>
        <div className={classes.infoWrapper}>
          <h3 className={classes.heading}>Call</h3>
          <span className={classes.text}>+033 24 820 38</span>
        </div>
      </div>
      <div className={classes.contactRow}>
        <div className={classes.iconWrapper}>
          <EmailIcon className={classes.icon} />
        </div>
        <div className={classes.infoWrapper}>
          <h3 className={classes.heading}>Email</h3>
          <span className={classes.text}>example@example.com</span>
        </div>
      </div>
      <div className={classes.contactRow}>
        <div className={classes.iconWrapper}>
          <RoomIcon className={classes.icon} />
        </div>
        <div className={classes.infoWrapper}>
          <h3 className={classes.heading}>Location</h3>
          <span className={classes.text}>Morondava</span>
        </div>
      </div>
    </div>
  );
}

export default Information;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import GoogleButton from './GoogleButton';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {
  props: {
    classes: PropTypes.Object,
  };

  logout = () => {
    document.cookie = `${encodeURIComponent(
      'spelly-token',
    )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.flex} type="title" color="inherit">
              Spelling App Thing
            </Typography>
            <GoogleButton />
            <Button raised color="primary" onClick={this.logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
{
  /* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
  <MenuIcon />
</IconButton>; */
}
export default withStyles(styles)(Header);

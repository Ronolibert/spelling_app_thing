import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const SimpleCard = ({ word }) => (
  <div>
    <Card
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        minHeight: 200,
      }}
    >
      <CardContent>
        <Typography style={{ wordBreak: 'break-word' }}>{word}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button dense>Learn More</Button>
      </CardActions> */}
    </Card>
  </div>
);

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

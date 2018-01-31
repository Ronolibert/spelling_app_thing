import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton/IconButton';
import VolumeUp from 'material-ui-icons/VolumeUp';

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

class VocabularyCard extends Component {
  state = {
    hovered: false,
  };

  readWord = word => {
    const msg = new SpeechSynthesisUtterance(word);
    this.currentWord = msg;
    window.speechSynthesis.speak(msg);
  };

  stopReadingWord = word => {
    window.speechSynthesis.cancel();
    this.readWord(word);
  };

  render() {
    const { word } = this.props;
    const { hovered } = this.state;
    return (
      <div
        onMouseOver={() =>
          this.setState(() => ({
            hovered: true,
          }))
        }
        onMouseLeave={() => this.setState(() => ({ hovered: false }))}
      >
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
            {hovered && (
              <IconButton
                onClick={() =>
                  window.speechSynthesis.speaking
                    ? this.stopReadingWord(word)
                    : this.readWord(word)
                }
              >
                <VolumeUp style={{ height: 45, width: 45 }} />
              </IconButton>
            )}
            {!hovered && (
              <Typography style={{ wordBreak: 'break-word' }}>
                {word}
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}
VocabularyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VocabularyCard);

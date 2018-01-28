import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const AddVocabularyCard = () => (
  <div>
    <Card
      style={{
        alignItems: 'center',
        borderStyle: 'dashed',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        minHeight: 200,
      }}
    >
      <CardContent>
        <Button fab color="primary" aria-label="add">
          <AddIcon />
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default AddVocabularyCard;

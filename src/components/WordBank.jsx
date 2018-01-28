import React from 'react';
import styled from 'styled-components';
import VocabularyCard from './VocabularyCard';
import { googleGrey } from '../colors';

const WordBankContainer = styled.div`
  background-color: ${googleGrey};
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  padding: 50px;
`;

const WordBank = ({ data }) => (
  <WordBankContainer>
    {data.map((card, i) => <VocabularyCard key={card.word} word={card.word} />)}
  </WordBankContainer>
);

export default WordBank;

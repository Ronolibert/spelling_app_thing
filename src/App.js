import React, { Component } from 'react';
import Header from './components/Header';
import WordBank from './components/WordBank';
import './App.css';

const mockData = () => {
  const data = [
    {
      word:
        'remajrmjiremnaijfnejaifnaijfnaijsfnasijdnasjidnsaijdnsaijdnsaijdnasjiremajrmjiremnaijfnejaifnaijfnaijsfnasijdnasjidnsaijdnsaijdnsaijdnasjiremajrmjiremnaijfnejaifnaijfnaijsfnasijdnasjidnsaijdnsaijdnsaijdnasjiremajrmjiremnaijfnejaifnaijfnaijsfnasijdnasjidnsaijdnsaijdnsaijdnasji',
    },
  ];
  for (let i = 0; i < 30; i++) {
    data.push({ word: `This is item ${i}` });
  }
  return data;
};
class App extends Component {
  render() {
    const data = mockData();
    return (
      <div>
        <Header />
        <WordBank data={data} />
      </div>
    );
  }
}

export default App;

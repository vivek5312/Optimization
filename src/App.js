import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './DemoOutput';
import './App.css';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortOrder, setSortOrder] = useState('ascending');

  const changeTitle = useCallback(() => {
    setListTitle('New List');
  }, []);

  const ListItem = [5, 3, 1, 10, 9];

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'ascending' ? 'descending' : 'ascending'));
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput title={listTitle} items={ListItem} sortOrder={sortOrder} />
      <Button onClick={changeTitle}>Change List Title</Button>
      <Button onClick={toggleSortOrder}>
        Change to {sortOrder === 'ascending' ? 'Descending' : 'Ascending'} Order
      </Button>
    </div>
  );
}

export default App;


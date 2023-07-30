import React from 'react';

const sortAscending = (list) => {
  console.log('Items are sorted in ascending order');
  return list.slice().sort((a, b) => a - b);
};

const sortDescending = (list) => {
  console.log('Items are sorted in descending order');
  return list.slice().sort((a, b) => b - a);
};

const DemoOutput = (props) => {
  const { items, sortOrder } = props;

  let sortedList;
  if (sortOrder === 'ascending') {
    sortedList = sortAscending(items);
  } else {
    sortedList = sortDescending(items);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoOutput);


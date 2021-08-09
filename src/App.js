import React from 'react';

import ListItem from './component/list-item/list-item.component'

function App() {
  const itemArray = [
    {
      imgSrc: 'https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg',
      name: 'Iphone 11',
      price: `1 349,99 $`,
    },
    {
      imgSrc: `https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg`,
      name: 'Razer Blade',
      price: `7 633,64 $`,
    },
    {
      imgSrc: `https://images.lpcdn.ca/924x615/201903/15/1622571-audi-r8-crdit-audi.jpg`,
      name: 'audi R8',
      price: `216 245 $`,
    },
  ];
  return (
    <div className="container">
      <ListItem itemArray={itemArray} />
    </div>
  );
}

export default App;

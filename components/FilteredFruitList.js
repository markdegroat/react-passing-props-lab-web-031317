import React from 'react';
import { Component } from 'react';

const FilteredFruitList = (props) => {



    const list = !props.filter ? props.items :
      props.items.filter(i => i.fruit_type == props.filter);

    return (
      <ul className="fruit-list">
        {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
    );
}


export default FilteredFruitList;

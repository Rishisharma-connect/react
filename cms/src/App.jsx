import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';




const App = () => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(searchTerm + event.target.value);
  };

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];


  const List = (props) => (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))} </ul>
  );

  const Item = (props) => (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>);

  const Search = (props) => {


    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={props.onSearch} />
        <p>
          Searching for <strong>{searchTerm}</strong>.
        </p>
      </div>
    );
  };

  const title = 'Natter CMS';


  return (



    <div>
      <h1>{title}</h1>
      <Search onSearch={handleSearch} />

      <hr />

      <List list={stories} />

    </div>

  )
}

export default App

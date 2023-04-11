import * as React from 'react';

function App(){
const welcome = {
  greeting: 'Hello',
  title: 'React'

}


function getTitle(title) {
  return title;
  }

  return (
      <div>
        <h1>Hello {welcome.greeting} {getTitle('World')}</h1>



        <label htmlFor="search">Search: </label>
        <input id='search' type='text'></input>
      </div>



  );
}

export default App

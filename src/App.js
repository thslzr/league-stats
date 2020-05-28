import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const testClick = async () => {
      const response = await axios('http://localhost:5000/client');
      setName(response.data.displayName);
      console.log(response);
    };
    testClick();
  }, []);

  return (
    <Fragment>
      <p>{name}</p>
    </Fragment>
  );
};

export default App;

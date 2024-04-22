import React from 'react';

const App = () => {
  console.log('test');

  return (
    <>
      <div>Hello React!</div>
      <div>.env: process.env.TEST={process.env.TEST}</div>
    </>
  );
}

export default App;

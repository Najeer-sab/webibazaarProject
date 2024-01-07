import React from 'react';
import Scrollcards from './scrollcards';

const imageSources = [
    "/images/electronic/1.png",
    "/images/electronic/2.png",
    "/images/electronic/3.png",
    "/images/electronic/4.png",
    "/images/electronic/5.png",
    "/images/electronic/6.png",
    "/images/electronic/7.png",
    "/images/electronic/1.png"
];

function App() {
  return (
    <div className="">
      <Scrollcards images={imageSources} />
    </div>
  );
}

export default App;
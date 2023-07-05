import React from 'react';

function Home(): JSX.Element {
  return (
    <>
      <div className="App">
        <button
          onClick={() =>
            (window.location.href = 'http://localhost:1337/api/connect/google')
          }
        >
          Login via Google
        </button>
      </div>
    </>
  );
}

export default Home;

import './App.css';
import { useState } from 'react';

function App() {
  const [showFact, setShowFact] = useState(false);
  const [isGrey, setIsGrey] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const toggleFact = () => setShowFact((prev) => !prev);
  const toggleTheme = () => setIsGrey((prev) => !prev);
  const toggleTextColor = () => setIsRed((prev) => !prev);

  const appStyle = {
    backgroundColor: isGrey ? '#d3d3d3' : '#ffffff',
    color: isRed ? '#c62828' : '#222222',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  };

  return (
    <div className="App" style={appStyle}>
      <h1 className="name">Rudra Chauhan</h1>
      <img
        className="prom-pic"
        src={`${process.env.PUBLIC_URL}/Prom_PIc.JPG`}
        alt="Prom"
      />
      <div className="buttons">
        <div className="button-row">
          <button onClick={toggleFact}>
            {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
          </button>
          <button onClick={toggleTheme}>Toggle Grey Theme</button>
        </div>
        <button className="accent-button" onClick={toggleTextColor}>
          {isRed ? 'Reset Text Color' : 'Turn Text Red'}
        </button>
      </div>
      {showFact && <p className="fun-fact">I love playing tennis!</p>}
    </div>
  );
}

export default App;

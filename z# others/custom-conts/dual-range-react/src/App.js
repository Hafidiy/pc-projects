import React, { useState } from 'react';
import './App.css';
import DualRange from './Dual-range'

const App = () => {
    // ----------------------
    const lineStyles = { width: 150, height: 6, bgColor: '#555' }
    const [control1Styles, setControl1Styles] = useState({
        size: 18,
        position: [-9, -6],
        bgColor: '#ff55a5',
        boxShadow: '0px 0px 50px 4px rgba(255,85,165,0.91)'
    })
    const [control2Styles, setControl2Styles] = useState({
        size: 18,
        position: [-9, -6],
        bgColor: '#ff5860',
        boxShadow: '0px 0px 50px 4px rgba(255,88,96,1)'
    })
    // ----------------------

    const step = [0.1, 0, 10]
    const [currentValue, setCurrentValue] = useState([step[1], step[2]])

    return (
        <div className="App">
            <header className="App-header">
                <DualRange
                    step={step}
                    currentValue={currentValue}
                    setCurrentValue={setCurrentValue}
                    lineStyles={lineStyles}
                    control1Styles={control1Styles}
                    setControl1Styles={setControl1Styles}
                    control2Styles={control2Styles}
                    setControl2Styles={setControl2Styles}
                />
            </header>
        </div>
    );
}

export default App;

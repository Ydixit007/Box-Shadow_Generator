import {useState} from 'react';
import {Slider} from '@material-ui/core';
import './App.css';
import Box from './components/box';

function App() {

const [x, setx] = useState(0);
const [Y, setY] = useState(0);
const [spread, setSpread] = useState(0);
const [blur, setBlur] = useState(0);
const [color, setColor] = useState("black");



  return (
    <div className="app">
      <div className="appControl">
          <h3>
            Box Shadow Generator Tool.
          </h3>
        <div className="appControlCont">
         <div className="slider">
         X: <Slider color='secondary' min={-200} value={x} max={200} onChange={(event , val) => setx(val) } style={{ marginLeft: 20 , marginRight: 20 }} />
         <input type="text" value={x} onChange={ e => setx(e.target.value)} name="" id="4"/>
         </div>

         <div className="slider">
         Y: <Slider color='secondary' min={-200} value={Y} max={200} onChange={(event , val) => setY(val) } style={{ marginLeft: 20 , marginRight: 20 }} />
         <input type="text" value={Y} onChange={ e => setY(e.target.value)} name="" id="3"/>
         </div>

         <div className="slider">
         Blur: <Slider color='secondary' min={0} value={blur} max={200} onChange={(event , val) => setBlur(val) } style={{ marginLeft: 20 , marginRight: 20 }} />
         <input type="text" value={blur} onChange={ e => setBlur(e.target.value)} name="" id="2"/>
         </div>

         <div className="slider">
         Spread: <Slider color='secondary' min={0} value={spread} max={200} onChange={(event , val) => setSpread(val) } style={{ marginLeft: 20 , marginRight: 20 }} />
         <input type="text" value={spread} onChange={ e => setSpread(e.target.value)} name="" id="1"/>
         </div>

         <div className="slider">
         Color: <input type="text" onChange={e => setColor(e.target.value)} name="" id="color"/>
         </div>

        </div>
      </div>
      <div className="boxdisplay">
        <Box x={x} Y={Y} blur={blur} spread={spread} color={color} />
      </div>
    </div>
  );
}

export default App;

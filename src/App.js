
import './App.css';
import React from "react";
function App() {
  const[btc,setBtc]=React.useState(0)
  const[doge,setDoge]=React.useState(0)
  const[ripple,setRipple]=React.useState(0)
  const[bit,setBit]=React.useState("")
  const[dog,setDog]=React.useState("")
  const[rip,setRip]=React.useState("")

  const handleRip=(e)=>{
    setRip(e.target.value)
  }

  const handleBit=(e)=>{
    setBit(e.target.value)
  }
  const handleDog=(e)=>{
    setDog(e.target.value)
  }
  return (
    <div className="App">
     <p>BTC</p>
     <p>$25000</p>
     <input value={bit} type='number' placeholder='Qty' onChange={handleBit}/>
     <button onClick={()=>setBtc(btc+1)}>ADD</button>

     <p>Doge</p>
     <p>$0.75</p>
     <input value={dog} type='number' placeholder='Qty' onChange={handleDog}/>
     <button onClick={()=>setDoge(doge+1)}>ADD</button>

     <p>Ripple</p>
     <p>$1.5</p>
     <input value={rip} type='number' placeholder='Qty' onChange={handleRip}/>
     <button onClick={()=>setRipple(ripple+1)}>ADD</button>

     <div>
      <p>MyCart</p>
      <p>Qty</p>
      <p>{bit}</p>
      <p>Amount</p>
      <p>{25000*btc}</p>
      </div>
    </div>

   
  );
}

export default App;
